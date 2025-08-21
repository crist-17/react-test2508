import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="inner">
        {/*  로고 */}
        <Link to="/" className="logo-link" aria-label="홈">
         <img src={`${import.meta.env.BASE_URL}images/s01_rogo.webp`} alt="로고" className="logo"
         style={{ width: 140, height: 'auto', display: 'block', opacity: 1 }}
         />
        </Link>

        {/*  네비(gnb) */}
        <nav className="gnb" aria-label="메인 메뉴">
          <ul>
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
            {/* (네비게이션으로 이동) */}
            <li>
              <Link to="/react_0818">미니블로그</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
