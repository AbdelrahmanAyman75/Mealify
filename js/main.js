
let Up = document.querySelector('.up');
let Nave= document.querySelector("#navbar")
let NaveItems = document.querySelector(".nav-item")
const toggleButton = document.getElementById('dark-mode-toggle');


window.onscroll=function(){
    // up scroll
    if (this.scrollY >= 1000){
        Up.classList.add("show")
    }else{
        Up.classList.remove('show')
    }
////////change nav scroll
    if(this.scrollY >=300){
        Nave.classList.replace("bg-body-tertiary" ,"bg-nave")
        Nave.classList.add("scrolled")
    }else{
        Nave.classList.replace("bg-nave","bg-body-tertiary")
        Nave.classList.remove("scrolled")

    }

};

Up.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
};


  


