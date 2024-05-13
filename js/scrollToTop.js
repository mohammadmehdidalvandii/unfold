const btn = document.querySelector("#btn_top")

 function toggleVisible (){
    if(window.scrollY > 200){
        btn.style.display = 'flex'
    } else{
        btn.style.display = 'none'
    }
}


export function scrollToTop(){

        if(window.scrollY > 200){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
}

btn.addEventListener("click" , scrollToTop)
window.addEventListener("scroll" ,toggleVisible)