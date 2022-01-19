import {} from './_functions.js'
import {} from './_class.js'

let parentLi = document.getElementsByClassName("parentLi")[0];
let addbtn = document.getElementsByClassName("addBtn")[0];
let toDoInput = document.getElementsByClassName("toDoInput")[0];
let x=1
let addTask = () => {
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
    taskText.setAttribute("class","text ps-4");
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
        taskText.innerHTML ="task" + Number(x)
        x++
    }else{
        taskText.innerHTML=toDoInput.value
    };
    //Vide la valeur de l'input en haut de page
    toDoInput.value=""
    //boutons
        //verification
    let check = () => {
        taskDiv.classList.toggle("bg-primary")
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
//Ecouteurs d'évenements
addbtn.addEventListener("click",addTask)
//tri des taches
let done = document.getElementsByClassName("done")[0];
let aFaire = document.getElementsByClassName("afaire")[0];
let allTask = document.getElementsByClassName("all")[0];
let triDone=()=>{
    for (let i = 0; i < parentLi.children.length; i++) {
        if (parentLi.children[i].children[0].classList.contains("bg-primary")==false) {
            parentLi.children[i].children[0].classList.add("d-none")
        }else{
            parentLi.children[i].children[0].classList.remove("d-none")

        }
    }
}
let triAFaire=()=>{
    for (let i = 0; i < parentLi.children.length; i++) {
        if (parentLi.children[i].children[0].classList.contains("bg-primary")==true) {
            parentLi.children[i].children[0].classList.add("d-none")
        }else{
            parentLi.children[i].children[0].classList.remove("d-none")
        }
    }
}
let triAllTask=()=>{
    for (let i = 0; i < parentLi.children.length; i++) {
        if (parentLi.children[i].children[0].classList.contains("bg-primary")==true || parentLi.children[i].children[0].classList.contains("d-none")==true ) {
            parentLi.children[i].children[0].classList.remove("d-none")
        }else{}
    }
}
done.addEventListener("click",triDone);
aFaire.addEventListener("click",triAFaire);
allTask.addEventListener("click",triAllTask);







