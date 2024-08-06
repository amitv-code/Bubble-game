
var hitrn = 0;
var score = 0;

var timer = 60;



function makebubble(){
    var clutter = "";

for(var i = 1; i <= 85; i++){
   hitrn = Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${hitrn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

makebubble();


function runtimer(){
    var timerint = setInterval(function(){
        if(timer > 0) 
            {timer--;
        document.querySelector("#timerval").textContent = timer;}
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
        }
    }, 1000);
}

runtimer();



function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

getnewhit();





function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


increasescore();



document.querySelector("#pbtm")
.addEventListener("click", function(details){
    var clickednum = (Number(details.target.textContent));
    if (clickednum === hitrn){
        increasescore();
        makebubble();
        getnewhit();
    }
});
