import useReveal from "../hooks/useReveal"

export default function ProjectGrid() {
  useReveal()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <section id="contact" className="bg-[#020617] py-10">
      <div className="relative mx-auto max-w-7xl px-8">

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* ProjectCard들 */}
        </div>

        {/* ===== Minimal Contact CTA ===== */}
        <div className="reveal mt-10 text-center">

          <h3 className="mb-2 text-lg font-semibold text-slate-200">
            Ready to Serve
          </h3>

          <p className="mb-5 text-sm text-slate-400">
            시스템의 안정과 데이터의 가치를 책임질 준비가 되어 있습니다.
          </p>

      <div className="flex justify-center gap-6 text-sm">
            <a
                href="https://mail.google.com/mail/?view=cm&to=hay_1845@naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-sky-400"
            >
                Mail
            </a>
            <span className="text-slate-600">·</span>

            <a
              href="https://github.com/hyg12323"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-sky-400"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Back to Top (Absolute, no layout space) */}
        <button
          onClick={scrollToTop}
          className="
            absolute
            right-8
            bottom-8
            text-xs
            text-slate-500
            transition-colors
            hover:text-sky-400
          "
        >
          Back to Top ↑
        </button>

      </div>
    </section>
  )
}