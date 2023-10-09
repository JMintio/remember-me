var body = document.querySelector(".notes-box");
var btnCover = document.querySelector(".btn-menu-cover");
var btnMenu = document.querySelector(".btn-menu");
var sidebar = document.querySelector(".sidebar");
var btnMenuText = document.querySelector(".btn-menu-text");

btnMenu.addEventListener("click", openSidebar);
body.addEventListener("click", closeSidebar);

sidebar.style.display = "none";

function openSidebar() {
  // OPEN SIDE BAR FUNCTION
  if (sidebar.style.display == "flex") {
    closeSidebar();
  } else {
    var notes = document.querySelectorAll(".note-style-def");
    notes.forEach((element) => {
      element.classList.remove("shakeAnim");
    });
    btnMenuText.innerHTML = "menu";
    btnMenu.classList.add("btn-menu-normal");
    btnMenu.classList.remove("btn-menu-cancel");
    sidebar.style.display = "flex";
    sidebar.classList.add("openSidebar");
    setTimeout(() => {
      sidebar.style.height = "100px";
      sidebar.classList.remove("openSidebar");
      btnMenu.classList.remove("anim-btn-menu");
    }, 200);
  }
}
function closeSidebar() {
  // CLOSE SIDE BAR FUNCTION
  sidebar.classList.add("closeSidebar");
  setTimeout(() => {
    sidebar.style.height = "0px";
    sidebar.style.display = "none";
    sidebar.classList.remove("closeSidebar");
  }, 200);
}
/* Select Notes */
document.querySelector(".select-notes").addEventListener("click", selectNotes);
function selectNotes() {
  closeSidebar();
  btnMenuText.innerHTML = "cancel";
  btnMenu.classList.remove("btn-menu-normal");
  btnMenu.classList.add("btn-menu-cancel");
  var notes = document.querySelectorAll(".note-style-def");
  notes.forEach((element) => {
    element.classList.add("shakeAnim");
  });
}

/* Adding notes */
var i = 1000;
document.querySelector(".add-new-note").addEventListener("click", addNewNote);
function addNewNote() {
  // ADDING NEW NOTES FUNCTION
  closeSidebar();
  i++;

  var newNote = document.createElement("div");
  var noteDesc = document.createElement("input");
  var noteCheck = document.createElement("div");
  var noteCheckIcon = document.createElement("img");

  //NOTE
  newNote.classList.add("note-style-def", "note-style-def", `ID_01${i}`);
  //CHECK
  noteCheck.classList.add("note-check", "flex-center", `ID_02${i}`);
  noteCheckIcon.classList.add("note-icon-done", `ID_02${i}`);
  noteCheckIcon.src = "./img/done.svg";
  //DESCRIPTION
  noteDesc.placeholder = "Digite o texto...";
  noteDesc.classList.add("note-desc-def", `ID_03${i}`);

  var notesBox = document.querySelector(".notes-box");
  notesBox.appendChild(newNote);
  newNote.appendChild(noteCheck);
  noteCheck.appendChild(noteCheckIcon);
  newNote.appendChild(noteDesc);
}
