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


alert('Welcome To Uvuru Fast Grocery Delivery')

// let item;

// item = document.querySelector(`.item`)
//  console.log(item)


//  item = document.querySelector('.item')

//  item.addEventListener('click', function(event){
//      console.log(item)
//  })


 document.getElementById('items').addEventListener
 ('click', loadTxt);

 function loadTxt(){
     fetch('data.txt')
     .then(function(response){
         return response.text();
     })

     .then(function(data){
         console.log(data)
         document.getElementById('pink').innerHTML = data;

     })
   
 }
 

 






