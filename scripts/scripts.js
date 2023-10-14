var body = document.querySelector(".notes-box");
var btnCover = document.querySelector(".btn-menu-cover");
var btnMenu = document.querySelector(".btn-menu");
var sidebar = document.querySelector(".sidebar");
var btnMenuText = document.querySelector(".btn-menu-text");
var blurBackground = document.querySelector(".blur-background");
var priorityBox = document.querySelector(".priority-box");
var confirmBox = document.querySelector(".confirm-box");
var btnClose = document.querySelector(".confirm-close-icon");
var priority01 = "rgb(255, 255, 255)";
var priority02 = "rgb(235, 223, 64)";
var priority03 = "rgb(235, 58, 58)";
var currentID = "";

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
addNewNote(); /////////////////////////////////////////////////////////

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

  var notePriority = document.createElement("div");
  var notePriorityIcon = document.createElement("img");

  var notePriority2 = document.createElement("div");
  var notePriorityIcon2 = document.createElement("img");

  newNote.classList.add("note-style-def", "note-style-def", ID);
  noteDesc.placeholder = "Digite o texto...";
  noteDesc.classList.add("note-desc-def", ID);

  noteCheck.classList.add("note-check", "flex-center", ID);
  noteCheckIcon.classList.add("note-icon", ID);
  noteCheckIcon.src = "./img/done.svg";

  notePriority.classList.add("note-priority", "flex-center", ID);
  notePriorityIcon.classList.add("note-icon", ID);
  notePriorityIcon.src = "./img/priority.svg";

  notePriority2.classList.add("note-priority2", "flex-center", ID);
  notePriorityIcon2.classList.add("note-icon", ID);
  notePriorityIcon2.src = "./img/priority2.svg";

  var notesBox = document.querySelector(".notes-box");

  notesBox.appendChild(newNote);
  newNote.appendChild(noteDesc);

  newNote.appendChild(noteCheck);
  noteCheck.appendChild(noteCheckIcon);

  newNote.appendChild(notePriority);
  notePriority.appendChild(notePriorityIcon);

  newNote.appendChild(notePriority2);
  notePriority2.appendChild(notePriorityIcon2);

  // ----------------------- MOVING NOTE -----------------------
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
      } else if (newNote.offsetLeft <= -90) {
        newNote.style.left = -100 + "px";
      }
    }
  });
  //MOUSE UP
  document.addEventListener("mouseup", () => {
    console.log(newNote.offsetLeft);
    currentID = ID;
    isDragging = false;
    if (newNote.offsetLeft == 60) {
      noteChecked(currentID);
    }
    if (newNote.offsetLeft > 0) {
      newNote.classList.add("noteFromRight");
      setTimeout(() => {
        newNote.classList.remove("noteFromRight");
        newNote.style.left = "0px";
      }, 290);
    } else if (newNote.offsetLeft < 0) {
      newNote.classList.add("noteFromLeft");
      setTimeout(() => {
        newNote.classList.remove("noteFromLeft");
        newNote.style.left = "0px";
      }, 290);
    }
    if (newNote.offsetLeft >= -40 && newNote.offsetLeft <= -20) {
      notesBox.insertBefore(document.querySelector(`.${currentID}`), notesBox.lastChild);

      document.querySelector(`.${currentID}`).style.backgroundColor = "white";
    }
    if (newNote.offsetLeft >= -90 && newNote.offsetLeft <= -60) {
      notesBox.insertBefore(document.querySelector(`.${currentID}`), notesBox.firstChild);
      document.querySelector(`.${currentID}`).style.backgroundColor = "rgb(255, 240, 240)";
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
      } else if (newNote.offsetLeft <= -90) {
        newNote.style.left = -100 + "px";
      }
    }
  });
  //TOUCH UP
  document.addEventListener("touchend", () => {
    isDragging = false;
    currentID = ID;
    if (newNote.offsetLeft == 60) {
      noteChecked(currentID);
    }
    if (newNote.offsetLeft > 0) {
      newNote.classList.add("noteFromRight");
      setTimeout(() => {
        newNote.classList.remove("noteFromRight");
        newNote.style.left = "0px";
      }, 290);
    } else if (newNote.offsetLeft < 0) {
      newNote.classList.add("noteFromLeft");
      setTimeout(() => {
        newNote.classList.remove("noteFromLeft");
        newNote.style.left = "0px";
      }, 290);
    }

    if (newNote.offsetLeft >= -40 && newNote.offsetLeft <= -20) {
      notesBox.insertBefore(document.querySelector(`.${currentID}`), notesBox.lastChild);

      document.querySelector(`.${currentID}`).style.backgroundColor = "white";
    }
    if (newNote.offsetLeft >= -90 && newNote.offsetLeft <= -60) {
      notesBox.insertBefore(document.querySelector(`.${currentID}`), notesBox.firstChild);

      document.querySelector(`.${currentID}`).style.backgroundColor = "rgb(255, 240, 240)";
    }
  });
}

function noteChecked(id) {
  console.log(id);
  let domClass = document.querySelector(`.${id}`);
  domClass.classList.add("toLeftAnim");
  setTimeout(() => {
    domClass.remove();
  }, 290);
}
