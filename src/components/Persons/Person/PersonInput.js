import React from "react";
import "./PersonInput.css";

const personInput = props => {
  return (
    <div>
      <input
        onChange={event => props.inputHandler(event.currentTarget.value)}
        className={props.inputClass}
      />
      <div>
        <button onClick={props.handler} className={props.ButtonClass}>
          {props.buttonName}
        </button>
      </div>
    </div>
  );
};

export default personInput;
