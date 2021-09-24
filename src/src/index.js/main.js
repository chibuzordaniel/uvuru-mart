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


// const contentitem = document.querySelector('.content-item')
// framecontentitem = document.querySelector('.item')

// loadEvenListeners();

// function loadEvenListeners(){
//     contentitem.addEventListener('click', items)
// }


// function items(e) {
//     e.preventDefault();
//     if(e.target.classList.contains('mapo')){
//         const contentitem = e.target.parentElement.parentElement;

//         getcontentitemInfo(contentitem)
//     }
// }


// function getcontentitemInfo(contentitem) {

//        const contentitemInfo = {
//            item: contentitem.querySelector('.item svg'),
//            masu: contentitem.querySelector('.masu'),
//            masu: contentitem.querySelector('.masu '),
//            masu: contentitem.querySelector('.masu span svg'),
//            mapo:  contentitem.querySelector('.mapo'),
//        }
//        console.log(contentitemInfo)
// }

// function mapo(contentitem) {

//     const content = document.createElement('item');

//     content.innerHTML = `
//     <div class="item">
//             <h1>${contentitem.root}<h1/>
//             <p>${contentitem.masu}<p/>
//             <p>${contentitem.root}<p>
//             <p>${contentitem.note}<p>
            
         
//        <div/>
    
//     `;
//     framecontentitem.appendChild(content)
// }



function