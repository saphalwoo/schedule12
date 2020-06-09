const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML =
        `${hours < 10 ? `0${hours}` : hours}:
        ${minute < 10 ? `0${minute}` : minute}:
        ${seconds < 10 ? `0${seconds}` : seconds}`
};

function init() {
    getTime();
    setInterval(getTime, 1000)
};

init();