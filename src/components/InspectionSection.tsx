import { useRef, useState, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Line } from "@react-three/drei";
import * as THREE from "three";

/* ─── Issue data ─── */
interface CarIssue {
  id: string;
  label: string;
  description: string;
  position: [number, number, number];
}

const ISSUES: CarIssue[] = [
  {
    id: "engine",
    label: "Engine",
    description: "The engine is inspected for visible leaks, unusual noises, and signs of wear or damage. Mechanics also check key components that affect overall engine performance and reliability.",
    position: [1.5, 0.55, 0],
  },
  {
    id: "front-brake",
    label: "Front Brakes",
    description:
      "Front brake components are examined for wear, responsiveness, and overall condition to ensure the vehicle can stop safely and effectively.",
    position: [1.6, -0.15, 0.85],
  },
  {
    id: "rear-tire",
    label: "Rear Left Tire",
    description: "Tires are inspected for tread depth, uneven wear, and visible damage that may indicate alignment or suspension issues.",
    position: [-1.5, -0.15, 0.85],
  },
  {
    id: "transmission",
    label: "Transmission",
    description: "The transmission system is checked for proper operation and potential issues such as leaks, rough shifting, or signs of mechanical wear.",
    position: [0.3, 0.1, 0],
  },
  {
    id: "exhaust",
    label: "Exhaust System",
    description: "The exhaust system is checked for leaks, rust, or damage that could affect emissions, performance, or noise levels.",
    position: [-2.2, -0.1, 0],
  },
  {
    id: "headlight",
    label: "Right Headlight",
    description: "Headlights are inspected to ensure they are functioning correctly, properly aligned, and free from visible damage that could affect visibility and safety.",
    position: [2.35, 0.35, -0.55],
  },
];

/* ─── Wireframe Car built from primitives ─── */
function CarModel() {
  const group = useRef<THREE.Group>(null!);

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
      new THREE.LineBasicMaterial({
        color: "#1E88FF",
        transparent: true,
        opacity: 0.9,
      }),
    [],
  );

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
    const edges = useMemo(
      () => new THREE.EdgesGeometry(geometry, 15),
      [geometry],
    );
    return (
      <group position={position} rotation={rotation} scale={scale}>
        <mesh geometry={geometry} material={wireMat} />
        <lineSegments geometry={edges} material={edgeMat} />
      </group>
    );
  };

  const bodyGeo = useMemo(() => new THREE.BoxGeometry(4.2, 0.7, 1.8), []);
  const cabinGeo = useMemo(() => new THREE.BoxGeometry(2.2, 0.7, 1.6), []);
  const hoodGeo = useMemo(() => new THREE.BoxGeometry(1.4, 0.35, 1.65), []);
  const trunkGeo = useMemo(() => new THREE.BoxGeometry(0.9, 0.35, 1.65), []);
  const wheelGeo = useMemo(
    () => new THREE.TorusGeometry(0.3, 0.1, 12, 24),
    [],
  );
  const hubGeo = useMemo(
    () => new THREE.CylinderGeometry(0.15, 0.15, 0.22, 16),
    [],
  );
  const bumperGeo = useMemo(
    () => new THREE.BoxGeometry(0.15, 0.35, 1.7),
    [],
  );
  const headlightGeo = useMemo(
    () => new THREE.SphereGeometry(0.12, 12, 12),
    [],
  );

  const wheelPositions: [number, number, number][] = [
    [1.35, -0.25, 0.85],
    [1.35, -0.25, -0.85],
    [-1.35, -0.25, 0.85],
    [-1.35, -0.25, -0.85],
  ];

  return (
    <group ref={group}>
      <BlueprintMesh geometry={bodyGeo} position={[0, 0.15, 0]} />
      <BlueprintMesh geometry={cabinGeo} position={[0, 0.75, 0]} />
      <BlueprintMesh
        geometry={hoodGeo}
        position={[1.55, 0.57, 0]}
        rotation={[0, 0, -0.15]}
      />
      <BlueprintMesh
        geometry={trunkGeo}
        position={[-1.6, 0.57, 0]}
        rotation={[0, 0, 0.1]}
      />
      <BlueprintMesh geometry={bumperGeo} position={[2.17, 0.05, 0]} />
      <BlueprintMesh geometry={bumperGeo} position={[-2.17, 0.05, 0]} />
      <BlueprintMesh geometry={headlightGeo} position={[2.25, 0.25, 0.55]} />
      <BlueprintMesh geometry={headlightGeo} position={[2.25, 0.25, -0.55]} />
      <BlueprintMesh geometry={headlightGeo} position={[-2.25, 0.25, 0.55]} />
      <BlueprintMesh
        geometry={headlightGeo}
        position={[-2.25, 0.25, -0.55]}
      />
      {wheelPositions.map((pos, i) => (
        <group key={i} position={pos}>
          <BlueprintMesh geometry={wheelGeo} />
          <BlueprintMesh
            geometry={hubGeo}
            rotation={[Math.PI / 2, 0, 0]}
          />
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

  const color = "#00e5ff";

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
          className={`flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-slate-900/70 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-sm transition-all ${active ? "ring-2 ring-white/40 scale-110" : ""}`}
          style={{ "--marker-color": color } as React.CSSProperties}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(issue.id);
          }}
        >
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

  return (
    <div className="absolute bottom-4 left-4 z-20 w-72 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-md">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-sm font-bold text-ing-heading">{issue.label}</h4>
        <button
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
      <p className="text-xs leading-relaxed text-ing-body">
        {issue.description}
      </p>
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
          onSelect={(id) =>
            engaged && setActiveId(activeId === id ? null : id)
          }
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
const InspectionSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [engaged, setEngaged] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const activeIssue = ISSUES.find((i) => i.id === activeId) ?? null;

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

  const handleEngage = useCallback(() => {
    if (!engaged) setEngaged(true);
  }, [engaged]);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-[1184px] flex-col items-center gap-8 px-6 md:px-8">
        {/* Headline */}
        <div className="flex max-w-[736px] flex-col items-center gap-4 text-center">
          <p className="font-manrope text-lg font-bold uppercase tracking-[-0.1px] text-ing-body">
            Vehicle Checkpoints
          </p>
          <h2 className="font-heading font-bold text-[48px] leading-none tracking-[-0.64px] text-ing-heading">
            What's Included in the Inspection
          </h2>
          <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
            From major mechanical systems to important safety features, each
            inspection is designed to identify potential issues and give you a
            clearer picture of the vehicle's overall health.
          </p>
          <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-ing-body">
            Explore the vehicle below to see some of the key areas our mechanics
            check during an inspection.
          </p>
        </div>
        
        {/* 3D Canvas */}
        <div
          ref={wrapRef}
          className={`relative w-full overflow-hidden rounded-[32px] border bg-slate-950 transition-shadow ${engaged ? "shadow-2xl ring-2 ring-blue-400/30" : "border-slate-200"}`}
          style={{ aspectRatio: "16 / 9" }}
          onClick={handleEngage}
        >
          <Canvas
            camera={{ position: [4, 3, 5], fov: 40 }}
            dpr={[1, 2]}
            style={{ background: "transparent" }}
            onPointerMissed={() => engaged && setActiveId(null)}
          >
            <Scene
              activeId={activeId}
              setActiveId={setActiveId}
              engaged={engaged}
            />
          </Canvas>

          {/* Click‑to‑interact overlay */}
          {!engaged && (
            <div className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-slate-950/40 backdrop-blur-[2px]">
              <div className="flex flex-col items-center gap-2 text-white/80">
                <svg
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 15.5V3.5a1.5 1.5 0 0 1 3 0v6" />
                  <path d="M12 15.5V2a1.5 1.5 0 0 1 3 0v3.5" />
                  <path d="M9 15.5V3.5a1.5 1.5 0 0 1 3 0" />
                  <path d="M6 15.5V8a1.5 1.5 0 0 1 3 0" />
                  <path d="M6 15.5a6 6 0 0 0 12 0v-3.5" />
                  <path d="M6 15.5a6 6 0 0 0 6 6 6 6 0 0 0 6-6" />
                </svg>
                <span className="text-sm font-medium">Click to interact</span>
              </div>
            </div>
          )}

          {/* Detail panel overlay */}
          <DetailPanel issue={activeIssue} onClose={() => setActiveId(null)} />

          {/* Hint */}
          <p className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-xs text-white/50">
            {engaged
              ? "Drag to rotate · Scroll to zoom · Click a marker for details"
              : "Click anywhere to start exploring"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InspectionSection;
