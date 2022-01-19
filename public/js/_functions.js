export let addTask = (parentLi,toDoInput) => {
    //Déclaration des variables
    let newTask=document.createElement("li");
    let taskDiv=document.createElement("div");
    let taskText=document.createElement("p");
    let divBtnCheck=document.createElement("div");
    let btnBleu=document.createElement("button");
    let btnVert=document.createElement("button");
    let btnRouge=document.createElement("button");
    let iCheck=document.createElement("i");
    let iSave=document.createElement("i");
    let iTrash=document.createElement("i");
    //Attribution des valeurs aux éléments
    newTask.setAttribute("class","list-group-item p-0");
    taskDiv.setAttribute("class","d-flex justify-content-between");
    taskText.setAttribute("class","text ps-4 m-0 fw-bold text-primary");
    taskText.setAttribute("contenteditable","true")
    divBtnCheck.setAttribute("class","divBtnCheck");
    btnBleu.setAttribute("class","btn btn-primary");
    btnBleu.setAttribute("type","submit");
    btnVert.setAttribute("class","btn btn-success");
    btnVert.setAttribute("type","submit");
    btnRouge.setAttribute("class","btn btn-danger");
    btnRouge.setAttribute("type","submit");
    iCheck.setAttribute("class","fas fa-check-circle");
    iSave.setAttribute("class","fas fa-save");
    iTrash.setAttribute("class","fas fa-trash-alt");
    //insertion des elements
    newTask.insertAdjacentElement('beforeend',taskDiv);
    taskDiv.insertAdjacentElement('beforeend',taskText);
    taskDiv.insertAdjacentElement('beforeend',divBtnCheck);
    divBtnCheck.insertAdjacentElement('beforeend',btnBleu);
    divBtnCheck.insertAdjacentElement('beforeend',btnVert);
    divBtnCheck.insertAdjacentElement('beforeend',btnRouge);
    btnBleu.insertAdjacentElement('beforeend',iCheck);
    btnVert.insertAdjacentElement('beforeend',iSave);
    btnRouge.insertAdjacentElement('beforeend',iTrash);
    parentLi.appendChild(newTask);
    //Crée un contenu par default dans la tâche
    
    if (toDoInput.value==='') {
        taskText.innerHTML ="Empty task"
    }else{
        taskText.innerHTML=toDoInput.value
    };
    //Vide la valeur de l'input en haut de page
    toDoInput.value=""
    //boutons
        //verification
    let check = () => {
        taskDiv.classList.toggle("bg-primary")
        taskText.classList.toggle("text-light")
    }
    btnBleu.addEventListener("click",check);
        //suppression
    let suppr = () => {
        newTask.remove()
    }
    btnRouge.addEventListener("click",suppr);
        //Rename
    taskText.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                taskText.setAttribute("contenteditable","false")
            }
    btnVert.addEventListener("click",()=>{
        taskText.setAttribute("contenteditable","true")
    });
          });
};