import React, { useEffect, useState } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from "./shared/Loader";
import Modal from './Modal/Modal';

const AddTodo = React.lazy(() => import("./Todo/AddTodo"));

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => response.json())
      .then(todos => {
        setTodos(todos);
        setLoading(false);
      });
  }, []);

  const toggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = title => {
    setTodos(
      todos.concat([
        {
          title,
          completed: false,
          id: Date.now()
        }
      ])
    );
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Try React App</h1>

        <Modal/>

        <React.Suspense fallback={<p>Load...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <strong>No todos!</strong>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
