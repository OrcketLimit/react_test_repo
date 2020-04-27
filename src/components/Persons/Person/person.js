import React, { Component } from "react";
import "./Person.css";
import styled from "styled-components";

const StyleDiv = styled.div`
  .Person {
    width: 60%;
    margin: auto;
    border: 1px solide #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
  }

  "@media (min-width:500px)": {
    width: "650px";
  }
`;

class person extends Component {
  /*	const style = {
		'@media (min-width:500px)':{
			width: "450px"
		}
		
	}*/

  componentWillUnmount() {
    console.log("[person.js]  componentWillUnmount");
  }

  render() {
    return (
      //<div className="Person" style={style}>
      <StyleDiv>
        <p
          onClick={() => {
            this.props.click(this.props.id);
          }}
        >
          I am a {this.props.name} who is {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={event => {
            this.props.onchange(event, this.props.id);
          }}
          value={this.props.name}
          id={this.props.id}
        />
        >
      </StyleDiv>
    );
  }
}

export default person;
