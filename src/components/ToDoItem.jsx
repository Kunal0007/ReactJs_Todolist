import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        return props.delete(props.index);
      }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
