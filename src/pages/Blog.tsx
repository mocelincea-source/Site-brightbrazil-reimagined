import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { blogPosts } from "@/data/blogPosts";
import heroImage from "@/assets/blog-hero.jpg";

const BlogList = () => {
  const [first, second, ...rest] = blogPosts;
  const featured = [first, second].filter(Boolean);

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 md:pt-36">
        <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Profissionais discutindo estratégia ESG"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl w-full mx-auto px-6 pb-12 md:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
                >
                  <ArrowLeft className="w-4 h-4" /> Voltar ao início
                </Link>
                <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">
                  Insights
                </span>
                <h1 className="text-4xl md:text-6xl font-display text-foreground leading-tight max-w-3xl">
                  Nosso Blog
                </h1>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
                  Conteúdos sobre ESG, governança, sustentabilidade e estratégia
                  para empresas brasileiras.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display text-foreground mb-8">
            Em destaque
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 flex flex-col"
              >
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {post.date}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mt-3 mb-4 leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity self-start"
                >
                  Ler artigo <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Rest */}
      {rest.length > 0 && (
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-8">
              Mais artigos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-card p-6 flex flex-col h-full"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {post.date}
                  </span>
                  <h3 className="font-display text-lg text-foreground mt-3 mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Leia mais <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterSection />
    </div>
  );
};

const BlogPostPage = ({ slug }: { slug: string }) => {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-secondary">
        <Navbar />
        <section className="pt-36 md:pt-40 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-display text-foreground mb-4">
              Artigo não encontrado
            </h1>
            <Link to="/blog" className="text-primary hover:underline">
              Voltar ao blog
            </Link>
          </div>
        </section>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      <article className="pt-36 md:pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Todos os artigos
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {post.date}
            </span>
            <h1 className="text-3xl md:text-5xl font-display text-foreground leading-tight mt-3">
              {post.title}
            </h1>
          </motion.header>

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

          <div className="mt-12 p-6 glass-card border-primary/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-foreground font-display text-lg">{post.cta}</p>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Agendar reunião <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>

      <FooterSection />
    </div>
  );
};

const Blog = () => {
  const { slug } = useParams();
  if (slug) return <BlogPostPage slug={slug} />;
  return <BlogList />;
};

export default Blog;
