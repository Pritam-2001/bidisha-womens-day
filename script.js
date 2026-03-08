function startSurprise(){

document.querySelector(".opening").style.display="none";
document.getElementById("main").style.display="block";

document.getElementById("music").play();

flowers();
hearts();
typeMessage();
slideshow();

}

function flowers(){

let flowers=["🌹","🌻","🌷"];

for(let i=0;i<30;i++){

let flower=document.createElement("div");

flower.className="flower";
flower.innerHTML=flowers[Math.floor(Math.random()*3)];

flower.style.left=Math.random()*100+"%";
flower.style.animationDuration=(Math.random()*3+3)+"s";

document.body.appendChild(flower);

}

}

function hearts(){

for(let i=0;i<30;i++){

let heart=document.createElement("div");

heart.className="heart";
heart.innerHTML="💗";

heart.style.left=Math.random()*100+"%";
heart.style.animationDuration=(Math.random()*3+3)+"s";

document.body.appendChild(heart);

}

}

function typeMessage(){

let text="Happy Women's Day Bidisha. You are strong, beautiful, kind and the most special person in my life. Every moment with you feels like flowers blooming in my heart. Thank you for being you.";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("message").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

}

function slideshow(){

let slides=document.querySelectorAll(".slide");

let index=0;

setInterval(()=>{

slides[index].classList.remove("active");

index=(index+1)%slides.length;

slides[index].classList.add("active");

},3000);

}

window.addEventListener("scroll",function(){

let flowers=document.querySelectorAll(".flower-item");

flowers.forEach(flower=>{

let position=flower.getBoundingClientRect().top;

let screenHeight=window.innerHeight;

if(position < screenHeight - 50){

flower.classList.add("bloom");

}

});

});