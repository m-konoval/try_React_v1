import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState("");

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(""),
    value: () => value
  };
}

function AddTodo({ onCreate }) {
  const { bind, clear, value } = useInputValue("");

  const submitHandler = event => {
    event.preventDefault();

    if (value().trim()) {
      onCreate(value());
      clear();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" {...bind} />
      <button>Add</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
};

export default AddTodo;
