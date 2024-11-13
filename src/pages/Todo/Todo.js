import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  // Add or Update Todo
  const handleAddOrUpdate = () => {
    if (isEditing) {
      // Update the existing todo
      setTodos(
        todos.map((todo) =>
          todo.id === currentTodoId ? { ...todo, title, body } : todo
        )
      );
      setIsEditing(false);
      setCurrentTodoId(null);
    } else {
      // Add new todo
      const newTodo = {
        id: Date.now(),
        title,
        body,
      };
      setTodos([...todos, newTodo]);
    }
    setTitle("");
    setBody("");
  };

  // Edit Todo
  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setTitle(todoToEdit.title);
    setBody(todoToEdit.body);
    setIsEditing(true);
    setCurrentTodoId(id);
  };

  // Delete Todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="input-container">
        <input
          type="text"
          placeholder="TITLE"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="BODY"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button onClick={handleAddOrUpdate}>
          {isEditing ? "Update" : "Add"}
        </button>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <button onClick={() => handleEdit(todo.id)}>Update</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
