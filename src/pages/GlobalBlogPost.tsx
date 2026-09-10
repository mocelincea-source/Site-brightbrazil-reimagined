import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import GlobalNavbar from "@/components/global/GlobalNavbar";
import GlobalFooter from "@/components/global/GlobalFooter";
import { globalBlogPosts } from "@/data/globalBlogPosts";

const GlobalBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = globalBlogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/global/blog" replace />;

  return (
    <div className="min-h-screen bg-secondary">
      <GlobalNavbar />

      <article className="pt-36 md:pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/global/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> All articles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {post.date}
            </span>
            <h1 className="text-3xl md:text-5xl font-display text-foreground leading-tight mt-3 mb-10">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed mb-5 text-base"
                >
                  {paragraph}
                </p>
              ))}

              {post.lists?.map((list, li) => (
                <div key={li} className="mb-5">
                  {list.intro && (
                    <p className="text-muted-foreground leading-relaxed mb-3 text-base">
                      {list.intro}
                    </p>
                  )}
                  {list.items.length > 0 && (
                    <ul className="space-y-2 mb-5 pl-1">
                      {list.items.map((item, ii) => (
                        <li
                          key={ii}
                          className="flex items-start gap-3 text-muted-foreground text-base"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 glass-card border-primary/20">
              <p className="text-foreground font-display text-xl mb-4">
                {post.cta}
              </p>
              <a
                href="#meeting"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Schedule a meeting <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </article>

      <GlobalFooter />
    </div>
  );
};

export default GlobalBlogPost;
