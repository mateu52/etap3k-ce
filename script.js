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

window.addEventListener("DOMContentLoaded", () => {
    menuToggler();
});

const noteCreator = () => {
    const titleField = document.getElementById("NoteTitle");
    const contentField = document.getElementById("NoteContent");
    const addBtn = document.getElementById("AddNoteBtn");
    const notesWrapper = document.getElementById("Notes");
    const categoryField = document.getElementById("NoteCategory");

    const addNote = () => {
        let iconClass= null;
        switch(categoryField.value){
            case 'Podróże':
                iconClass = "bi bi-house-fill";
                break;
            case 'Praca':
                iconClass = "bi bi-person-workspace";
                break;
            case 'Dom':
                iconClass = "bi bi-arrow-through-heart-fill"
                break;
            default:
                iconClass = null;
                break;
        }

        const note = document.createElement("div");
        note.classList.add("card");
        note.innerHTML = 
        `
            <span> <i class="${iconClass}"></i></span>
            <span>${categoryField.value}</span>
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
