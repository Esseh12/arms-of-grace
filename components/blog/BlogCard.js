import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog#${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-soft hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      <div className="relative h-48 bg-lavender border-b border-soft overflow-hidden">
        {post.image ? (
          <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${post.categoryColor}/10 text-${post.categoryColor}`}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge label={post.category} variant={post.categoryColor} />
          <span className="text-muted text-xs">{post.readTime}</span>
        </div>
        <h3 className="font-heading font-bold text-dark text-base leading-snug mb-2 group-hover:text-purple transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-soft">
          <div>
            <p className="text-dark text-xs font-semibold">{post.author.name}</p>
            <p className="text-muted text-xs">{post.date}</p>
          </div>
          <span className="text-xs font-semibold text-purple group-hover:underline">Read →</span>
        </div>
      </div>
    </Link>
  );
}
