import { ArrowRight, ArrowUpRight, BookOpen, Calendar, Clock, Sparkles, Tag } from 'lucide-react'
import { BLOG_POSTS } from '../../constants/content'
import { ROUTES, blogDetailPath } from '../../constants/routes'
import AppLink from '../../components/AppLink'

export default function OurBlogs({ fullPage = false }) {
  const posts = fullPage ? BLOG_POSTS : BLOG_POSTS.slice(0, 3)

  return (
    <section id="blogs" className={`relative overflow-hidden bg-gh-canvas ${fullPage ? 'pb-14' : ''}`}>
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-[350px] w-[350px] rounded-full bg-[#00a86b]/5 blur-3xl lg:blur-[72px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-tag">
            <Sparkles className="h-3.5 w-3.5" />
            Our Blogs
          </span>
          <h2 className="section-title">
            Insights on <span className="highlight">GenAI &amp; Careers</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm font-medium text-gh-muted">
            Practical guides on Python, data science, interviews, and GenAI — written for students and
            job seekers.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[#00a86b]/25 hover:shadow-[0_4px_16px_rgb(15_23_42/0.06)]"
            >
              <AppLink to={blogDetailPath(post.slug)} className="block">
                <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent"
                    aria-hidden
                  />
                </div>
              </AppLink>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#00a86b]/28 bg-[#f1f8f4] px-2.5 py-1 text-[10px] font-bold leading-none text-[#1b4332]">
                    <Tag className="h-3 w-3 shrink-0 text-[#00a86b]" aria-hidden />
                    <span className="truncate">{post.category}</span>
                  </span>
                  <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold leading-none text-[#2d6a4f]">
                    <Clock className="h-3 w-3 shrink-0 text-[#00a86b]" aria-hidden />
                    <span className="truncate">{post.readTime}</span>
                  </span>
                </div>

                <AppLink to={blogDetailPath(post.slug)}>
                  <h3 className="mt-3 font-rubik text-sm font-bold leading-snug text-slate-900 transition duration-200 group-hover:text-[#00a86b]">
                    {post.title}
                  </h3>
                </AppLink>

                <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-gh-muted">
                  {post.excerpt}
                </p>

                <p className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium text-slate-400">
                  <Calendar className="h-3 w-3 text-[#00a86b]" aria-hidden />
                  {post.date}
                </p>

                <AppLink
                  to={blogDetailPath(post.slug)}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#00a86b] transition hover:text-[#1b4332]"
                >
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </AppLink>
              </div>
            </article>
          ))}
        </div>

        {!fullPage && (
          <div className="mt-10 text-center">
            <AppLink
              to={ROUTES.blogs}
              className="btn-hero inline-flex items-center gap-2 px-8 py-3 text-xs font-bold"
            >
              <BookOpen className="h-4 w-4" />
              View all articles
              <ArrowUpRight className="h-4 w-4" />
            </AppLink>
          </div>
        )}
      </div>
    </section>
  )
}
