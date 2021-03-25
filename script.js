// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var time;
var timer_on;
var counter;
var pattern;
var clueHoldTime = 1000;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  
var guessCounter = 0;
var mistakes; 

function timer()
{
  time=time-1;
  if (timer_on){
    return;
  }
  if (time <= -1)
  {
     clearInterval(counter);
     stopGame();
     alert("Out of time. You're dead.");
     return;
  }
  document.getElementById("timer").innerHTML=time + " secs";
}
function getRandom(val){
  return (Math.floor(Math.random() * Math.floor(val)) + 1);
}
function generatePattern(){
  var i;
  pattern = []; 
  for (i = 0; i<5; i++){
    pattern.push(getRandom(6));
  }
}

function startGame(){
    //initialize game variables
    counter=setInterval(timer, 1000);
    progress = 0;
    mistakes = 3;
    time = 46;
    timer_on = false;
    gamePlaying = true;
    clueHoldTime = 1000;
    generatePattern();
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    time = 46;
    clearInterval(counter);
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 50;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]){
    if(progress == guessCounter){
      if(guessCounter == pattern.length-1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
    
  }
  else{
    if (mistakes != 0){
      alert("You have " + mistakes + " chances remaining... Use them wisely.");
      mistakes--;
    }
    else{
      loseGame();
    }
  }

}

function loseGame(){
  stopGame();
  alert("Game Over. You're dead.");
}
function winGame(){
  stopGame();
  alert("I guess you can live this time...");
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 215,
  3: 230,
  4: 250,
  5: 270,
  6: 300
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)