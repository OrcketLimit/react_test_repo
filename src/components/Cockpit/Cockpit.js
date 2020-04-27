import React, { useEffect } from "react";
import classes from "../../containers/App.css";

const Cockpit = props => {
  useEffect(() => {
    // Hook combining didUpdate and didMount
    // Runs when a component is created or renderred.
    console.log("[Cockpit.js] useEffect");
    // A http request can be done here.
    //setTimeout(() => {
    //  alert("saved data to an api");
    //}, 1000);
  }, [props.persons]); //monitor the persons array.

  useEffect(() => {
    // Hook combining didUpdate and didMount
    // Runs when a component is created or renderred.
    console.log("[Cockpit.js] useEffect");
    // A http request can be done here.
    setTimeout(() => {
      alert("first time alert");
    }, 1000);
  }, []); // [] This is a one shot

  const AssignedClasses = [];

  const divStyle = {
    visibility: props.persons.length < 4 ? " hidden" : "visible"
  };

  if (divStyle.visibility === "hidden") {
    AssignedClasses.push(classes.red);
  } else if (divStyle.visibility === "visible") {
    AssignedClasses.push(classes.bold);
  }

  return (
    <div>
      <h1>{props.nameTitle}</h1>
      <p className={AssignedClasses}>Another piece</p>
    </div>
  );
};

export default Cockpit;
