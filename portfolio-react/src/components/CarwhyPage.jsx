export default function CarwhyPage() {
  return (
    <main className="bg-[#020617] min-h-screen pt-28 pb-32">
      <div className="mx-auto max-w-5xl px-6">

        {/* =====================
            헤더
        ===================== */}
        <header className="mb-20">
          <p className="mb-2 text-sm font-semibold tracking-wider text-sky-400">
            AI · COMPUTER VISION
          </p>
          <h1 className="mb-6 text-4xl font-bold text-slate-100">
            Carwhy – AI 차량 사고 진단 서비스
          </h1>
          <p className="max-w-3xl text-base font-medium leading-relaxed text-slate-200">
            사고 차량 이미지를 기반으로 파손 부위, 사고 유형,
            주행 가능 여부를 자동으로 분석하는 AI 사고 진단 서비스입니다.
            YOLO 객체 탐지와 CNN 분류 모델을 결합해
            현장에서 즉시 활용 가능한 판단 근거와 설명을 제공합니다.
          </p>
        </header>

        <section className="mb-24 overflow-hidden rounded-2xl border border-slate-800" />

          {/* =====================
            프로젝트 개요
        ===================== */}
        <section className="mb-24 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-100">
              프로젝트 개요
            </h2>
            <p className="text-sm font-medium leading-relaxed text-slate-300">
              사고 접수 단계에서 차량의 손상 정도와
              주행 가능 여부를 즉시 판단하기 어렵다는 문제가 존재했습니다.
              <br /><br />
              Carwhy는 사고 차량 이미지를 입력받아
              <span className="text-slate-200 font-semibold">
                {" "}사고 판단 → 파손 부위 분석 → 주행 가능 판단
              </span>
              까지의 과정을 자동화하여,
              보험·정비·렌트 등 다양한 현장에서
              빠른 의사결정을 지원하는 것을 목표로 개발되었습니다.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/70 p-6">
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <span className="text-slate-400">개발 기간</span><br />
                2026.01.11 ~ 2026.01.31 (3주)
              </li>
              <li>
                <span className="text-slate-400">기술 스택</span><br />
                FastAPI · YOLOv8 · CNN · Python 
              </li>
              <li>
                <span className="text-slate-400">담당 역할</span><br />
                AI 파이프라인 설계 · 모델 연동 · API 개발
              </li>
            </ul>
          </div>
        </section>

        {/* =====================
            메인 서비스 화면
        ===================== */}
         <h2 className="mb-4 text-xl font-semibold text-slate-100">
            메인 업로드 
          </h2>
           <p className="mb-6 text-sm font-medium leading-relaxed text-slate-300">
            사진 업로드를 통해 한 사고에 대한 여러장의 사진을 올리고, 미리보기를 보여줍니다.
          </p>
        <section className="mb-24 overflow-hidden rounded-2xl border border-slate-800">
          <img
            src="/images/carwhy/image.png"
            alt="Carwhy 이미지 업로드 화면"
            className="w-full object-cover"
          />
          
        </section>

      

        {/* =====================
            사고 판단
        ===================== */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            사고 판단 분석
          </h2>
          <p className="mb-6 text-sm font-medium leading-relaxed text-slate-300">
            업로드된 이미지를 기반으로 차량의 사고 여부와
            사고 유형을 확률적으로 분석합니다.
            CNN 기반 분류 모델을 통해
            전방·후방·측면·복합 사고 가능성을 제공합니다.
          </p>

          <img
            src="/images/carwhy/사고판단.png"
            alt="사고 판단 결과"
            className="rounded-xl border border-slate-800"
          />
        </section>

        {/* =====================
            파손 부위 분석
        ===================== */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            파손 부위 분석
          </h2>
          <p className="mb-6 text-sm font-medium leading-relaxed text-slate-300">
            YOLO 객체 탐지 모델을 활용해
            차량의 파손 부위를 시각적으로 분석합니다.
            각 부위별 손상 확률을 함께 제공하여
            정비 및 보험 판단의 근거로 활용할 수 있도록 설계했습니다.
          </p>

          <img
            src="/images/carwhy/파손부위.png"
            alt="파손 부위 분석"
            className="rounded-xl border border-slate-800"
          />
        </section>

        {/* =====================
            주행 가능 판단
        ===================== */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            주행 가능 판단
          </h2>
          <p className="mb-6 text-sm font-medium leading-relaxed text-slate-300">
            파손 부위와 사고 유형 분석 결과를 종합하여
            차량의 주행 가능 여부를 판단합니다.
            CNN 기반 모델을 통해
            주행 불가 가능성을 정량적으로 제공합니다.
          </p>

          <img
            src="/images/carwhy/주행가능.png"
            alt="주행 가능 판단"
            className="rounded-xl border border-slate-800"
          />
        </section>

        {/* =====================
            종합 분석
        ===================== */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            종합 분석 및 AI 설명
          </h2>
          <p className="mb-6 text-sm font-medium leading-relaxed text-slate-300">
            사고 판단, 파손 부위 분석, 주행 가능 판단 결과를
            종합하여 최종 분석 결과를 제공합니다.
            AI 설명을 통해 비전문가도
            사고 상태와 대응 방향을 쉽게 이해할 수 있도록 구성했습니다. 또한 ai에게 궁금한점을 다시 질문할 수 있습니다.
          </p>

          <img
            src="/images/carwhy/종합및답변.png"
            alt="종합 분석 결과"
            className="rounded-xl border border-slate-800"
          />
        </section>

        {/* =====================
            마무리
        ===================== */}
        <footer className="border-t border-slate-800 pt-10 text-sm font-medium text-slate-300">
          Carwhy는 단순한 이미지 분석을 넘어,
          실제 사고 처리 흐름을 고려해
          AI 모델의 정확도와 현장 활용성을 함께 개선한
          실무 중심 AI 프로젝트입니다.
        </footer>

      </div>
    </main>
  )
}
