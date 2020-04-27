import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit.js";
import { PersonInput } from "../components/Persons/Persons";

class App extends Component {
  // Creation Lifecycle hook 1
  constructor(props) {
    console.log("Component constructor called");
    super(props);
    this.myref = React.createRef();
  }
  /* This method exists for rare use cases where the state depends 
     on changes in props over time. For example, it might be handy
     for implementing a <Transition> component that compares
     its previous and next children to decide which of 
     them to animate in and out.               
                         */
  // Creation Lifecycle hook + updated props
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps:" + JSON.stringify(props));
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  state = {
    person_array: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stef", age: 31 }
    ],
    times: 0,
    hidden: false,
    cached_value: ""
  };

  componentDidUpdate() {
    console.log("[App.js]  componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[App.js]  componentWillUnmount");
  }

  ButtonClickHandler = id => {
    // Some spread and rest magic
    this.setState({
      person_array: this.state.person_array
        .slice(0, id)
        .concat(
          this.state.person_array.slice(id + 1, this.state.person_array.length)
        )
    });
    console.log(
      "Button Clicked" + this.state.times + " visibility:" + this.state.hidden
    );
  };
  NameChangedHandle = (event, id) => {
    let item = [...this.state.person_array];
    item[id] = { name: event.target.value, age: 28 };

    this.setState({ person_array: item });
  };
  addItemHandler = () => {
    console.log("addItemHandler :" + this.state.cached_value);
    let item = [
      ...this.state.person_array,
      { name: this.state.cached_value, age: 39 }
    ];
    this.setState({ person_array: item });
  };

  updateCachedValue = input => {
    console.log("updateCachedValue");
    this.setState({ cached_value: input });
  };

  render() {
    const divStyle = {
      visibility: this.state.hidden ? "hidden" : "visible"
    };

    return (
      <div className="App">
        <Cockpit
          nameTitle={this.props.nameTitle}
          persons={this.state.person_array}
        />

        <PersonInput
          inputHandler={this.updateCachedValue}
          handler={this.addItemHandler}
          buttonName="Add new entry"
        />
        <button
          className={classes.Button}
          onClick={this.ButtonClickHandler.bind(this, "Maxi!")}
        >
          Switch Name : {this.state.times}
        </button>

        <div style={divStyle}>
          <Persons
            person_array={this.state.person_array}
            click={this.ButtonClickHandler}
            NameChangedHandle={this.NameChangedHandle}
          />
        </div>
      </div>
    );

    //return React.createElement("div",{className:"App"},React.createElement("h1",null,"How about now?"))
  }
}

export default App;
