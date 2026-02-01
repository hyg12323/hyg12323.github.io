import useReveal from "../hooks/useReveal"

export default function Intro() {
  useReveal()

  return (
    <section
      id="intro"
      className="bg-black py-32"
    >
      <div className="mx-auto max-w-5xl px-8 text-center">

        {/* Title */}
        <h2 className="reveal mb-4 text-4xl font-bold text-slate-100">
          Technical Mindset
        </h2>

        {/* subtle divider (title effect) */}
        <div className="reveal mx-auto mb-12 h-[2px] w-24 bg-sky-400/60" />

        {/* Centered Narrative */}
        <div className="mx-auto mb-28 max-w-3xl space-y-8 text-lg leading-relaxed text-slate-300">
          <p className="reveal" style={{ transitionDelay: "0ms" }}>
            물류 현장에서{" "}
            <span className="text-sky-400">
              데이터 하나의 오류가 전체 업무 흐름을 멈추는 순간
            </span>
            을 직접 경험하며,
            시스템은 단순히 동작하는 것을 넘어
            얼마나 신뢰할 수 있어야 하는지를 고민하게 되었습니다.
          </p>

          <p className="reveal" style={{ transitionDelay: "120ms" }}>
            이후 개발 과정에서는 문제를 빠르게 해결하는 코드보다,
            <span className="text-sky-400">
              문제가 발생하지 않도록 설계하는 구조
            </span>
            에 더 많은 시간을 투자해왔습니다.
          </p>

          <p className="reveal" style={{ transitionDelay: "240ms" }}>
            기능 구현 이전에
            “이 선택이 시스템을 더 안전하게 만드는가”를 먼저 질문하며,
            안정성과 확장성을 설계 단계에서부터 만들어갑니다.
          </p>
        </div>

        {/* Focus Areas (Feeling Only) */}
        <div className="grid gap-10 md:grid-cols-2">

          {[
            "Backend Engineering",
            "AI Engineering",
            "Data Pipeline",
            "Problem Solving",
          ].map((title, idx) => (
            <div
              key={idx}
              className="
                reveal
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/40
                py-14
                text-xl
                font-semibold
                tracking-wide
                text-slate-200
                backdrop-blur

                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:border-sky-400/40
                hover:shadow-[0_12px_40px_rgba(56,189,248,0.12)]
              "
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {title}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
