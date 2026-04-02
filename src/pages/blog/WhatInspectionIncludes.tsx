import BlogPostLayout from "@/components/seo/BlogPostLayout";
import { Link } from "react-router-dom";

const WhatInspectionIncludes = () => (
  <BlogPostLayout
    title="What Does a Pre-Purchase Inspection Include? (Complete Breakdown)"
    metaTitle="What Does a Pre-Purchase Inspection Include? | InspectnGO"
    metaDescription="A complete breakdown of every checkpoint in a pre-purchase vehicle inspection — brakes, tires, fluids, suspension, engine, and more. See exactly what InspectnGO's mechanics check."
    slug="blog/what-does-pre-purchase-inspection-include"
    publishDate="2026-04-01"
    readingTime="8 min read"
  >
    <p>
      You know a pre-purchase inspection is a smart move before buying a used car.
      But what exactly does the mechanic check? Most inspection companies give you a
      vague list — "brakes, engine, tires." That doesn't tell you much.
    </p>
    <p>
      Here's a complete breakdown of every area covered in an InspectnGO pre-purchase
      inspection, straight from the inspection sheet our certified mechanics use in
      the field.
    </p>

    <h2>How the rating system works</h2>
    <p>
      Every item on the inspection sheet receives one of three ratings:
    </p>
    <ul>
      <li><strong>Satisfactory</strong> — the component is in good working condition</li>
      <li><strong>May require future repair</strong> — it's functional now but showing wear; plan for replacement soon</li>
      <li><strong>Requires immediate repair</strong> — the component is failed or unsafe and needs attention before you drive the vehicle regularly</li>
    </ul>
    <p>
      This traffic-light system makes it easy to see, at a glance, the overall
      condition of the vehicle and where your money will go after the purchase.
    </p>

    <h2>1. Exterior lights</h2>
    <p>
      Every exterior light on the vehicle is individually tested. Burned-out bulbs
      are minor, but they can signal neglected maintenance or electrical issues.
    </p>
    <p><strong>Front:</strong> daytime running lights (DRL), low beams, high beams,
      turn signals, side markers, and fog lights.</p>
    <p><strong>Rear:</strong> brake lights, reverse lights, turn signals, side
      markers, license plate light, and the third brake light.</p>
    <p><strong>Other:</strong> horn, dome lights, glove box light, vanity lights,
      and the back-up camera.</p>

    <h2>2. Interior systems</h2>
    <p>
      The interior check covers safety equipment, climate control, and every powered
      feature in the cabin. This is where you find out whether the heated seats
      actually heat, and whether the A/C blows cold.
    </p>
    <ul>
      <li><strong>Safety:</strong> seat belts, airbag warning light, key fob operation</li>
      <li><strong>Climate:</strong> heating, A/C, cabin air filter, blend door actuator,
        mode door actuator, recirculation door actuator, blower motor</li>
      <li><strong>Visibility:</strong> front wipers, rear wiper, washer spray, rear defroster</li>
      <li><strong>Power features:</strong> windows, door locks, master switch, mirrors,
        power seats, steering wheel buttons, sunroof</li>
      <li><strong>Comfort:</strong> heated seats, cooling seats, heated steering wheel,
        radio/media system, 12V outlet</li>
      <li><strong>Controls:</strong> handbrake, gear selector, clutch operation, hood
        latch, trunk latch</li>
    </ul>

    <h2>3. Brakes</h2>
    <p>
      Brakes are one of the most important — and most expensive — systems on the
      vehicle. Our mechanics measure the actual brake pad thickness at all four
      wheels and inspect the hardware.
    </p>

    <h3>Brake pad measurements</h3>
    <p>Pad thickness is measured in millimeters at each wheel (FL, FR, RL, RR):</p>

    <div className="not-prose my-8 overflow-x-auto">
      <table className="w-full border-collapse rounded-lg border border-[#e6ebf2] font-manrope text-base">
        <thead>
          <tr className="bg-ing-neutral">
            <th className="border border-[#e6ebf2] px-4 py-3 text-left font-bold text-ing-heading">
              Thickness
            </th>
            <th className="border border-[#e6ebf2] px-4 py-3 text-left font-bold text-ing-heading">
              Rating
            </th>
            <th className="border border-[#e6ebf2] px-4 py-3 text-left font-bold text-ing-heading">
              What It Means
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              7mm or more
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Good
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Plenty of life remaining
            </td>
          </tr>
          <tr className="bg-ing-neutral/50">
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              4–6mm
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Fair
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Serviceable, but plan for replacement within the next year
            </td>
          </tr>
          <tr>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              3mm or less
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Needs replacement
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Unsafe — factor this into your negotiation or walk away
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Brake components</h3>
    <p>Beyond pad thickness, the mechanic inspects:</p>
    <ul>
      <li><strong>Calipers</strong> — checked at all four wheels for leaks, sticking, and damage</li>
      <li><strong>Brake hoses</strong> — inspected for cracking, swelling, and leaks</li>
      <li><strong>Guide pins</strong> — checked for proper lubrication and movement</li>
      <li><strong>Rear drums</strong> (if equipped) — shoes, springs & hardware, and wheel cylinders</li>
    </ul>

    <h2>4. Tires</h2>
    <p>
      Tires tell a story. Uneven wear can reveal alignment problems, worn
      suspension, or improper inflation habits that point to bigger issues.
    </p>

    <h3>Tread depth</h3>
    <p>Measured in 32nds of an inch at each wheel:</p>

    <div className="not-prose my-8 overflow-x-auto">
      <table className="w-full border-collapse rounded-lg border border-[#e6ebf2] font-manrope text-base">
        <thead>
          <tr className="bg-ing-neutral">
            <th className="border border-[#e6ebf2] px-4 py-3 text-left font-bold text-ing-heading">
              Tread Depth
            </th>
            <th className="border border-[#e6ebf2] px-4 py-3 text-left font-bold text-ing-heading">
              Rating
            </th>
            <th className="border border-[#e6ebf2] px-4 py-3 text-left font-bold text-ing-heading">
              What It Means
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              7/32" or more
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Good
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Full tread life remaining
            </td>
          </tr>
          <tr className="bg-ing-neutral/50">
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              5–6/32"
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Fair
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Still safe, but start budgeting for new tires
            </td>
          </tr>
          <tr>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              4/32" or less
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Needs replacement
            </td>
            <td className="border border-[#e6ebf2] px-4 py-3 text-ing-body">
              Reduced grip, especially in BC rain — a set of four tires runs $400–$1,000+
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Wear patterns and age</h3>
    <p>
      The mechanic identifies the wear pattern on each tire — normal wear, toe wear,
      camber wear, cupping, cutting, or signs of under/over inflation. Abnormal
      patterns often indicate suspension or alignment issues that go beyond just
      replacing tires.
    </p>
    <p>
      Tire age is also recorded. Tires 7+ years old are considered a safety concern
      regardless of tread depth, as the rubber compound degrades over time.
      Tire pressure is compared against the manufacturer's specification.
    </p>

    <h2>5. Fluids</h2>
    <p>
      Seven fluid systems are checked, each evaluated for <strong>condition</strong>{" "}
      (colour and contamination), <strong>leaks</strong> (active drips or seepage),
      and <strong>level</strong>:
    </p>
    <ol>
      <li><strong>Engine oil</strong> — dark, gritty oil suggests skipped oil changes</li>
      <li><strong>Transmission oil</strong> — burnt smell or dark colour can indicate internal wear</li>
      <li><strong>Coolant</strong> — low levels or contamination may point to a head gasket or radiator issue</li>
      <li><strong>Steering fluid</strong> — leaks here often mean a failing rack or pump</li>
      <li><strong>Brake fluid</strong> — moisture-contaminated fluid reduces braking performance</li>
      <li><strong>Differential / gear oil</strong> — checked for contamination and metal particles</li>
      <li><strong>Washer fluid</strong> — simple but tells you if the system works</li>
    </ol>

    <h2>6. Suspension, steering & drivetrain</h2>
    <p>
      This is the most extensive section of the inspection — over 30 individual
      components are checked. Worn suspension and steering parts affect ride quality,
      handling, and safety.
    </p>
    <h3>Front suspension & steering</h3>
    <ul>
      <li>Lower and upper ball joints</li>
      <li>Lower and upper control arm bushings</li>
      <li>Front CV axles and axle seals</li>
      <li>Inner and outer tie rods</li>
      <li>Rack & pinion</li>
      <li>Intermediate shaft</li>
      <li>Stabilizer links and sway bar bushings</li>
      <li>Front struts</li>
      <li>Front wheel bearings</li>
    </ul>
    <h3>Drivetrain</h3>
    <ul>
      <li>Drive shaft</li>
      <li>Drive shaft center support bearing</li>
    </ul>
    <h3>Rear suspension</h3>
    <ul>
      <li>Rear stabilizer links and sway bar bushings</li>
      <li>Rear lower and upper control arms</li>
      <li>Rear lateral arm, trailing arm, and toe arm</li>
      <li>Rear knuckle bushings</li>
      <li>Rear wheel bearings</li>
      <li>Rear shock absorbers</li>
      <li>Rear air bags (if equipped)</li>
      <li>Rear subframe</li>
      <li>Rear CV axles and axle seals</li>
      <li>Torsion beam bushings (if equipped)</li>
    </ul>

    <h2>7. Under the hood</h2>
    <p>
      The engine bay inspection covers the components visible and accessible without
      disassembly:
    </p>
    <ul>
      <li><strong>Engine air filter</strong> — a clogged filter reduces performance and fuel economy</li>
      <li><strong>Battery and cables</strong> — tested for charge, corrosion, and secure connections</li>
      <li><strong>Engine mounts</strong> — worn mounts cause excessive vibration</li>
      <li><strong>Accessory belts and pulleys</strong> — cracked or glazed belts are a breakdown risk</li>
      <li><strong>Radiator and hoses</strong> — checked for leaks, cracks, and swelling</li>
      <li><strong>A/C system</strong> — suction line, discharge line, compressor, and condenser inspected</li>
      <li><strong>Vacuum hoses and cowl</strong> — checked for cracks and deterioration</li>
    </ul>

    <h2>8. Under the car</h2>
    <p>
      The underside inspection reveals rust, damage, and wear that's invisible from
      above. This is especially important for vehicles driven in areas that salt
      roads in winter.
    </p>
    <ul>
      <li><strong>Exhaust system</strong> — hangers, flanges, resonator, muffler, catalytic
        converter, flex pipe, and heat shields</li>
      <li><strong>Undercovers</strong> — missing or damaged splash guards</li>
      <li><strong>Fuel system</strong> — fuel lines, gas tank, and tank straps</li>
      <li><strong>Brake lines</strong> — inspected for rust, corrosion, and leaks</li>
      <li><strong>Structural</strong> — sub-frame condition and jack point integrity</li>
    </ul>

    <h2>9. Dashboard warning lights</h2>
    <p>
      The mechanic checks for any active warning lights on the dashboard with the
      ignition on:
    </p>
    <ul>
      <li>Check engine</li>
      <li>ABS / traction control</li>
      <li>Power steering</li>
      <li>Oil pressure</li>
      <li>Engine temperature</li>
      <li>Brake warning</li>
      <li>Battery / charging system</li>
      <li>Airbag</li>
      <li>Tire pressure (TPMS)</li>
    </ul>
    <p>
      An active check engine light alone could mean anything from a loose gas cap
      to a failing catalytic converter. The inspection report notes which lights are
      on so you know what to investigate further.
    </p>

    <h2>What you get in the report</h2>
    <p>
      After the inspection, you receive a detailed report with every checkpoint
      rated using the three-tier system. The report also includes:
    </p>
    <ul>
      <li>Actual brake pad measurements (in mm) at all four wheels</li>
      <li>Tire tread depth readings (in 32nds of an inch) at all four wheels</li>
      <li>Tire wear pattern and age</li>
      <li>Fluid condition notes</li>
      <li>Any active warning lights</li>
      <li>Mechanic comments and details</li>
      <li>Recommended services for next visit (oil change, brake service, alignment, etc.)</li>
    </ul>
    <p>
      This gives you real numbers to work with when negotiating the price. If the
      front brakes are at 3mm, you know a brake job is coming — and you can factor
      that cost into your offer.
    </p>

    <h2>How InspectnGO inspections work</h2>
    <p>
      InspectnGO inspections are performed on-site by certified mechanics — at the
      seller's location, a dealership lot, or wherever the vehicle is. No need to
      arrange a trip to a shop.
    </p>
    <p>
      Inspections start at <strong>$220</strong>, or <strong>$250</strong> bundled
      with a{" "}
      <Link to="/blog/pre-purchase-inspection-cost-bc">
        CARFAX vehicle history report
      </Link>
      . You can learn more about pricing in our{" "}
      <Link to="/blog/pre-purchase-inspection-cost-bc">
        cost breakdown for BC
      </Link>
      .
    </p>
    <p>
      Ready to get started? Visit our{" "}
      <Link to="/">homepage</Link> to book an inspection, or check
      availability in your area on our{" "}
      <Link to="/pre-purchase-car-inspection-vancouver">
        Vancouver
      </Link>
      ,{" "}
      <Link to="/pre-purchase-car-inspection-burnaby">
        Burnaby
      </Link>
      , or{" "}
      <Link to="/pre-purchase-car-inspection-surrey">
        Surrey
      </Link>{" "}
      pages.
    </p>
  </BlogPostLayout>
);

export default WhatInspectionIncludes;
