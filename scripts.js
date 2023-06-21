

function resume(){
    window.open("https://drive.google.com/file/d/1ni1nuqFHY5xdZhr6Fm9f2ffHe4-ONIuP/view?usp=sharing","_blank");
}

function resume2(){
    window.open("https://drive.google.com/file/d/1ni1nuqFHY5xdZhr6Fm9f2ffHe4-ONIuP/view?usp=sharing","_blank");
}

let gitimages = document.querySelectorAll(".github img")
for(let elem of gitimages){
    elem.addEventListener("click",()=>{
        window.open("https://github.com/abhithemauryas","_blank")
    })
}

let scrollarea = document.querySelector(".scrollarea");

let menu = document.querySelector(".menu");
let anchors = document.querySelectorAll(".nav>div:nth-child(3) a");
let anchordiv = document.querySelector(".nav>div:nth-child(3)>div")
menu.addEventListener("click",()=>{
    if(anchordiv.style.display == "none"){
         anchordiv.style.display = "block";
    }
    else{
        anchordiv.style.display = "none";
    }
})

let divs = document.querySelectorAll(".scrollarea>div:not(.nav)")
for(let elem of divs){
    elem.addEventListener("click",()=>{
        if(window.innerWidth < 820){
            for(let elem of anchors){
                anchordiv.style.display = "none"
            }
        }
    })
}

for(let elem of anchors){
    elem.addEventListener("click",()=>{
        if(window.innerWidth < 820){
            anchordiv.style.display = "none";
        }
    })
}


if(window.innerWidth < 870){
    document.querySelector(".gmail").innerText = "a...@gmail.com"
}

document.querySelector('.home-section>div>img').addEventListener('click',() => {
    window.location.href = "https://abhithemauryas.gthub.io#about"
})
