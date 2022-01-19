import {addTask} from './_functions.js'


let parentLi = document.getElementsByClassName("parentLi")[0];
let addbtn = document.getElementsByClassName("addBtn")[0];
let toDoInput = document.getElementsByClassName("toDoInput")[0];
let btnClear = document.getElementsByClassName("btnClear")[0];


//Ecouteurs d'évenements
addbtn.addEventListener("click", () => {
    addTask(parentLi,toDoInput)
})
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
let clearAllTask=()=>{
    let y=window.confirm("Are you sure you want to delete your list?")
    if (y===true) {
        for (let i = 0; i < parentLi.children.length; i++) {
            parentLi.children[i].remove(parentLi.children[i])
            i--
        }
    }else{}
    
}
done.addEventListener("click",triDone);
aFaire.addEventListener("click",triAFaire);
allTask.addEventListener("click",triAllTask);
btnClear.addEventListener("click",clearAllTask);







