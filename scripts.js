var insideNote = document.querySelector(".note_inside");

insideNote.style.display = "none";

var noteBar = document.querySelector(".note_predef");
var noteIcon = document.querySelector(".note_icon");
var noteCloseIcon = document.querySelector(".note_close");

noteBar.addEventListener("mouseover", hoverNote, true);
noteBar.addEventListener("mouseleave", notHoverNote, true);
noteBar.addEventListener("click", hoverNote, true);
noteIcon.addEventListener("click", openNote, true);
noteCloseIcon.addEventListener("click", closeNote, true);

/* noteBar.addEventListener("click", openNote, true); */

function hoverNote() {
  noteIcon.style.display = "block";
  noteBar.style.width = "150px";
}
function notHoverNote() {
  noteIcon.style.display = "none";
  noteBar.style.width = "100px";
}
function openNote() {
  noteBar.removeEventListener("mouseover", hoverNote, true);
  noteBar.removeEventListener("mouseleave", notHoverNote, true);
  noteBar.removeEventListener("click", hoverNote, true);
  noteIcon.style.display = "none";
  noteCloseIcon.style.display = "block";
  noteBar.style.width = "95%";
  noteBar.style.height = "100%";
}
function closeNote() {
  noteCloseIcon.style.display = "none";
  noteBar.addEventListener("mouseover", hoverNote, true);
  noteBar.addEventListener("mouseleave", notHoverNote, true);
  noteBar.addEventListener("click", hoverNote, true);
  noteBar.style.width = "100px";
  noteBar.style.height = "30px";
}
