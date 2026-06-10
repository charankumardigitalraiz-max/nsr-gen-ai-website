export default function BackgroundEffects() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 grid-bg" />
      <div className="pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-emerald/6 blur-3xl" />
      <div className="pointer-events-none fixed -right-40 bottom-20 h-96 w-96 rounded-full bg-champagne/8 blur-3xl" />
    </>
  )
}
