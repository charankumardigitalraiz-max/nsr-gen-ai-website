import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react'
import { BLOG_POSTS, WHATSAPP } from '../constants/content'

export default function OurBlogs() {
  const [featured, ...rest] = BLOG_POSTS

  const handleMouseMove = (e, cardEl) => {
    if (!cardEl) return
    const rect = cardEl.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardEl.style.setProperty('--mouse-x', `${x}px`)
    cardEl.style.setProperty('--mouse-y', `${y}px`)

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -4
    const rotateY = ((x - centerX) / centerX) * 4
    cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
  }

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return
    cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <section id="blogs" className="relative overflow-hidden bg-gh-canvas py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-cyber-pink/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[95rem] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gh-purple/15 bg-gh-purple/5 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-gh-purple">
            <Sparkles className="h-3.5 w-3.5" />
            Our Blogs
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-4xl">
            Insights on{' '}
            <span className="bg-gradient-to-r from-gh-blue to-gh-purple bg-clip-text text-transparent">
              GenAI &amp; Careers
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-gh-muted">
            Practical guides on Python, data science, interviews, and GenAI — written for students and job seekers.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <article
            className="cyber-card group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white lg:col-span-7"
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <div className="relative h-44 overflow-hidden border-b border-slate-100/80 bg-slate-50 sm:h-52">
              <img
                src={featured.image}
                alt={featured.imageAlt || featured.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="blog-category-pill absolute left-4 top-4">{featured.category}</span>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-gh-muted">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {featured.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <h3 className="mt-3 font-rubik text-xl font-extrabold leading-snug text-slate-800 group-hover:text-gh-blue sm:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gh-muted">{featured.excerpt}</p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="blog-read-link mt-5">
                Read article
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>

          <div className="flex flex-col gap-5 lg:col-span-5">
            {rest.slice(0, 2).map((post) => (
              <article
                key={post.slug}
                className="cyber-card group flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white sm:flex-row"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                <div className="relative h-36 shrink-0 overflow-hidden border-b border-slate-100/80 bg-slate-50 sm:h-auto sm:w-40 sm:border-b-0 sm:border-r">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="blog-category-pill absolute left-3 top-3 text-[8px]">{post.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center gap-2 text-[10px] font-semibold text-gh-muted">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-2 font-rubik text-sm font-extrabold leading-snug text-slate-800 group-hover:text-gh-blue">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gh-muted">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(2).map((post) => (
            <article
              key={post.slug}
              className="cyber-card group flex flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="relative h-36 overflow-hidden border-b border-slate-100/80 bg-slate-50">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="blog-category-pill absolute left-3 top-3">{post.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center gap-2 text-[10px] font-semibold text-gh-muted">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-2 font-rubik text-sm font-extrabold leading-snug text-slate-800 group-hover:text-gh-blue">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-gh-muted">{post.excerpt}</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="blog-read-link mt-4 text-xs">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
