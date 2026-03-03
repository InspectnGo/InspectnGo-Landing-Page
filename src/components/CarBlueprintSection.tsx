import { useRef, useState, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Line } from "@react-three/drei";
import * as THREE from "three";

/* ─── Issue data ─── */
interface CarIssue {
  id: string;
  label: string;
  description: string;
  severity: "critical" | "warning" | "info";
  position: [number, number, number]; // anchor point on the car
}

const ISSUES: CarIssue[] = [
  {
    id: "engine",
    label: "Engine",
    description: "Overheating — coolant leak detected",
    severity: "critical",
    position: [1.5, 0.55, 0],
  },
  {
    id: "front-brake",
    label: "Front Brakes",
    description: "Brake pads are worn down to 4mm, approaching the minimum safe limit of 3mm",
    severity: "warning",
    position: [1.6, -0.15, 0.85],
  },
  {
    id: "rear-tire",
    label: "Rear Left Tire",
    description: "Tread depth below safe limit",
    severity: "critical",
    position: [-1.5, -0.15, 0.85],
  },
  {
    id: "transmission",
    label: "Transmission",
    description: "Minor vibration at high RPM",
    severity: "warning",
    position: [0.3, 0.1, 0],
  },
  {
    id: "exhaust",
    label: "Exhaust System",
    description: "Emissions slightly above threshold",
    severity: "info",
    position: [-2.2, -0.1, 0],
  },
  {
    id: "headlight",
    label: "Right Headlight",
    description: "LED module flickering intermittently",
    severity: "info",
    position: [2.35, 0.35, -0.55],
  },
];

/* ─── Wireframe Car built from primitives ─── */
function CarModel() {
  const group = useRef<THREE.Group>(null!);

  // Blueprint‑style material
  const wireMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#1E88FF",
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      }),
    [],
  );

  const edgeMat = useMemo(
    () =>
      new THREE.LineBasicMaterial({ color: "#1E88FF", transparent: true, opacity: 0.9 }),
    [],
  );

  // Helper: mesh + edges
  const BlueprintMesh = ({
    geometry,
    position = [0, 0, 0] as [number, number, number],
    rotation = [0, 0, 0] as [number, number, number],
    scale = [1, 1, 1] as [number, number, number],
  }: {
    geometry: THREE.BufferGeometry;
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: [number, number, number];
  }) => {
    const edges = useMemo(() => new THREE.EdgesGeometry(geometry, 15), [geometry]);
    return (
      <group position={position} rotation={rotation} scale={scale}>
        <mesh geometry={geometry} material={wireMat} />
        <lineSegments geometry={edges} material={edgeMat} />
      </group>
    );
  };

  // Geometries (created once)
  const bodyGeo = useMemo(() => new THREE.BoxGeometry(4.2, 0.7, 1.8), []);
  const cabinGeo = useMemo(() => new THREE.BoxGeometry(2.2, 0.7, 1.6), []);
  const hoodGeo = useMemo(() => new THREE.BoxGeometry(1.4, 0.35, 1.65), []);
  const trunkGeo = useMemo(() => new THREE.BoxGeometry(0.9, 0.35, 1.65), []);
  const wheelGeo = useMemo(
    () => new THREE.TorusGeometry(0.3, 0.1, 12, 24),
    [],
  );
  const hubGeo = useMemo(() => new THREE.CylinderGeometry(0.15, 0.15, 0.22, 16), []);
  const bumperGeo = useMemo(() => new THREE.BoxGeometry(0.15, 0.35, 1.7), []);
  const headlightGeo = useMemo(() => new THREE.SphereGeometry(0.12, 12, 12), []);

  const wheelPositions: [number, number, number][] = [
    [1.35, -0.25, 0.85],
    [1.35, -0.25, -0.85],
    [-1.35, -0.25, 0.85],
    [-1.35, -0.25, -0.85],
  ];

  return (
    <group ref={group}>
      {/* Main body */}
      <BlueprintMesh geometry={bodyGeo} position={[0, 0.15, 0]} />
      {/* Cabin */}
      <BlueprintMesh geometry={cabinGeo} position={[0, 0.75, 0]} />
      {/* Hood slope */}
      <BlueprintMesh geometry={hoodGeo} position={[1.55, 0.57, 0]} rotation={[0, 0, -0.15]} />
      {/* Trunk */}
      <BlueprintMesh geometry={trunkGeo} position={[-1.6, 0.57, 0]} rotation={[0, 0, 0.1]} />
      {/* Bumpers */}
      <BlueprintMesh geometry={bumperGeo} position={[2.17, 0.05, 0]} />
      <BlueprintMesh geometry={bumperGeo} position={[-2.17, 0.05, 0]} />
      {/* Headlights */}
      <BlueprintMesh geometry={headlightGeo} position={[2.25, 0.25, 0.55]} />
      <BlueprintMesh geometry={headlightGeo} position={[2.25, 0.25, -0.55]} />
      {/* Tail‑lights */}
      <BlueprintMesh geometry={headlightGeo} position={[-2.25, 0.25, 0.55]} />
      <BlueprintMesh geometry={headlightGeo} position={[-2.25, 0.25, -0.55]} />
      {/* Wheels */}
      {wheelPositions.map((pos, i) => (
        <group key={i} position={pos}>
          <BlueprintMesh geometry={wheelGeo} />
          <BlueprintMesh geometry={hubGeo} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      ))}
    </group>
  );
}

/* ─── Animated grid floor ─── */
function GridFloor() {
  return (
    <gridHelper
      args={[20, 40, "#1E88FF", "#1E88FF"]}
      position={[0, -0.65, 0]}
      material-transparent
      material-opacity={0.08}
    />
  );
}

/* ─── Pulsing issue marker ─── */
function IssueMarker({
  issue,
  active,
  onSelect,
}: {
  issue: CarIssue;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const s = 1 + 0.25 * Math.sin(clock.getElapsedTime() * 3);
    ref.current.scale.setScalar(active || hovered ? s * 1.3 : s);
  });

  const color =
    issue.severity === "critical"
      ? "#FF4444"
      : issue.severity === "warning"
        ? "#FFB020"
        : "#1E88FF";

  // Connector line from marker up to label
  const lineEnd: [number, number, number] = [
    issue.position[0],
    issue.position[1] + 1.1,
    issue.position[2],
  ];

  return (
    <group>
      {/* Dashed connector */}
      <Line
        points={[issue.position, lineEnd]}
        color={color}
        lineWidth={1}
        dashed
        dashSize={0.08}
        gapSize={0.05}
        transparent
        opacity={active || hovered ? 1 : 0.5}
      />

      {/* Dot on car */}
      <mesh
        ref={ref}
        position={issue.position}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(issue.id);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>

      {/* HTML label */}
      <Html position={lineEnd} center distanceFactor={6} zIndexRange={[10, 0]}>
        <button
          className={`blueprint-label ${active ? "blueprint-label--active" : ""}`}
          style={{ "--marker-color": color } as React.CSSProperties}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(issue.id);
          }}
        >
          <span className="blueprint-label-dot" style={{ background: color }} />
          {issue.label}
        </button>
      </Html>
    </group>
  );
}

/* ─── Detail panel (shows when an issue is selected) ─── */
function DetailPanel({
  issue,
  onClose,
}: {
  issue: CarIssue | null;
  onClose: () => void;
}) {
  if (!issue) return null;

  const severityLabel =
    issue.severity === "critical"
      ? "Critical"
      : issue.severity === "warning"
        ? "Warning"
        : "Info";
  const color =
    issue.severity === "critical"
      ? "#FF4444"
      : issue.severity === "warning"
        ? "#FFB020"
        : "#1E88FF";

  return (
    <div className="blueprint-detail" style={{ "--marker-color": color } as React.CSSProperties}>
      <div className="blueprint-detail-header">
        <span className="blueprint-detail-severity" style={{ background: color }}>
          {severityLabel}
        </span>
        <button className="blueprint-detail-close" onClick={onClose}>
          ✕
        </button>
      </div>
      <h4 className="blueprint-detail-title">{issue.label}</h4>
      <p className="blueprint-detail-desc">{issue.description}</p>
    </div>
  );
}

/* ─── Scene wrapper ─── */
function Scene({
  activeId,
  setActiveId,
  engaged,
}: {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  engaged: boolean;
}) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
      <CarModel />
      <GridFloor />
      {ISSUES.map((issue) => (
        <IssueMarker
          key={issue.id}
          issue={issue}
          active={activeId === issue.id}
          onSelect={(id) => engaged && setActiveId(activeId === id ? null : id)}
        />
      ))}
      <OrbitControls
        enabled={engaged}
        enablePan={false}
        minDistance={3.5}
        maxDistance={10}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </>
  );
}

/* ─── Exported section ─── */
const CarBlueprintSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [engaged, setEngaged] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const activeIssue = ISSUES.find((i) => i.id === activeId) ?? null;

  // Reset when the canvas scrolls out of view
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setEngaged(false);
          setActiveId(null);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Click outside canvas content → disengage (optional: clicking background dismisses)
  const handleEngage = useCallback(() => {
    if (!engaged) setEngaged(true);
  }, [engaged]);

  return (
    <section className="blueprint-section">
      <div className="blueprint-inner">
        {/* Header */}
        <div className="blueprint-header">
          <h2 className="blueprint-title">
            Interactive Vehicle <span className="blueprint-title-accent">Inspection</span>
          </h2>
          <p className="blueprint-subtitle">
            Explore a 3‑D blueprint of a vehicle and discover flagged issues. Click any marker to
            learn more.
          </p>
        </div>

        {/* Legend */}
        <div className="blueprint-legend">
          <span className="blueprint-legend-item">
            <span className="blueprint-legend-dot" style={{ background: "#FF4444" }} />
            Critical
          </span>
          <span className="blueprint-legend-item">
            <span className="blueprint-legend-dot" style={{ background: "#FFB020" }} />
            Warning
          </span>
          <span className="blueprint-legend-item">
            <span className="blueprint-legend-dot" style={{ background: "#1E88FF" }} />
            Info
          </span>
        </div>

        {/* 3‑D Canvas */}
        <div
          ref={wrapRef}
          className={`blueprint-canvas-wrap ${engaged ? "blueprint-canvas-wrap--engaged" : ""}`}
          onClick={handleEngage}
        >
          <Canvas
            camera={{ position: [4, 3, 5], fov: 40 }}
            dpr={[1, 2]}
            style={{ background: "transparent" }}
            onPointerMissed={() => engaged && setActiveId(null)}
          >
            <Scene activeId={activeId} setActiveId={setActiveId} engaged={engaged} />
          </Canvas>

          {/* Click‑to‑interact overlay */}
          {!engaged && (
            <div className="blueprint-overlay">
              <div className="blueprint-overlay-content">
                <svg className="blueprint-overlay-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 15.5V3.5a1.5 1.5 0 0 1 3 0v6" />
                  <path d="M12 15.5V2a1.5 1.5 0 0 1 3 0v3.5" />
                  <path d="M9 15.5V3.5a1.5 1.5 0 0 1 3 0" />
                  <path d="M6 15.5V8a1.5 1.5 0 0 1 3 0" />
                  <path d="M6 15.5a6 6 0 0 0 12 0v-3.5" />
                  <path d="M6 15.5a6 6 0 0 0 6 6 6 6 0 0 0 6-6" />
                </svg>
                <span className="blueprint-overlay-text">Click to interact</span>
              </div>
            </div>
          )}

          {/* Detail panel overlay */}
          <DetailPanel issue={activeIssue} onClose={() => setActiveId(null)} />

          {/* Hint */}
          <p className="blueprint-hint">
            {engaged
              ? "Drag to rotate · Scroll to zoom · Click a marker for details"
              : "Click anywhere to start exploring"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarBlueprintSection;
