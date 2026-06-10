import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionTitle
            eyebrow="Latest Articles"
            title="From Our Blog"
            subtitle="Stories, guidance, and insights from the Arms of Grace team."
            align="left"
          />
          <Link href="/blog" className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-purple hover:text-purple-dark transition-colors mb-4">
            View All Posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog#${post.slug}`} className="group block bg-lavender rounded-2xl overflow-hidden border border-soft hover:shadow-md transition-all duration-300">
              <div className="relative h-44 bg-soft border-b border-soft overflow-hidden">
                {post.image ? (
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${post.categoryColor}/15 text-${post.categoryColor}`}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge label={post.category} variant={post.categoryColor} />
                  <span className="text-muted text-xs">{post.readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-dark text-base leading-snug mb-2 group-hover:text-purple transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{post.date}</span>
                  <span className="text-xs font-semibold text-purple">Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
