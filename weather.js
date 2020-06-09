const apikey = "9e8ce2789c2d79d43ecff3bf6c73fe26";
const datess = document.querySelector(".js-date");
const coords = "coords";

function getweather(lat, log) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${apikey}&units=metric`
    ).then(function (respond) {
        return respond.json()
    }).then(function (json) {
        console.log(json);
        const temper = json.main.temp;
        const place = json.name;
        datess.innerHTML = `${place}의 날씨는 ${Math.floor(temper)}도 이군..ㅎ`
    });




}

function success(position) {
    const latit = position.coords.latitude;
    const longit = position.coords.longitude;
    const obje = {
        latitiud: latit,
        longitude: longit
    }
    localStorage.setItem(coords, JSON.stringify(obje))
    getweather(latit, longit);
}

function errorss() {

}


function askco() {
    navigator.geolocation.getCurrentPosition(success, errorss);
}


function loadco() {
    const loadcoor = localStorage.getItem(coords);
    if (loadcoor === null) {
        askco();
    } else {
        const imsi = JSON.parse(loadcoor);
        getweather(imsi.latitiud, imsi.longitude);
    }
}


function init() {
    loadco();
}

init();