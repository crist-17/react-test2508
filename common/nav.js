const REPO = "react-test2508"; // ← 저장소명으로 변경

const links = [
  { href: `/${REPO}/`, label: "Home" },
  { href: `/${REPO}/main/`, label: "Main Build" },
  { href: `/${REPO}/way-submenu/`, label: "Way Submenu Build" },
];

const nav = document.createElement("nav");
nav.className = "global-nav";
nav.innerHTML = `
  <div class="gn-wrap">
    <strong class="gn-title">Branches</strong>
    <div class="gn-links">
      ${links
        .map(
          (l) => `<a class="gn-link" href="${l.href}">${l.label}</a>`
        )
        .join("")}
    </div>
  </div>
`;
document.body.prepend(nav);

// 현재 페이지 하이라이트
const cur = location.pathname.replace(/\/+$/, ""); // 끝 슬래시 제거
document.querySelectorAll(".gn-link").forEach((a) => {
  const path = new URL(a.href).pathname.replace(/\/+$/, "");
  if (path === cur) a.classList.add("active");
});