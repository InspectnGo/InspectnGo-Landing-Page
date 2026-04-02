import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/seo/PageMeta";

const posts = [
  {
    title: "How Much Does a Pre-Purchase Inspection Cost in BC? (2026)",
    description:
      "Compare prices for mobile and shop-based pre-purchase vehicle inspections across British Columbia.",
    slug: "/blog/pre-purchase-inspection-cost-bc",
    date: "2026-04-01",
    readingTime: "5 min read",
  },
  {
    title: "What Does a Pre-Purchase Inspection Include? (Complete Breakdown)",
    description:
      "A complete breakdown of every checkpoint in a pre-purchase vehicle inspection — brakes, tires, fluids, suspension, engine, and more.",
    slug: "/blog/what-does-pre-purchase-inspection-include",
    date: "2026-03-29",
    readingTime: "8 min read",
  },
  {
    title: "Red Seal Mechanic vs Regular Mechanic: What's the Difference?",
    description:
      "What is a Red Seal mechanic and how do they differ from a regular mechanic? Learn about certification, training, and why it matters.",
    slug: "/blog/red-seal-mechanic-vs-regular-mechanic",
    date: "2026-03-27",
    readingTime: "6 min read",
  },
  {
    title: "Buying a Used Car from a Private Seller in BC: What You Need to Know",
    description:
      "Everything you need to know about buying from a private seller — paperwork, taxes, scam red flags, and how to protect yourself.",
    slug: "/blog/buying-used-car-private-seller-bc",
    date: "2026-03-23",
    readingTime: "10 min read",
  },
  {
    title: "Become a Mobile Mechanic with InspectnGO",
    description:
      "Join InspectnGO's network of certified mobile mechanics in Metro Vancouver. Flexible schedule, steady bookings, and no shop overhead.",
    slug: "/blog/become-mobile-mechanic-inspectngo",
    date: "2026-03-20",
    readingTime: "6 min read",
  },
  {
    title: "How to Negotiate a Used Car Price After an Inspection Report",
    description:
      "Learn how to use a pre-purchase inspection report to negotiate a lower price on a used car with real examples and repair cost estimates.",
    slug: "/blog/negotiate-used-car-price-after-inspection",
    date: "2026-03-17",
    readingTime: "7 min read",
  },
  {
    title: "How to Buy a Used Car in BC: The Complete Guide",
    description:
      "Step-by-step guide to buying a used car in British Columbia — from setting your budget to transferring ownership.",
    slug: "/blog/how-to-buy-a-used-car-in-bc",
    date: "2026-03-13",
    readingTime: "12 min read",
  },
];

const Blog = () => {
  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="flex min-h-screen flex-col bg-ing-neutral">
      <PageMeta
        title="Blog — Used Car Buying Guides & Inspection Tips | InspectnGO"
        description="Expert guides on buying used cars in BC, pre-purchase inspections, negotiation tips, and more from InspectnGO's certified mechanics."
        canonical="https://www.inspectngo.ca/blog"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <h1 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
              Blog
            </h1>
            <p className="mt-4 max-w-2xl font-manrope text-lg text-ing-body">
              Guides, tips, and expert advice on buying used cars in BC and
              getting the most out of your pre-purchase inspection.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={post.slug}
                  className="group flex flex-col rounded-2xl border border-[#e6ebf2] bg-white p-6 transition hover:shadow-form"
                >
                  <h2 className="font-heading text-xl font-bold leading-tight text-ing-heading group-hover:text-ing-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 font-manrope text-base leading-relaxed text-ing-body">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3 font-manrope text-sm text-ing-placeholder">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <div className="space-y-8">
              <h2 className="font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading lg:text-[64px]">
                Get your inspection booked
              </h2>
              <p className="max-w-2xl text-body">
                Don't risk buying a vehicle with hidden problems. Book a
                professional pre-purchase inspection today and buy with
                confidence.
              </p>
              <a
                href="/#signup"
                className="inline-flex items-center justify-center rounded-full bg-ing-accent px-6 py-4 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-brand hover:brightness-90 transition"
              >
                Get an inspection
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
