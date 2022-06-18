const menuToggler = () => {
    const menu = document.getElementById("Menu");
    const showMenuBtn = document.getElementById("ShowMenuBtn");
    const hideMenuBtn = document.getElementById("CloseMenuBtn");

    const showMenu = () => {
        menu.classList.add("menuOn");
    }
    const hideMenu = () => {
        menu.classList.remove("menuOn");
    }
    const toggleMenu =() => {
        menu.classList.toggle("menuOn");
    }
    
    showMenuBtn.addEventListener("click", toggleMenu);
    hideMenuBtn.addEventListener("click", toggleMenu);
}

//menuToggler();

window.addEventListener("DOMContentLoaded", () => {
    menuToggler();
});

const noteCreator = () => {
    const titleField = document.getElementById("NoteTitle");
    const contentField = document.getElementById("NoteContent");
    const addBtn = document.getElementById("AddNoteBtn");
    const notesWrapper = document.getElementById("Notes");

    const addNote = () => {
        const note = document.createElement("div");
        note.innerHTML = 
        `
            <h3>Tytuł notatki</h3>
            <p>zawartość notatki</p>
        `
        if(titleField.value.length > 2 && contentField.value.length > 5){
            notesWrapper.appendChild(note);
        }
        else{
            alert("nazwa bądz treść jest za krótka");
        }
        titleField.value = '';
        contentField.value = '';
    }
    addBtn.addEventListener("click", addNote);
    console.log("witam");
}

const formToggler = () => {
    const formWrapeer = document.getElementById('Form');
    const showFormBtn = document.getElementById("ShowForm");
    
    const toggleForm = () => {
        formWrapeer.classList.toggle("formOn");
    }
    showFormBtn.addEventListener("click",toggleForm);
}

window.addEventListener("load", () => {
    menuToggler();
    noteCreator();
    formToggler();
    console.log("witam");
})
