export default function RoyaltyPage() {
  return (
    <main className="bg-[#020617] min-h-screen pt-28 pb-32">
      <div className="mx-auto max-w-5xl px-6">

        {/* ================= HEADER ================= */}
        <header className="mb-20">
          <p className="mb-2 text-sm font-semibold tracking-wider text-indigo-400">
            AI · BRAND PROTECTION
          </p>
          <h1 className="mb-6 text-4xl font-bold text-slate-100">
            Royalty-AI – 상표 유사도 분석 및 위험 감지 서비스
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-400">
            상표 이미지와 상호명을 기반으로
            시각적·의미적 유사도를 분석해
            상표 침해 가능성을 사전에 감지하는 AI 기반 브랜드 보호 서비스입니다.
          </p>
        </header>
        <section className="mb-24 overflow-hidden rounded-2xl border border-slate-800" />


        {/* ================= 프로젝트 개요 ================= */}
        <section className="mb-24 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-100">
              프로젝트 개요
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              기존 상표 검색 서비스는
              키워드 기반 조회에 의존해
              실제 상표 간의 시각적·의미적 유사성을
              정량적으로 판단하기 어렵다는 한계가 있었습니다.
              <br /><br />
              Royalty-AI는
              <strong className="text-slate-300">
                {" "}이미지 + 텍스트 기반 AI 분석
              </strong>
              을 통해
              상표 침해 가능성을 사전에 감지하고,
              이를 안전하게 관리하기 위한
              인증·회원 시스템을 함께 설계한 프로젝트입니다.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/70 p-6">
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <span className="text-slate-400">개발 기간</span><br />
                2025.12 ~ 진행 중
              </li>
              <li>
                <span className="text-slate-400">기술 스택</span><br />
                Spring Boot · JWT · Email 인증 · AI 연동
              </li>
              <li>
                <span className="text-slate-400">담당 역할</span><br />
                인증/회원 시스템 설계 · 보안 정책 구현 · AI 연동 구조 설계
              </li>
            </ul>
          </div>
        </section>

        {/* ================= 인증 시스템 설계 ================= */}
        <section className="mb-24">
          <h2 className="mb-6 text-xl font-semibold text-slate-100">
            인증 시스템 설계 & 보안 흐름
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-slate-400">
            <p>
              • 로그인 및 회원 인증은
              <strong className="text-slate-300">
                {" "}JWT 기반 토큰 인증 방식
              </strong>
              을 사용해
              세션 의존 없이 확장 가능한 구조로 설계했습니다.
            </p>

            <p>
              • Access Token / Refresh Token 구조를 적용해
              짧은 만료 토큰을 통한 보안성과
              사용자 편의성을 동시에 고려했습니다.
            </p>

            <p>
              • 회원가입 및 비밀번호 재설정에는
              <strong className="text-slate-300">
                {" "}이메일 인증 기반 단방향 흐름
              </strong>
              을 적용해
              계정 탈취 가능성을 최소화했습니다.
            </p>

            <p>
              • 로그인 이후 사용자 요청은
              토큰 기반
              <strong className="text-slate-300">
                {" "}양방향 인증 흐름
              </strong>
              으로 처리해
              인증 상태 검증과 권한 분리를 명확히 구성했습니다.
            </p>
          </div>
        </section>

        {/* ================= 로그인 ================= */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            로그인 / 소셜 로그인
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-400">
            일반 로그인과 카카오 소셜 로그인을 지원하며,
            로그인 성공 시 JWT 토큰을 발급해
            이후 API 요청에 인증 정보를 포함하도록 구현했습니다.
          </p>

          <img
            src="/images/Royalty/로그인.png"
            alt="Royalty 로그인 화면"
            className="rounded-xl border border-slate-800"
          />
        </section>

        {/* ================= 회원가입 ================= */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            회원가입 및 이메일 인증
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-400">
            회원가입 시 아이디 중복 검사와
            이메일 인증번호 검증을 거쳐
            계정 생성이 완료되도록 설계했습니다.
            이를 통해
            비정상 계정 생성을 사전에 차단합니다.
          </p>

          <img
            src="/images/Royalty/회원가입.png"
            alt="Royalty 회원가입 화면"
            className="rounded-xl border border-slate-800"
          />
        </section>

        {/* ================= 아이디 / 비밀번호 찾기 ================= */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            계정 복구 흐름 (아이디 / 비밀번호)
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-400">
            이메일 기반 계정 검증을 통해
            아이디 조회 및 비밀번호 재설정이 가능하도록 구현했습니다.
            모든 복구 과정은
            단방향 인증 흐름으로 설계되었습니다.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <img
              src="/images/Royalty/아이디찾기.png"
              alt="아이디 찾기"
              className="rounded-xl border border-slate-800"
            />
            <img
              src="/images/Royalty/비밀번호 찾기.png"
              alt="비밀번호 찾기"
              className="rounded-xl border border-slate-800"
            />
          </div>
        </section>

        {/* ================= 마무리 ================= */}
        <footer className="border-t border-slate-800 pt-10 text-sm text-slate-400">
          Royalty-AI는 단순한 로그인 기능 구현이 아닌,
          실제 서비스 운영을 고려한
          인증·보안·확장성을 함께 설계한
          실무 중심 백엔드 프로젝트입니다.
        </footer>

      </div>
    </main>
  )
}
