const menuOpen = document.querySelector('.menu-open');
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



let item;

item = document.querySelector(`.item`)
 console.log(item)


 item = document.querySelector('.item')

 item.addEventListener('click', function(event){
     console.log(item)
 })






