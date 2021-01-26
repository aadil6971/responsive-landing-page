
// ====== SHOW MENU  Y HIDDEN ===== 
const  navMenu = document.getElementById('nav-menu'),
       toggleMenu = document.getElementById('nav-toggle'),
       closeMenu = document.getElementById('nav-close'),
       cover = document.getElementById("cover")

// SHOW
console.log(toggleMenu);
toggleMenu.addEventListener('click',function(){
    navMenu.classList.toggle("show");
    cover.classList.toggle("cover_show");
})

// HIDDEN
closeMenu.addEventListener('click',function(){
    navMenu.classList.remove("show");
    cover.classList.remove("cover_show")
})
cover.addEventListener('click',function(){
    console.log("hello");
    navMenu.classList.remove("show");
    cover.classList.remove("cover_show")
})
// ====== MOUSEMOVE HOME IMAGE ========
document.addEventListener('mousemove',move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/120;
        const y = (window.innerHeight - e.pageY*speed)/120;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}

// ========= GSAP Animation =========

//NAV 
gsap.from('.nav__logo, .nav__toggle',{opacity:0,duration:1,delay:1,y:10})
gsap.from('nav__item',{opacity:0, duration:1, delay:1.1, y:30, stagger:0.2})
//HOME
gsap.from('.home__title',{opacity:0, duration:1, delay:0.9, y:30})
gsap.from('.home__description',{opacity:0, duration:1, delay:0.9, y:30})
gsap.from('.home__button',{opacity:0, duration:1, delay:1.1, y:30})

