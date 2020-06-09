const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const user = "currentUser"
const showing = "showing"

function saveName(name) {
    localStorage.setItem(user, name)
}

function handleSubmit(event) {
    event.preventDefault();

    console.log(input.value)
    saveName(input.value)
    painting(localStorage.getItem(user));

}

function ask() {
    form.classList.add(showing);
    form.addEventListener("submit", handleSubmit);
}

function painting(text) {
    form.classList.remove(showing);
    greeting.classList.add(showing);

    greeting.innerHTML = `아령하세요~ ${text}님`;
}

function loadName() {
    const cuser = localStorage.getItem(user);
    if (cuser === null) {
        ask();

    } else {

        painting(cuser);
    }
};

function inti() {
    loadName();
}

inti();