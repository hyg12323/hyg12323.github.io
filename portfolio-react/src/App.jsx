import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import ProjectGrid from "./components/ProjectGrid"
import ProjectIntro from "./components/ProjectIntro"
import MesPage from "./components/MesPage"
import CarwhyPage from "./components/CarwhyPage"
import RoyaltyAuthPage from "./components/RoyaltyAuthPage"

// 메인 페이지
function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ProjectIntro />
    </>
  )
}

/* =========================
   스크롤 최상단 처리
   ========================= */
function ScrollToTopWrapper({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopWrapper>
        <Header />

        <main>
          <Routes>
            {/* 메인 */}
            <Route path="/" element={<Home />} />

            {/* 프로젝트 목록 */}
            <Route
              path="/projects"
              element={
                <section className="bg-[#020617] min-h-screen pt-24 pb-32">
                  <div className="mx-auto max-w-5xl px-6">
                    <ProjectGrid />
                  </div>
                </section>
              }
            />

            {/* 프로젝트 상세 */}
            <Route path="/projects/mes" element={<MesPage />} />
            <Route path="/projects/carwhy" element={<CarwhyPage />} />
            <Route path="/projects/royalty" element={<RoyaltyAuthPage />} />
          </Routes>
        </main>
      </ScrollToTopWrapper>
    </BrowserRouter>
  )
}

export default App
