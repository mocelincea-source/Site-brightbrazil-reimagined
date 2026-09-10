import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { globalBlogPosts } from "@/data/globalBlogPosts";

const highlightedPosts = globalBlogPosts.slice(0, 3);

const GlobalBlog = () => {
  return (
    <section id="blog" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">Insights</span>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">Our Blog</h2>
          </div>
          <Link
            to="/global/blog"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Read more <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlightedPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/global/blog/${post.slug}`}
                className="glass-card p-8 group cursor-pointer flex flex-col h-full"
              >
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{post.date}</span>
                <h3 className="font-display text-lg text-foreground mt-3 mb-4 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read More <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link
            to="/global/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            See all articles <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GlobalBlog;
