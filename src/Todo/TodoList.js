import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const style = {
  listStyle: "none",
  margin: '1rem 0',
};

function TodoList(props) {
  return (
    <ul style={style}>
      {props.todos.map((todo, i) => {
        return <TodoItem key={todo.id}
          todo={todo}
          index={i}
          onChange={props.onToggle}/>;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object.isRequired),
  onToggle: PropTypes.func.isRequired
};

export default TodoList;
