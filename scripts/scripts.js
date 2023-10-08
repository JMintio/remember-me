var btnCover = document.querySelector(".btn-menu-cover");
var btnMenu = document.querySelector(".btn-menu");
var sidebar = document.querySelector(".sidebar");
var body = document.querySelector(".notes-box");

btnMenu.addEventListener("mouseover", overBtnHome);
btnMenu.addEventListener("mouseout", outBtnHome);
btnMenu.addEventListener("click", openSidebar);
body.addEventListener("click", closeSidebar);

function overBtnHome() {
  btnCover.classList.add("over-btn-home");
  btnCover.classList.remove("out-btn-home");
  setTimeout(() => {
    btnCover.style.width = "0px";
    btnCover.style.height = "0px";
  }, 200);
}
function outBtnHome() {
  btnCover.classList.remove("over-btn-home");
  btnCover.classList.add("out-btn-home");
  setTimeout(() => {
    btnCover.style.width = "50px";
    btnCover.style.height = "50px";
  }, 200);
}
function openSidebar() {
  sidebar.classList.add("openSidebar");
  setTimeout(() => {
    sidebar.style.height = "300px";
    sidebar.classList.remove("openSidebar");
  }, 200);
}
function closeSidebar() {
  sidebar.classList.add("closeSidebar");
  setTimeout(() => {
    sidebar.style.height = "0px";
    sidebar.classList.remove("closeSidebar");
  }, 200);
}
