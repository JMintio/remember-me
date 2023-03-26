function note_click() {
  let note = document.querySelector(".note_predef");
  let noteClose = document.querySelector(".note_close");
  noteClose.style.display = "flex";
  note.style.width = "98%";
  note.style.height = "80%";
  note.style.borderRadius = "10px";
  note.style.cursor = "default";
}
function note_close() {
  let note = document.querySelector(".note_predef");
  let noteClose = document.querySelector(".note_close");
  noteClose.style.display = "none";
  note.style.width = "100px";
  note.style.height = "30px";
  note.style.borderRadius = "15px";
}
function add_note() {
  let note = document.querySelector(".note_predef");
  let noteClose = document.querySelector(".note_close");
  noteClose.style.display = "none";
  note.style.width = "100px";
  note.style.height = "30px";
  note.style.borderRadius = "15px";
}
