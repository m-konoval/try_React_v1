import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "./../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: ".5rem",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "3px"
  },
  input: {
    margin: "0 .5rem"
  }
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  let classes = [];
  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li} className={classes.join(" ")}>
      <span>
        <strong>{index + 1}: </strong>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <span>{"todo " + todo.title}</span>
      </span>
      <button className="rm" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
