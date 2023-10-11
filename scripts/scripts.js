var body = document.querySelector(".notes-box");
var btnCover = document.querySelector(".btn-menu-cover");
var btnMenu = document.querySelector(".btn-menu");
var sidebar = document.querySelector(".sidebar");
var btnMenuText = document.querySelector(".btn-menu-text");
var blurBackground = document.querySelector(".blur-background");
var priorityBox = document.querySelector(".priority-box");
var confirmBox = document.querySelector(".confirm-box");
var btnConfirm = document.querySelector(".btn-confirm");
var btnCancel = document.querySelector(".btn-cancel");
var btnClose = document.querySelector(".confirm-close-icon");
var priority01 = "rgb(255, 255, 255)";
var priority02 = "rgb(235, 223, 64)";
var priority03 = "rgb(235, 58, 58)";

btnConfirm.addEventListener("click", checkConfirm);
btnCancel.addEventListener("click", checkCancel);
btnClose.addEventListener("click", checkCancel);
btnMenu.addEventListener("click", openSidebar);
body.addEventListener("click", closeSidebar);

sidebar.style.display = "none";
openSidebar(); /////////////////////////////////////////////////////////
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
var ID_Counter = 1000;
document.querySelector(".add-new-note").addEventListener("click", addNewNote);
function addNewNote() {
  // ADDING NEW NOTES FUNCTION
  /* closeSidebar(); */ ///////////////////////////////////////////////////////////
  ID_Counter++;
  var ID = "ID" + ID_Counter;

  var newNote = document.createElement("div");
  var noteDesc = document.createElement("input");
  var noteCheck = document.createElement("div");
  var noteCheckIcon = document.createElement("img");

  //NOTE
  newNote.classList.add("note-style-def", "note-style-def", ID);
  //CHECK
  noteCheck.classList.add("note-check", "flex-center", ID);
  noteCheckIcon.classList.add("note-icon-done", ID);
  noteCheckIcon.src = "./img/done.svg";
  //DESCRIPTION
  noteDesc.placeholder = "Digite o texto...";
  noteDesc.classList.add("note-desc-def", ID);

  var notesBox = document.querySelector(".notes-box");
  notesBox.appendChild(newNote);
  newNote.appendChild(noteCheck);
  noteCheck.appendChild(noteCheckIcon);
  newNote.appendChild(noteDesc);

  noteCheck.addEventListener("click", () => {
    noteChecked(ID);
  });

  let timeoutId;

  newNote.addEventListener("mousedown", () => {
    timeoutId = setTimeout(function () {
      console.log("Clique longo detectado!");
      priorityBox.style.display = "block";
    }, 500);
  });

  newNote.addEventListener("mouseup", function () {
    clearTimeout(timeoutId);
  });
}

var IDnow = "";
function noteChecked(id) {
  IDnow = id;
  blurBackground.style.display = "block";
  confirmBox.style.display = "block";
}

function checkConfirm() {
  document.querySelector(`.note-style-def.${IDnow}`).classList.add("toLeftAnim");
  setTimeout(() => {
    document.querySelector(`.note-style-def.${IDnow}`).remove();
  }, 300);

  blurBackground.style.display = "none";
  confirmBox.style.display = "none";
}

function checkCancel() {
  blurBackground.style.display = "none";
  confirmBox.style.display = "none";
}

document.addEventListener("click", function (event) {
  console.log(IDnow);
});
