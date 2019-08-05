import React from "react";
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
    num_comments: 8,
    points: 2,
    objectID: 1
  }
];

function App() {
  let user = {
    firstName: "Tamal",
    lastName: "Sen"
  };

  const listItems = list.map((item => 
    <div className="item-single">
      <p>{item.title}</p>
      <p>{item.author}</p>
      <p>{item.num_comments}</p>
      <p>{item.points}</p>
    </div>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <p>Hey {user.firstName}! Here is your list.</p>
        {listItems}
      </header>
    </div>
  );
}

export default App;
