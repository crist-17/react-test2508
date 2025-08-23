import { NavLink } from "react-router-dom";
import "./Navigation.css";


function Navigation() {
  return (
 <nav className="Nav">
      <ul className="NavList">
        <li className="NavItem">
          
          <NavLink to="/" className="NavLink">과제방 홈</NavLink>
        </li>

        <li className="NavItem">
          <NavLink to="/hook" className="NavLink">훅</NavLink>
        </li>

        <li className="NavItem">
          <NavLink to="/React_0818" className="NavLink">미니블로그</NavLink>

      
          <ul className="DropdownMenu">
            <li>
             
              <NavLink to="/React_0818/post-write" className="DropdownLink">쓰기</NavLink>
            </li>
            <li>
              <NavLink to="/React_0818/post/1" className="DropdownLink">1번만 보기</NavLink>
            </li>
          </ul>
        </li>

        <li className="NavItem">
          <NavLink to="/contact" className="NavLink">문의하기</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;