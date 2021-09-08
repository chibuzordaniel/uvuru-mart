let menuOpen = document.querySelector('.menu-open');
let menuClose = document.querySelector('.menu-close');
let dropDown = document.querySelector('.drop-down');

menuOpen.addEventListener('click', clickOpen);
menuClose.addEventListener('click', clickClose)


function clickOpen () {
    menuOpen.style.display="none"
    menuClose.style.display="block"
    dropDown.style.display="block"
};

function clickClose () {
    menuOpen.style.display="block"
    menuClose.style.display="none"
    dropDown.style.display="none"
}

// dropDown

let icons = document.querySelector('.icons');
let mp3 = document.querySelector('.mp3');
let frame = document.querySelector('#frame');


icons.addEventListener('click', clickOpen);
mp3.addEventListener('click', clickClose);


function clickOpen() {
    icons.style.display="none"
    mp3.style .display= "block"
    frame .style.display="block"

}


function clickClose() {
    icons.style.display="block"
    mp3.style.display= "none"
    frame.style.display="none"
}
