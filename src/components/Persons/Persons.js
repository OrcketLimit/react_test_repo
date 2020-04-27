import React, { Component } from "react";

import Person from "./Person/person";
import PersonInput from "./Person/PersonInput";

class Persons extends Component {
  state = {
    test: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps:" + JSON.stringify(props));
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Person.js] shouldComponentUpdate");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate");
    // This is the message being
    // passed into the message param
    return { message: "snapshot-before-upd" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Person.js]  componentDidUpdate");
    console.log("[Person.js]  snapshot:" + JSON.stringify(snapshot));
  }

  //Note: this will not get called the coponent is just a container for o
  componentWillUnmount() {
    console.log("[Person.js]  componentWillUnmount");
  }

  /* Old lifecycle hook which I just checked.
		componentWillUpdate(){
			console.log("[Person.js] componentWillUpdate")
		}*/

  render() {
    console.log("[Persons.js] inside a Render()");
    return this.props.person_array.map((item, index) => {
      console.log("Index item is:" + index);

      return (
        <Person
          name={item.name}
          id={index}
          age={item.age}
          click={this.props.click}
          onchange={this.props.NameChangedHandle}
        />
      );
    });
  }
}

export default Persons;
export { PersonInput };
