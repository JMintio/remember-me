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
var IDnow = "";

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

  newNote.classList.add("note-style-def", "note-style-def", ID);
  noteCheck.classList.add("note-check", "flex-center", ID);
  noteCheckIcon.classList.add("note-icon-done", ID);
  noteCheckIcon.src = "./img/done.svg";
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

  let isDragging = false;
  let offsetX;
  //MOUSE DOWN
  newNote.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - newNote.getBoundingClientRect().left;
  });
  //MOVING
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;

      newNote.style.left = x - 10 + "px";

      if (newNote.offsetLeft >= 60) {
        newNote.style.left = 50 + "px";
      } else if (newNote.offsetLeft <= -40) {
        newNote.style.left = -50 + "px";
      }
    }
  });
  //MOUSE UP
  document.addEventListener("mouseup", () => {
    IDnow = ID;
    isDragging = false;
    if (newNote.offsetLeft > 0) {
      newNote.classList.add("noteFromRight");
      setTimeout(() => {
        newNote.classList.remove("noteFromRight");
        newNote.style.left = "0px";
      }, 300);
    } else if (newNote.offsetLeft < 0) {
      newNote.classList.add("noteFromLeft");
      setTimeout(() => {
        newNote.classList.remove("noteFromLeft");
        newNote.style.left = "0px";
      }, 300);
    }
    if (newNote.offsetLeft == 60) {
      console.log(IDnow);
      noteChecked(IDnow);
    }
  });
  //TOUCH DOWN
  newNote.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - newNote.getBoundingClientRect().left;
  });
  //MOVING
  document.addEventListener("touchmove", (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      const x = touch.clientX - offsetX;

      newNote.style.left = x - 10 + "px";

      if (newNote.offsetLeft >= 60) {
        newNote.style.left = 50 + "px";
      } else if (newNote.offsetLeft <= -40) {
        newNote.style.left = -50 + "px";
      }
    }
  });
  //TOUCH UP
  document.addEventListener("touchend", () => {
    isDragging = false;
    IDnow = ID;
    if (newNote.offsetLeft > 0) {
      newNote.classList.add("noteFromRight");
      setTimeout(() => {
        newNote.classList.remove("noteFromRight");
        newNote.style.left = "0px";
      }, 300);
    } else if (newNote.offsetLeft < 0) {
      newNote.classList.add("noteFromLeft");
      setTimeout(() => {
        newNote.classList.remove("noteFromLeft");
        newNote.style.left = "0px";
      }, 300);
    }
    if (newNote.offsetLeft == 60) {
      noteChecked();
    }
  });
}

function noteChecked(id) {
  console.log(id);
  let domClass = document.querySelector(`.${id}`);
  domClass.classList.add("toLeftAnim");
  setTimeout(() => {
    domClass.remove();
  }, 299);
  /* id.classList.add("toLeftAnim");
  id.remove(); */
}
