// "use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}
// return Array.from(a)}var playing=!0,
// timer=function(){return setInterval(function()
//     {var a=document.getElementById("counter"),
//     b=parseInt(a.innerText);a.innerText=b+1},
//     1e3)
// },
// interval=timer(),minus=document.getElementById("minus"),
// plus=document.getElementById("plus"),
// heart=document.getElementById("heart"),
// pause=document.getElementById("pause"),
// commentForm=document.getElementsByTagName("form")[0];


// minus.addEventListener("click",function(){
//     var a=document.getElementById("counter"),
//     b=parseInt(a.innerText);
//     a.innerText=b-1}),

// plus.addEventListener("click",function(){
//     var a=document.getElementById("counter"),
//     b=parseInt(a.innerText);
//     a.innerText=b+1}),
        
        
// heart.addEventListener("click",function(){
//     var a=document.getElementById("counter"),
//     b=parseInt(a.innerText),
//     c=document.querySelector(".likes"),
//     d=void 0;
//     if([].concat(_toConsumableArray(c.children)).map(function(a)
//     {return parseInt(a.dataset.num)}).includes(b))
//     {d=document.querySelector('[data-num="'+b+'"]');
    
// var e=parseInt(d.children[0].innerText);

// d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}
// else(d=document.createElement("li")).setAttribute("data-num",b),d.innerHTML=b+" has been liked <span>1</span> time",c.appendChild(d)}),pause.addEventListener("click",function()
// {playing?(playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})}),commentForm.addEventListener("submit",function(a){a.preventDefault();var b=this.children[0],c=b.value;b.value="";var d=document.querySelector(".comments"),e=document.createElement("p");e.innerText=c,d.appendChild(e)});

const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const likes = document.querySelector('ul.likes')
const comment_form = document.querySelector('#comment-form')
const comments = document.querySelector('#list')

let paused = false
let numberTracker = {}
let interval = setInterval(incrementCounter, 1000)

plus.addEventListener("click", incrementCounter)
minus.addEventListener("click", decrementCounter)
pause.addEventListener("click", togglePaused)
heart.addEventListener("click", addLike)
comment_form.addEventListener("submit", handleSubmit)

function incrementCounter(event){
counter.innerText = parseInt(counter.innerText) + 1
}


function decrementCounter(){
   counter.innerText = parseInt(counter.innerText) - 1
}
function togglePaused(){
  paused = !paused
  if (paused) {
    clearInterval(interval)
    pause.innerText = "resume"
  } else {
    interval = setInterval(incrementCounter, 1000)
    pause.innerText = "pause"
  }
}
function addLike(){
  let second = counter.innerText
  numberTracker[second] = numberTracker[second] || 0
  numberTracker[second] += 1
  renderLikes()
}
function renderLikes(){
  likes.innerHTML = ""
  for (let key in numberTracker){
    const li = document.createElement("li")
    li.innerText = `${key} has been liked ${numberTracker[key]} times.`
    likes.append(li)
  }
}
function handleSubmit(event){
  event.preventDefault()
  const comment = event.target.querySelector("input").value
  // const comment = event.target.comment.value
  // console.log(event.target.elements);
  const li = document.createElement("li")
  li.innerText = comment
  comments.append(li)
  event.target.reset()
}