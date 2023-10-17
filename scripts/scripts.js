var body = document.querySelector(".notes-box");
var btnMenu = document.querySelector(".btn-menu");
var sidebar = document.querySelector(".sidebar");
var btnMenuText = document.querySelector(".btn-menu-text");
var blurBackground = document.querySelector(".blur-background");
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
    btnMenuText.innerHTML = "menu";
    sidebar.style.display = "flex";
    btnMenu.classList.add("anim-btn-menu");
    sidebar.classList.add("openSidebar");
    setTimeout(() => {
      sidebar.style.height = "100px";
      sidebar.classList.remove("openSidebar");
      btnMenu.classList.remove("anim-btn-menu");
    }, 180);
  }
}
function closeSidebar() {
  // CLOSE SIDE BAR FUNCTION
  sidebar.classList.add("closeSidebar");
  setTimeout(() => {
    sidebar.style.height = "0px";
    sidebar.style.display = "none";
    sidebar.classList.remove("closeSidebar");
  }, 180);
}

fetch("database/db.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro na solicitação: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    const getID = data.notes.note;
    getID.forEach((element) => {
      addNewNote();
    });
    console.log(getID);
  })
  .catch((error) => console.error("Erro:", error));

/* Adding notes */
var ID_Counter = 1000;
addNewNote(); /////////////////////////////////////////////////////////

document.querySelector(".add-new-note").addEventListener("click", addNewNote);
function addNewNote() {
  // ADDING NEW NOTES FUNCTION
  /* closeSidebar(); */ ///////////////////////////////////////////////////////////
  ID_Counter++;
  var ID = "ID" + ID_Counter;

  // Create Element
  var newNote = document.createElement("div");
  var noteDesc = document.createElement("input");

  var noteCheck = document.createElement("div");
  var noteCheckIcon = document.createElement("img");

  var notePriority = document.createElement("div");
  var notePriorityIcon = document.createElement("img");

  // Add class
  newNote.classList.add("note-style-def", "note-style-def", ID);
  noteDesc.placeholder = "Digite o texto...";
  noteDesc.classList.add("note-desc-def", ID);

  noteCheck.classList.add("note-check", "flex-center", ID);
  noteCheckIcon.classList.add("note-icon", ID);
  noteCheckIcon.src = "./img/done.svg";

  notePriority.classList.add("note-priority", "flex-center", ID);
  notePriorityIcon.classList.add("note-icon", ID);
  notePriorityIcon.src = "./img/priority.svg";

  // Append in father element

  var notesBox = document.querySelector(".notes-box");

  notesBox.appendChild(newNote);
  newNote.appendChild(noteDesc);

  newNote.appendChild(noteCheck);
  noteCheck.appendChild(noteCheckIcon);

  newNote.appendChild(notePriority);
  notePriority.appendChild(notePriorityIcon);

  // ----------------------- MOVING NOTE -----------------------
  let isPriority = false;
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
    if (newNote.offsetLeft <= -40) {
      let currentNotePriority = document.querySelector(`.${ID} .note-priority`);

      if (isPriority == true) {
        isPriority = false;
        currentNotePriority.style.backgroundColor = "rgb(255, 240, 240)";

        notesBox.insertBefore(document.querySelector(`.${currentID}`), notesBox.lastChild);
        document.querySelector(`.${currentID}`).style.backgroundColor = "white";
      } else {
        isPriority = true;
        currentNotePriority.style.backgroundColor = "white";

        notesBox.insertBefore(document.querySelector(`.${currentID}`), notesBox.firstChild);
        document.querySelector(`.${currentID}`).style.backgroundColor = "rgb(255, 240, 240)";
      }
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

    if (newNote.offsetLeft <= -40) {
      let currentNotePriority = document.querySelector(`.${ID} .note-priority`);

      if (isPriority == true) {
        isPriority = false;
        currentNotePriority.style.backgroundColor = "rgb(255, 240, 240)";

        notesBox.insertBefore(document.querySelector(`.${currentID}`), notesBox.lastChild);
        document.querySelector(`.${currentID}`).style.backgroundColor = "white";
      } else {
        isPriority = true;
        currentNotePriority.style.backgroundColor = "white";

        notesBox.insertBefore(document.querySelector(`.${currentID}`), notesBox.firstChild);
        document.querySelector(`.${currentID}`).style.backgroundColor = "rgb(255, 240, 240)";
      }
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
