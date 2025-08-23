import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Model from "./components/Model";

//  홈 전용 섹션(슬라이드/공지/추천)
import { useState } from "react";
function HomeLanding() {
  const [tab, setTab] = useState("notice");
  const [open, setOpen] = useState(false);


  return (
    <>



      {/* B. 슬라이드 */}
      <section className="slide">
        <ul className="slide-track">
          <li style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/bg.jpg)` }}>
            <div className="caption"><h3>통일전망대</h3><p>gop구경해요</p></div>
          </li>
          <li style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/img.jpg)` }}>
            <div className="caption"><h3>유채꽃호수</h3><p>좋은날씨 꽃구경</p></div>
          </li>
          <li style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/activity.jpg)` }}>
            <div className="caption"><h3>영월하늘날기</h3><p>하늘로가다</p></div>
          </li>
          <li style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/bg.jpg)` }}>
            <div className="caption"><h3>통일전망대</h3><p>gop구경해요</p></div>
          </li>
        </ul>
      </section>

      {/* C. 탭: 공지/갤러리 */}
      <section className="tabs">
        <div className="tab-headers">
          <button className={tab === "notice" ? "active" : ""} onClick={() => setTab("notice")}>공지사항</button>
          <button className={tab === "gallery" ? "active" : ""} onClick={() => setTab("gallery")}>갤러리</button>
        </div>

        <div className="tab-body">
          {tab === "notice" ? (
            <ul className="notice-list">
              <li>
                <button className="linklike" onClick={() => setOpen(true)}>
                  [공지 1] (클릭 시 알림창)
                </button>
              </li>
              <li>[공지 2] 내용 예시</li>
              <li>[공지 3] 내용 예시</li>
              <li>[공지 4] 내용 예시</li>
            </ul>
          ) : (
            <div className="gallery">
              <figure style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/fruit.jpg)` }} />
              <figure style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/giraffe.jpg)` }} />
              <figure style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/salad.jpg)` }} />
              <figure style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/red.jpg)` }} />
              <figure style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/rice.jpg)` }} />
            </div>
          )}
        </div>

        <div className="banner">
          <strong>기획전</strong> · 오늘의 추천 테마 · <Link to="/">자세히</Link>
        </div>
      </section>

      {/* D. 추가 섹션: 추천 카드 */}
      <section className="feature">
        <h3>오늘의 추천</h3>
        <div className="cards">
          <div className="card">
            <h4>추천 소장품</h4>
            <p>이번 주 베스트를 만나보세요.</p>
          </div>
          <div className="card">
            <h4>신규 전시</h4>
            <p>새로 열린 전시 소식입니다.</p>
          </div>
          <div className="card">
            <h4>에디토리얼</h4>
            <p>큐레이터의 관점으로 읽는 작품.</p>
          </div>
        </div>
      </section>

      {/* 홈에서만 쓰는 레이어 팝업 */}
      <Model open={open} onClose={() => setOpen(false)}>
        <h3 className="model-title">공지사항</h3>
        <p className="model-body">리엑트 어렵다</p>
      </Model>

    </>
  );
}

//  미니블로그 라우트
import React_0818 from "./react_0818/React_0818";

export default function App() {
  return (
    <div className="site">


      <Header />

      {/* 페이지 전체 가운데 정렬 래퍼 */}
      <div className="page-center">
        <div className="wrap">
          <Sidebar />
          <main className="main">
            {/* 라우팅: "/"에서만 홈 섹션이 보이고, 네비 클릭 시 react_0818 화면으로 전환 */}
            <Routes>
              <Route path="/" element={<HomeLanding />} />
              <Route path="/react_0818/*" element={<React_0818 />} />
              {/* 필요시 기타 라우트 추가 */}
            </Routes>
          </main>
        </div>
      </div>

      <footer className="footer">
        <div className="inner">
          <div className="f-left">
            <img src={`${import.meta.env.BASE_URL}images/s01_rogo.webp`} alt="로고"
              className="logo-gray"
              style={{ width: 140, height: 'auto', display: 'block', opacity: 1 }}
            />
          </div>
          <div className="f-center">© 2025 Museum. All rights reserved.</div>
          <nav className="f-right">
            <a href="#" aria-label="Instagram">📸 IG</a>
            <a href="#" aria-label="Facebook">📘 FB</a>
            <a href="#" aria-label="X">𝕏</a>
          </nav>
        </div>
      </footer>

    </div>

  );
}
