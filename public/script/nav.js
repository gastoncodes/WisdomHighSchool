const closebtn = document.querySelector('.closebtn-nw')

const openbtn = document.querySelector('.openbtn-nw')

const sidenav = document.querySelector('.nav-linking-nw')

var  dropdown = document.querySelector('.dropdown-nw')
var  dropdown1 = document.querySelector('.dropdown1-nw')

const mainbody = document.querySelector('.mainbody')
const mainbody1 = document.querySelector('.mainbodyapply')

var i;

const dropdowncontainer = document.querySelector('.dropdowncontainer-nw')
const dropdowncontainer1 = document.querySelector('.dropdowncontainer1-nw')

openbtn.addEventListener('click',()=>{
    // sidenav.style.width='200px';
    sidenav.style.display='block';
    openbtn.style.display='none';
    closebtn.style.display='block';
    mainbody.style.display='none'
    mainbody1.style.display='none'
})

closebtn.addEventListener('click',()=>{
    // sidenav.style.width='0px'
    sidenav.style.display='none'
    closebtn.style.display='none'
    openbtn.style.display='block'
    mainbody.style.display='block'
})

// dropdown.addEventListener('click',()=>{
//    if(dropdowncontainer.style.display === 'none'){
//     dropdowncontainer.style.display = 'block'
//    }else{
//     dropdowncontainer.style.display = 'none'
//    }
    
// })
// dropdown1.addEventListener('click',()=>{
//    if(dropdowncontainer1.style.display === 'none'){
//     dropdowncontainer1.style.display = 'block'
//    }else{
//     dropdowncontainer1.style.display = 'none'
//    }
    
// })

