import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    title: "The Road to Learn React",
    author: "Someone Famous",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    author: "Dan Abramov",
    num_comments: 18,
    points: 2,
    objectID: 1
  }
];

function isSearched(searchTerm) {
  return function (item) {
    // some conditions here
  }
}


//function App() {
class App extends Component {

  constructor(props) {
    super(props);

    let searchTerm = '';
    /*     this.state = {
          list: list,
        } */
    // Same as above 

    this.state = {
      list: list,
      searchTerm: '',
    }
    // we won't need to use the bind method if we use onDismiss = (id) =>
    //    this.onDismiss = this.onDismiss.bind(this);
  }

  // Class methods can be auto-bound using JavaScript ES6 arrow functions:
  onDismiss = (id) => {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  /*   onDismiss(id) {
      const updatedList = this.state.list.filter(item => item.objectID !== id);
      this.setState({ list: updatedList });
    }
   */


  render() {
    let user = {
      firstName: "Tamal",
      lastName: "Sen"
    };

    const listItems = this.state.list.map(item =>
      <div key={item.objectID}>
        <p>{item.title}</p>
        <p>{item.author}</p>
        <p>{item.num_comments}</p>
        <p>{item.points}</p>
        <span>
          <button onClick={() => this.onDismiss(item.objectID)}
            // this.onDismiss(item.objectID) << This is best thing to use for now 
            type="button"
          >
            Dismiss
          </button>
        </span>
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <p>Hey {user.firstName}! Here is your list.</p>
          <form>
            <input type="text" onChange={this.onSearchChange}/>
          </form>
          {listItems}
        </header>
      </div>
    );
  }
}

export default App;
