import { ArrowRight, ArrowUpRight, BookOpen, Calendar, Clock, Sparkles, Tag } from 'lucide-react'
import { BLOG_POSTS } from '../../constants/content'
import { ROUTES, blogDetailPath } from '../../constants/routes'
import AppLink from '../../components/AppLink'
import BootSectionHeader from '../../components/ui/BootSectionHeader'

export default function OurBlogs({ fullPage = false, embedded = false }) {
  const posts = fullPage ? BLOG_POSTS : BLOG_POSTS.slice(0, 3)

  const sectionClass = fullPage
    ? 'page-content-top pb-14'
    : embedded
      ? 'boot-section boot-section--white'
      : ''

  return (
    <section id="blogs" className={`relative overflow-hidden ${sectionClass}`}>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <BootSectionHeader
          className="boot-section-header-gap"
          icon={Sparkles}
          eyebrow="Our Blogs"
          titleBefore="Insights on "
          highlight="GenAI & Careers"
          description="Practical guides on Python, data science, interviews, and GenAI — written for students and job seekers."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="boot-blog-card group">
              <AppLink to={blogDetailPath(post.slug)} className="block">
                <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1b4332]/50 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
              </AppLink>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00a86b]/28 bg-[#f1f8f4] px-2.5 py-1 text-[10px] font-bold leading-none text-[#1b4332]">
                    <Tag className="h-3 w-3 shrink-0 text-[#00a86b]" aria-hidden />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold leading-none text-[#2d6a4f]">
                    <Clock className="h-3 w-3 shrink-0 text-[#00a86b]" aria-hidden />
                    {post.readTime}
                  </span>
                </div>

                <AppLink to={blogDetailPath(post.slug)}>
                  <h3 className="mt-3 font-rubik text-sm font-extrabold leading-snug text-[#1b4332] transition duration-200 group-hover:text-[#00a86b] sm:text-base">
                    {post.title}
                  </h3>
                </AppLink>

                <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
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
          <div className="boot-section-cta-gap text-center">
            <AppLink
              to={ROUTES.blogs}
              className="btn-hero-outline inline-flex items-center gap-2 px-8 py-3 text-sm font-bold"
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
