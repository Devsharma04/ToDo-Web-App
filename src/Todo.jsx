import React, { useState } from "react";
import Card from "./Card";
import style from "./todo.module.css";
import pop_sound from "./assets/pop.mp3";
function Todo() {
  const [input, setinput] = useState("");
  const [todo, setodo] = useState([]);
  function createtodo() {
    if (input == "") {
    } else {
      setodo((todo) => {
        new Audio(pop_sound).play();
        const updatetodo = [...todo, input];
        setinput("");
        return updatetodo;
      });
    }
  }
  return (
    <div className={style.container}>
      <input
        value={input}
        type="text"
        placeholder="add task"
        onChange={(e) => setinput(e.target.value)}
      />
      <button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-l font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        onClick={createtodo}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Create Task
        </span>
      </button>
      <div>
        <Card Todo={todo} setodo={setodo} input={input}></Card>
      </div>
    </div>
  );
}

export default Todo;
