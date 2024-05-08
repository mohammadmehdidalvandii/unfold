let buttonMenu = document.querySelector("#navbar_btn");
let navbarIcon = document.querySelector("#navbar_icon");
let navbarMenu = document.querySelector("#navbar_menu");


export function handlerMenuNavbar(){
    if(navbarIcon.classList.contains('fa-bars')){
        navbarIcon.classList.remove("fa-bars")
        navbarIcon.classList.add('fa-times')
        navbarMenu.style.top = "5rem"
    } else{
        navbarIcon.classList.remove('fa-times')
        navbarIcon.classList.add("fa-bars")
        navbarMenu.style.top = '-50rem'
    }
}


buttonMenu.addEventListener("click" , handlerMenuNavbar);

