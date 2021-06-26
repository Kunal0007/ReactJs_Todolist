import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import IntputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <IntputArea button={addItem} />
      <div>
        <ul>
          {items.map((todoItem, id) => (
            <ToDoItem key={id} index={id} item={todoItem} delete={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
