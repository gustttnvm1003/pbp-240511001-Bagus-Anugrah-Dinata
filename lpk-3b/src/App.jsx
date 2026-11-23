import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import "./App.css";

export default function App() {
  // Load dari localStorage saat inisialisasi state agar tidak tertimpa saat mount/StrictMode
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todos")) || [];
    } catch {
      return [];
    }
  });

  // Simpan ke localStorage saat todos berubah
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const tambah = (teks) => {
    setTodos((prev) => [...prev, { id: Date.now(), teks, selesai: false }]);
  };

  const hapus = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t))
    );
  };

  return (
    <div className="app">
      <h1>📝 To-Do List React</h1>
      <TodoForm onTambah={tambah} />
      <TodoStats todos={todos} />
      <TodoList todos={todos} onHapus={hapus} onToggle={toggle} />
    </div>
  );
}
