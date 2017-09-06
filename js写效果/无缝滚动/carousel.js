var oul = document.querySelector('ul')
var oli = document.querySelector('ul>li')
var lis = document.getElementsByTagName('li')


var speed = -1;
var timer;

oul.innerHTML+=oul.innerHTML;
oul.style.width = lis[0].offsetWidth * lis.length + 'px'

function setTimer(){
    return setInterval(function(){
        oul.style.left = oul.offsetLeft + speed + 'px'
    
        if(oul.offsetLeft <= - oul.offsetWidth/2){
            oul.style.left = 0+'px'
        }else if(oul.offsetLeft>0){
            oul.style.left = -oul.offsetWidth/2+'px'
        }
    },20)
}
timer = setTimer()
oul.onmouseover = function(e){
    clearInterval(timer)
    if(e.target.tagName == 'IMG'){
    e.target.style.height = 220+'px';
    e.target.style.width = 220+'px';
    oul.style.width = oul.offsetWidth+20+'px'
    }
}
oul.onmouseout = function(e){
    timer = setTimer()
    if(e.target.tagName == 'IMG'){
        e.target.style.width = 200+'px';
        e.target.style.height = 200+'px';
        oul.style.width = oul.offsetWidth-20+'px'
    }
}

function click1(){
    clearInterval(timer)
    speed = 1
    timer = setTimer()
}
