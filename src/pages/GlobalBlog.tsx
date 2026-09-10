import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalNavbar from "@/components/global/GlobalNavbar";
import GlobalFooter from "@/components/global/GlobalFooter";
import { globalBlogPosts } from "@/data/globalBlogPosts";

const GlobalBlog = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <GlobalNavbar />

      <section className="pt-36 md:pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/global"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Insights
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-foreground leading-tight">
              Our Blog
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
              Expert perspectives on ESG strategy, compliance, and communication for the European market.
            </p>
          </motion.div>

          {/* Quick index */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 mb-16"
            aria-label="Articles index"
          >
            <h2 className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
              In this page
            </h2>
            <ol className="space-y-2 list-decimal list-inside">
              {globalBlogPosts.map((post) => (
                <li key={post.slug} className="text-sm text-muted-foreground">
                  <a
                    href={`#${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ol>
          </motion.nav>

          {/* Full articles */}
          <div className="space-y-20">
            {globalBlogPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                id={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-32"
              >
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {post.date}
                </span>
                <h2 className="text-2xl md:text-4xl font-display text-foreground leading-tight mt-2 mb-8">
                  {idx + 1}. {post.title}
                </h2>

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

                <div className="mt-8 p-6 glass-card border-primary/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <p className="text-foreground font-display text-lg">{post.cta}</p>
                  <Link
                    to="/global#meeting"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    Schedule a meeting <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {idx < globalBlogPosts.length - 1 && (
                  <div className="mt-20 border-t border-border" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default GlobalBlog;
