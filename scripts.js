addNoteEvent();
let note_inside = document.querySelector(".note_inside");
note_inside.style.display = "none";

function note_click() {
  let note_name = document.querySelector(".note_name");
  note_name.style.display = "none";
  let note_inside = document.querySelector(".note_inside");
  note_inside.style.display = "flex";

  let note = document.querySelector(".note_predef");
  let noteClose = document.querySelector(".note_close");
  note.removeEventListener("click", note_click);
  note.style.width = "98%";
  note.style.height = "80%";
  note.style.borderRadius = "10px";
  note.style.cursor = "default";
  noteClose.style.display = "flex";

  removeNoteEvent();
}

function note_close() {
  let note = document.querySelector(".note_predef");
  let noteClose = document.querySelector(".note_close");
  let note_inside = document.querySelector(".note_inside");
  note_inside.style.display = "none";
  let note_name = document.querySelector(".note_name");
  note_name.style.display = "flex";
  noteClose.style.display = "none";
  note.style.width = "100px";
  note.style.height = "30px";
  note.style.borderRadius = "15px";
  note.style.cursor = "pointer";
  addNoteEvent();
}

function addNoteEvent() {
  let note = document.querySelector(".note_predef");
  note.addEventListener("click", note_click, true);
}
function removeNoteEvent() {
  let note = document.querySelector(".note_predef");
  note.removeEventListener("click", note_click);
}

function add_note() {
  const teste = document.createElement("diasv");
  teste.appendChild(document.createTextNode("teste"));
  document.querySelector(".diasv").classList.add("note_predef");
}
