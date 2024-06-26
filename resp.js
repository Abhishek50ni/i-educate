let burger=document.querySelector('.burger')
let navbar=document.querySelector('.navbar')
let ul=document.querySelector('ul')
let logo=document.querySelector('.logo')
let searchbar=document.querySelector('.searchbar')
// console.dir(burger);
// console.dir(navbar);
burger.addEventListener('click',()=>{
    ul.classList.toggle('v-class-resp');
    logo.classList.toggle('v-class-resp');
    searchbar.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
});
