import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="inner">
        {/* 상단 메뉴(왼쪽) */}
        <nav className="gnb" aria-label="메인 메뉴">
          <ul>
            {/* 각 항목 hover 시 본인 서브메뉴만 부드럽게 표시 */}
            <li className="has-sub">
              <span className="mitem">소장처별</span>
              <ul className="submenu">
                <li><a href="#">한국</a></li>
                <li><a href="#">프랑스</a></li>
                <li><a href="#">이탈리아</a></li>
                <li><a href="#">독일</a></li>
              </ul>
            </li>
            <li className="has-sub">
              <span className="mitem">장르별</span>
              <ul className="submenu">
                <li><a href="#">회화</a></li>
                <li><a href="#">판화</a></li>
                <li><a href="#">공예/고대유물</a></li>
                <li><a href="#">그 외</a></li>
              </ul>
            </li>
            <li className="has-sub">
              <span className="mitem">테마별</span>
              <ul className="submenu">
                <li><a href="#">초상화/인물</a></li>
                <li><a href="#">종교</a></li>
                <li><a href="#">신화/문학</a></li>
                <li><a href="#">일상/스포츠</a></li>
              </ul>
            </li>
            <li className="has-sub">
              <span className="mitem">시대별</span>
              <ul className="submenu">
                <li><a href="#">1900년이전</a></li>
                <li><a href="#">1900년대</a></li>
                <li><a href="#">현대</a></li>
                <li><a href="#">그 외</a></li>
              </ul>
            </li>
            {/* (예) 네 기존 라우트로 가는 항목 하나 유지 */}
            <li>
              <Link to="/react_0818">React_0818</Link>
            </li>
          </ul>
        </nav>

        {/* 로고(오른쪽) — 색상은 과제 주제에 맞게 변경 */}
        {/* ▼ Header/로고 이미지 경로 바꾸기 */}
        <img src="/* /logo-header.png */" alt="로고" className="logo" />
      </div>
    </header>
  );
}
