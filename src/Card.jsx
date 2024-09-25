import React from "react";
import style from "./card.module.css";
import del_sound from "./assets/delete.mp3";
function Card({ Todo, setodo, input }) {
  function del(i) {
    new Audio(del_sound).play();
    const newArr = [...Todo];
    newArr.splice(i, 1);
    setodo(newArr);
  }
  function edit(i) {
    if (input == "") {
    } else {
      const newArr = [...Todo];
      newArr[i] = input;
      setodo(newArr);
    }
  }
  return (
    <div>
      {Todo.map((a, i) => {
        return (
          <div key={i} className={style.box}>
            {a}
            <div>
              <button onClick={() => edit(i)} className={style.active}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              &nbsp; &nbsp;
              <button onClick={() => del(i)} className={style.active}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
