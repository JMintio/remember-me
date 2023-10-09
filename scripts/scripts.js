var btnCover = document.querySelector(".btn-menu-cover");
var btnMenu = document.querySelector(".btn-menu");
var sidebar = document.querySelector(".sidebar");
sidebar.style.display = "none";
var body = document.querySelector(".notes-box");

btnMenu.addEventListener("click", openSidebar);
body.addEventListener("click", closeSidebar);

function openSidebar() {
  if (sidebar.style.display == "flex") {
    closeSidebar();
  } else {
    btnMenu.classList.add("anim-btn-menu");
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
  sidebar.classList.add("closeSidebar");
  setTimeout(() => {
    sidebar.style.height = "0px";
    sidebar.style.display = "none";
    sidebar.classList.remove("closeSidebar");
  }, 200);
}

document.querySelector(".select-notes").addEventListener("click", selectNotes);
function selectNotes() {
  var notes = document.querySelectorAll(".note-style-def");
  notes.forEach((element) => {
    element.classList.add("shakeAnim");
  });
}
var i = 0;
document.querySelector(".add-new-note").addEventListener("click", addNewNote);
function addNewNote() {
  i++;

  var newNote = document.createElement("div");
  var noteDesc = document.createElement("input");
  var noteCheck = document.createElement("div");
  var noteCheckIcon = document.createElement("img");

  noteDesc.placeholder = "Digite o texto...";
  newNote.classList.add("note-style-def", "note-style-def", `ID${i}`);
  noteDesc.classList.add("note-desc-def", `ID_desc${i}`);

  noteCheck.classList.add("note-check", "flex-center", `ID_desc${i}`);
  noteCheckIcon.classList.add("note-icon-done", `ID_desc${i}`);
  noteCheckIcon.src = "./img/done.svg";

  var notesBox = document.querySelector(".notes-box");
  notesBox.appendChild(newNote);
  newNote.appendChild(noteDesc);

  newNote.appendChild(noteCheck);
  noteCheck.appendChild(noteCheckIcon);
}
