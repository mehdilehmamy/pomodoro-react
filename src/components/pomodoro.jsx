import React, {useState} from "react";
import Analog from "./analog";
import PomButton from "./button";



var interval;
var clicked = false;

function Pomodoro() {


const [time, setTime] = useState("25 : 00");

function start (){
  if (clicked === false) {
    clicked = true;
    var minute = 24;
    var sec = 59;
    interval = setInterval(function() {
    setTime(minute + " : " + sec);
    sec--;
    if (sec < 10) {
      sec = "0" + sec;
      if (sec === "00" ) {
        setTimeout(function(){ sec = 59; minute-- ;}, 1000);
        if (minute < 10) {
        minute = "0" + minute;
        if (minute === 0) {
          reset();
        } 
    }
  }
    }
}, 1000);
  } 
}

function reset () {
  clicked = false;
  var minute = 25;
  var sec = "00";
  setTime(minute + " : " + sec);
  clearInterval(interval);
}


  return <div>
            <div className="display">
                <Analog text={time}/>
            </div>
            <PomButton start={start} reset={reset} />
          </div>
}

export default Pomodoro;

