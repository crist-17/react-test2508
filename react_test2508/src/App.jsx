import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


// ✅ 네가 이미 갖고 있는 컴포넌트 그대로 사용
 // 경로는 네 프로젝트에 맞게
import Model from "./components/Model";
import React_0818 from "./react_0818/React_0818";

export default function App() {
  // 탭: notice | gallery
  const [tab, setTab] = useState("notice");
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* A. Header (100% 폭, 내부 1200px 정렬) */}
      <Header />

      {/* 본문 레이아웃: 좌측 사이드 + 메인 */}
      <div className="wrap">
        <Sidebar />

        <main className="main">
          {/* B. 이미지 슬라이드: 위↔아래 전환, 3초 간격 */}
          <section className="slide">
            {/* ▼▼▼ 여기 <li>의 background-image에 네 이미지 경로 넣기 ▼▼▼
                예) style={{ backgroundImage: 'url(/images/slide1.jpg)' }} */}
            <ul className="slide-track">
              <li style={{ backgroundImage: "url(/* /slide1.jpg */)" }}>
                <div className="caption">
                  {/* [Slide 폴더 텍스트1] 넣는 자리 */}
                  <h3>슬라이드 제목 1</h3>
                  <p>슬로건/문구 1</p>
                </div>
              </li>
              <li style={{ backgroundImage: "url(/* /slide2.jpg */)" }}>
                <div className="caption">
                  {/* [Slide 폴더 텍스트2] */}
                  <h3>슬라이드 제목 2</h3>
                  <p>슬로건/문구 2</p>
                </div>
              </li>
              <li style={{ backgroundImage: "url(/* /slide3.jpg */)" }}>
                <div className="caption">
                  {/* [Slide 폴더 텍스트3] */}
                  <h3>슬라이드 제목 3</h3>
                  <p>슬로건/문구 3</p>
                </div>
              </li>
            </ul>
          </section>

          {/* C. 탭: 공지사항 / 갤러리 (같은 보더 내부 전환) */}
          <section className="tabs">
            <div className="tab-headers">
              <button
                className={tab === "notice" ? "active" : ""}
                onClick={() => setTab("notice")}
              >
                공지사항
              </button>
              <button
                className={tab === "gallery" ? "active" : ""}
                onClick={() => setTab("gallery")}
              >
                갤러리
              </button>
              {/* (선택) 배너는 별도 블록으로 하단에 배치 */}
            </div>

            <div className="tab-body">
              {tab === "notice" ? (
                <ul className="notice-list">
                  {/* ▼ Contents 폴더 제공 텍스트로 교체 */}
                  <li>
                    <button className="linklike" onClick={() => setOpen(true)}>
                      [공지 1] (클릭 시 레이어 팝업 뜸)
                    </button>
                  </li>
                  <li>[공지 2] 내용 예시</li>
                  <li>[공지 3] 내용 예시</li>
                  <li>[공지 4] 내용 예시</li>
                </ul>
              ) : (
                <div className="gallery">
                  {/* ▼ 세 장 가로 배치 / 이미지 경로만 바꾸면 됨 */}
                  <figure
                    style={{ backgroundImage: "url(/* /g1.jpg */)" }}
                    title="갤러리1"
                  />
                  <figure
                    style={{ backgroundImage: "url(/* /g2.jpg */)" }}
                    title="갤러리2"
                  />
                  <figure
                    style={{ backgroundImage: "url(/* /g3.jpg */)" }}
                    title="갤러리3"
                  />
                </div>
              )}
            </div>

            {/* C.3 배너 (이미지 금지, HTML/CSS로 작성) */}
            <div className="banner">
              {/* ▼ Contents 폴더 텍스트/요소 활용해서 자유 디자인 */}
              <strong>기획전</strong> · 오늘의 추천 테마 · <Link to="/">자세히</Link>
            </div>
          </section>

          {/* React_0818 라우트로 진입하는 링크(예시) */}
          <p className="to-legacy">
            <Link to="/react_0818">React_0818 페이지로 이동</Link>
          </p>

          {/* 라우팅 영역 */}
          <Routes>
            <Route path="/react_0818" element={<React_0818 />} />
            {/* 메인은 App 자체가 렌더링 중이므로 "/"는 생략 */}
          </Routes>
        </main>
      </div>

      {/* D. Footer (100%) */}
      <footer className="footer">
        <div className="inner">
          {/* 좌: 로고 (grayscale) */}
          <div className="f-left">
            {/* ▼ Footer/로고 경로로 교체 */}
            <img
              src="/* /logo-footer.png */"
              alt="로고"
              className="logo-gray"
            />
          </div>
          {/* 중: Copyright */}
          <div className="f-center">© 2025 Museum. All rights reserved.</div>
          {/* 우: SNS 3개 (아이콘은 문자/이모지 대체 가능) */}
          <nav className="f-right">
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="Facebook">
              FB
            </a>
            <a href="#" aria-label="X">
              X
            </a>
          </nav>
        </div>
      </footer>

      {/* 레이어 팝업: 공지 1 클릭 시 열림 */}
      <Model open={open} onClose={() => setOpen(false)}>
        {/* ▼ 레이어 팝업 제목/내용: Contents 폴더 텍스트로 교체 */}
        <h3 className="modal-title">공지사항 제목</h3>
        <p className="modal-body">
          여기 팝업 내용이 들어갑니다. (제공 텍스트 사용)
        </p>
      </Model>
    </BrowserRouter>
  );
}