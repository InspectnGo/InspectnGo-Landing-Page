import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/seo/PageMeta";
import JsonLd from "@/components/seo/JsonLd";
import { Link } from "react-router-dom";

interface BlogPostLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  publishDate: string;
  readingTime: string;
  children: React.ReactNode;
}

const BlogPostLayout = ({
  title,
  metaTitle,
  metaDescription,
  slug,
  publishDate,
  readingTime,
  children,
}: BlogPostLayoutProps) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: publishDate,
    author: {
      "@type": "Organization",
      name: "InspectnGO",
      url: "https://www.inspectngo.ca",
    },
    publisher: {
      "@type": "Organization",
      name: "InspectnGO Automotive Services Inc.",
      url: "https://www.inspectngo.ca",
    },
  };

  const formattedDate = new Date(publishDate).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-screen flex-col bg-ing-neutral">
      <PageMeta
        title={metaTitle}
        description={metaDescription}
        canonical={`https://www.inspectngo.ca/${slug}`}
      />
      <JsonLd data={articleSchema} />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-ing-neutral py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <nav className="mb-6 font-manrope text-sm text-ing-body">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Blog</span>
            </nav>
            <h1 className="max-w-3xl font-heading text-[48px] font-bold leading-none tracking-[-0.64px] text-ing-heading">
              {title}
            </h1>
            <div className="mt-4 flex items-center gap-4 font-manrope text-sm text-ing-body">
              <time dateTime={publishDate}>{formattedDate}</time>
              <span>·</span>
              <span>{readingTime}</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1184px] px-6 md:px-8">
            <article className="prose prose-lg max-w-3xl prose-headings:font-heading prose-headings:text-ing-heading prose-p:font-manrope prose-p:text-ing-body prose-li:font-manrope prose-li:text-ing-body prose-strong:text-ing-heading prose-a:text-ing-heading prose-a:underline prose-a:decoration-ing-accent prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:brightness-90">
              {children}
            </article>
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
                Don't risk buying a vehicle with hidden problems. Book a professional
                pre-purchase inspection today and buy with confidence.
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

export default BlogPostLayout;
