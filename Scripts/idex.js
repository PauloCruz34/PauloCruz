const navbar = document.querySelector('.navbar');
const mobileNavbar= document.querySelector('.navbar__Mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click',function(){
    mobileNavbar.classList.toogle('active');
    });

window.addEventListener('scroll',function(){
    if(this.window.pageYOffset>0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});

