import React from "react";


function PomButton (props) {
    return (
        <div className="startTimer">
                <button onClick={props.start}>START TIMER</button>
                <button  onClick={props.reset}>RESET</button>
        </div>
    );
}

export default PomButton;