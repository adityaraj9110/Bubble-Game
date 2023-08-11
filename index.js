var timer = 60;
var score = 0;
const makeBubble = () => {
  var clutter = "";
  for (let i = 1; i <= 180; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div id="circle">${rn}</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
};
const increaseTimer = () => {
  var timeout = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timeout);
      document.querySelector("#pbottom").innerHTML = `Your Score is ${score} . Please refresh to restart the game.`
    }
  }, 1000);
};
const genrateHit = () => {
  var rn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = rn;
};
const genrateScore = () => {
  
  document.querySelector("#score").textContent = score;
  score += 10;
};
// Event Bubbling
// jab hm kisi child element pe click krte hai tb ek even raise hota hai us child element pe aur phir vo event check hota hai us child ke parent ke parent pe

const gameLogic = () => {
    var par = document.querySelector("#pbottom");
    par.addEventListener("click",(e)=>{
        console.log(e.target) 
        // it gives the element on which the event occur
        // console.log(e.currentTarget) it gives the element on which the event has applied
        var bubble = e.target;
        var hit = document.querySelector("#hit");
        if(bubble.textContent===hit.textContent){
            genrateScore();
            makeBubble();
        }
    })
};
makeBubble();
increaseTimer();
genrateHit();
genrateScore();
gameLogic();
