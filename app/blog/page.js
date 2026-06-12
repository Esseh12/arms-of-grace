import PageHero from "@/components/ui/PageHero";
import BlogCard from "@/components/blog/BlogCard";
import FaqSection from "@/components/home/FaqSection";
import { blogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "Blog | Arms of Grace",
  description: "Stories, guidance, and insights from the Arms of Grace team on foster care, adoption, and community support.",
};

const categories = ["All", "Foster Care", "Adoption", "Family Services", "Get Involved", "Bridging the Gap"];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Our Blog"
        subtitle="Real stories. Practical guidance. Honest conversations about foster care, adoption, and the community that makes it all possible."
        breadcrumb={[{ label: "Blog" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, i) => (
              <button key={cat} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${i === 0 ? "bg-purple text-white" : "bg-soft text-muted hover:bg-purple/10 hover:text-purple"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <FaqSection />
    </>
  );
}
