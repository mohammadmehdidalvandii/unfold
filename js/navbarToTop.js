const navbar = document.getElementsByClassName("navbar")

export const navbarFixedToTop = ()=>{
    const currentScroll = window.scrollY;
    if(currentScroll > 120){
        for(let i = 0 ; i < navbar.length ; i++){
            navbar[i].style.position = "fixed";
            navbar[i].style.top = '0'
            navbar[i].style.zIndex = '99999'
        }
    }else{
        for(let i = 0 ; i < navbar.length ; i++){
            navbar[i].style = 'none'
        }
    }
}

window.addEventListener("scroll" , navbarFixedToTop)
