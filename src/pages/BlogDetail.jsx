import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Lightbulb,
  MessageCircle,
  Share2,
  Sparkles,
  Tag,
  User,
} from 'lucide-react'
import { useParams } from 'react-router-dom'
import { BLOG_POSTS, PHONE, WHATSAPP } from '../constants/content'
import { ROUTES, blogDetailPath } from '../constants/routes'
import AppLink from '../components/AppLink'
import { getBlogBySlug, getRelatedBlogs } from '../constants/blogDetails'

const blogWhatsApp = (title) =>
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(`Hi NSR Academy, I read "${title}" on your blog and would like guidance on my career path.`)}`

function mergePost(slug) {
  const card = BLOG_POSTS.find((p) => p.slug === slug)
  const detail = getBlogBySlug(slug)
  if (!card || !detail) return null
  return { ...card, ...detail }
}

function ArticleBody({ sections }) {
  return (
    <div className="bd-prose">
      {sections.map((block, i) => {
        if (block.type === 'paragraph') {
          return (
            <p key={i} className="bd-paragraph">
              {block.content}
            </p>
          )
        }
        if (block.type === 'heading') {
          return (
            <h2 key={i} className="bd-heading">
              {block.content}
            </h2>
          )
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="bd-list">
              {block.items.map((item) => (
                <li key={item}>
                  <CheckCircle2 className="bd-list-icon" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        }
        if (block.type === 'quote') {
          return (
            <blockquote key={i} className="bd-quote">
              <p>{block.content}</p>
            </blockquote>
          )
        }
        if (block.type === 'callout') {
          return (
            <aside key={i} className="bd-callout">
              <div className="bd-callout-head">
                <Lightbulb className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>{block.title}</span>
              </div>
              <p>{block.content}</p>
            </aside>
          )
        }
        return null
      })}
    </div>
  )
}

export default function BlogDetail() {
  const { slug } = useParams()
  const post = mergePost(slug)
  const related = getRelatedBlogs(slug, 3)

  if (!post) {
    return (
      <section className="bg-gh-canvas py-20">
        <div className="mx-auto max-w-lg px-6 text-center">
          <h1 className="font-rubik text-2xl font-extrabold text-slate-800">Article not found</h1>
          <p className="mt-2 text-sm text-gh-muted">This blog post may have moved or is no longer available.</p>
          <AppLink to={ROUTES.blogs} className="btn-hero mt-8 inline-flex gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </AppLink>
        </div>
      </section>
    )
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : blogDetailPath(post.slug)

  return (
    <article className="min-h-screen bg-gh-canvas pb-20">
      {/* Hero */}
      <header className="bd-hero page-hero-flush relative overflow-hidden border-b border-slate-900/10">
        <img src={post.image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="bd-hero-overlay" aria-hidden />

        <div className="bd-page bd-hero-inner relative z-10">
          <AppLink
            to={ROUTES.blogs}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </AppLink>

          <div className="mt-8 max-w-3xl">
            <span className="bd-badge-hero">
              <Sparkles className="h-3 w-3" />
              {post.category}
            </span>
            <h1 className="mt-4 font-rubik text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-200 sm:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="bd-meta-pill">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="bd-meta-pill">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="bd-meta-pill">
                <BookOpen className="h-3.5 w-3.5" />
                NSR Insights
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="bd-page py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Main column */}
          <div className="min-w-0 lg:col-span-8">
            {/* Author strip */}
            <div className="bd-author-card">
              <div className="bd-author-avatar">
                <User className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{post.author}</p>
                <p className="text-xs text-gh-muted">{post.authorRole}</p>
              </div>
            </div>

            {/* Key takeaways */}
            <div className="bd-takeaways">
              <p className="bd-takeaways-label">Key takeaways</p>
              <ul className="mt-4 space-y-3">
                {post.keyTakeaways.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#1b4332] to-[#00a86b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ArticleBody sections={post.sections} />

            {/* Tags */}
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-slate-200/80 pt-8">
              <Tag className="h-4 w-4 text-gh-muted" aria-hidden />
              {post.tags.map((tag) => (
                <span key={tag} className="bd-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bd-sidebar sticky top-28 space-y-5">
              <div className="bd-sidebar-card bd-sidebar-card--accent">
                <h2 className="font-rubik text-lg font-extrabold text-slate-900">Need career guidance?</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Talk to our mentors about GenAI training, projects, and placement support at KPHB, Hyderabad.
                </p>
                <div className="mt-5 grid gap-2">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-hero flex min-h-11 items-center justify-center gap-2 text-sm">
                    Book a free call
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={blogWhatsApp(post.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-hero-outline flex min-h-11 items-center justify-center gap-2 text-sm"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ask on WhatsApp
                  </a>
                </div>
              </div>

              <div className="bd-sidebar-card">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Share</p>
                <p className="mt-2 text-xs text-gh-muted">Send this article to a friend preparing for tech careers.</p>
                <button
                  type="button"
                  className="btn-hero-outline mt-4 flex w-full items-center justify-center gap-2 py-2.5 text-xs"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: post.title, url: shareUrl }).catch(() => {})
                    } else {
                      navigator.clipboard?.writeText(shareUrl)
                    }
                  }}
                >
                  <Share2 className="h-3.5 w-3.5" />
                  Share article
                </button>
              </div>

              {related.length > 0 && (
                <div className="bd-sidebar-card">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Read next</p>
                  <ul className="mt-4 space-y-3">
                    {related.map((r) => {
                      const card = BLOG_POSTS.find((p) => p.slug === r.slug)
                      if (!card) return null
                      return (
                        <li key={r.slug}>
                          <AppLink to={blogDetailPath(r.slug)} className="bd-related-link group">
                            <img src={card.image} alt="" className="h-14 w-14 shrink-0 rounded-lg object-cover" />
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">{card.title}</p>
                              <p className="mt-0.5 text-[10px] text-gh-muted">{card.readTime}</p>
                            </div>
                          </AppLink>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Related grid */}
        {related.length > 0 && (
          <div className="mt-16 border-t border-slate-200/80 pt-12">
            <h2 className="section-title">
              More <span className="highlight">insights</span>
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => {
                const card = BLOG_POSTS.find((p) => p.slug === r.slug)
                if (!card) return null
                return (
                  <AppLink key={r.slug} to={blogDetailPath(r.slug)} className="bd-related-card group">
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.imageAlt || card.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-white/90 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-slate-700">
                        {card.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-extrabold leading-snug text-slate-800 group-hover:text-emerald-700">
                        {card.title}
                      </p>
                      <p className="mt-2 line-clamp-2 text-xs text-gh-muted">{card.excerpt}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-emerald-600">
                        Read article
                        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </AppLink>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
