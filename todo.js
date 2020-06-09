const todo = document.querySelector(".js-todo");
const tinput = todo.querySelector("input");
const tlist = document.querySelector(".js-list");
const btsfan = document.querySelector(".js-bts")
const todos = "todos";
let halil = [];
const hals = "halil"




function deletess(event) {
    //halil = localStorage.getItem("halil");
    console.log(halil);
    const btn = event.target.parentNode;
    tlist.removeChild(btn)
    let clean = halil.filter(function (hals) {

        return hals.number !== parseInt(btn.id);

    });
    console.log(clean);
    halil = clean;
    localStorage.setItem("halil", JSON.stringify(halil))
    //loadToDo();
    //init();
    //halil = localStorage.getItem("halil");

}


function lalala(hals) {
    painting(hals.thing);
}


function painting(thing) {
    console.log("왜 일로와?");
    const li = document.createElement("li");
    const del = document.createElement("button");
    del.innerHTML = "다해따!";
    del.addEventListener("click", deletess)
    const span = document.createElement("span");
    span.innerHTML = thing;
    span.classList.add("hing");
    li.appendChild(span);
    li.appendChild(del);
    li.id = halil.length + 1;
    //li.classList.add("hing")
    tlist.appendChild(li);
    const todoob = {
        thing: thing,
        number: halil.length + 1
    }
    halil.push(todoob);
    localStorage.setItem("halil", JSON.stringify(halil))
}
function handling(event) {
    //event.preventDefault();
    const currentval = tinput.value;
    painting(currentval);
    tinput.value = "";
    //return currentval;

}

function loadToDo() {
    const todoss = localStorage.getItem("halil");
    if (todoss === null) {

    } else {
        const hal = JSON.parse(todoss)
        hal.forEach(lalala);
    }
}


function init() {

    loadToDo();
    //todo.removeEventListener("submit");
    btsfan.addEventListener("click", handling)


}

init();