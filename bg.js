const body = document.querySelector("body");






function paintingsss(nos) {

    const newi = new Image();

    //newi.source = `imsgs/${nos + 1}.jpg`;
    newi.src = `imsgs/${nos + 1}.jpg`;
    newi.classList.add("bgimage");

    body.prepend(newi);
    console.log("dsf");


}


function genr() {
    const numbers = Math.floor(Math.random() * 3);
    return numbers;
}

function init() {
    const randoms = genr();
    paintingsss(randoms);

};

init();