import { useNavigate } from "react-router-dom"
import useReveal from "../hooks/useReveal"

export default function Hero() {
  useReveal()
  const navigate = useNavigate()

  const projects = [
    {
      title: "Royalty-AI",
      desc: "AI 기반 상표 유사도 분석 및 위험 감지 서비스(진행중)",
       path: "/projects/royalty",
    },
    {
      title: "Carwhy",
      desc: "YOLO 기반 차량 사고 분석 시스템(2026.01.11 ~ 2026.01.31)",
      path: "/projects/carwhy",
    },
    {
      title: "MES",
      desc: "Spring 기반 생산·품질·공정 관리 시스템(2025.10.02 ~ 2025.10.28)",
      path: "/projects/mes",
    },
  ]

  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#0b1c2d]
        via-[#020617]
        to-black
        flex items-center
      "
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">
        
        {/* LEFT */}
        <div className="reveal">
          <h1 className="mb-4 text-5xl font-extrabold leading-tight text-slate-50 md:text-7xl">
            Backend & <span className="text-sky-400">AI</span>
          </h1>

          <p className="mb-6 text-lg font-medium text-slate-300 md:text-xl">
            System-Oriented Engineer
          </p>

          <p className="mb-3 max-w-xl text-lg font-medium text-slate-200">
            시스템의 안정성과 데이터 흐름을 설계하는 개발자
          </p>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-400">
            보이지 않는 곳에서 서비스를 지탱하는 백엔드 개발자이자,
            데이터 기반 AI 모델링으로 문제를 해결하는 엔지니어 하용군입니다.
          </p>

          <div className="flex gap-4">
           <button
  onClick={() => navigate("/projects")}
  className="rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-sky-500"
>
  View Projects
</button>
            <a
              href="#contact"
              className="rounded-full border border-slate-600 px-7 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden lg:block">
          <div className="flex flex-col gap-6">
            {projects.map((item, idx) => (
              <div
                key={idx}
                onClick={() => item.path && navigate(item.path)}
                className="
                  reveal
                  group
                  flex
                  cursor-pointer
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900/60
                  p-6
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-400/60
                  hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)]
                  active:scale-[0.98]
                "
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div>
                  <p className="mb-2 text-xs uppercase tracking-wider text-sky-400">
                    Featured Project
                  </p>
                  <h3 className="mb-2 text-lg font-semibold text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {item.desc}
                  </p>
                </div>

                <span className="
                  ml-4
                  text-xl
                  text-sky-400
                  opacity-0
                  translate-x-[-6px]
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:translate-x-2
                ">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
