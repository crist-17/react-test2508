import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidenav" aria-label="사이드 메뉴">
      <ul>
        {/* 1개만 실제 링크, 나머지는 공란(#) 가능 */}
        <li><Link to="/react_0818">미니블로그</Link></li>
        <li><a href="#">소장처별</a></li>
        <li><a href="#">장르별</a></li>
        <li><a href="#">테마별</a></li>
        <li><a href="#">시대별</a></li>
      </ul>
    </aside>
  );
}
