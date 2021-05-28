import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AllAction from "../../Redux/actions";

function Date({ date, tasks }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handelClick = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(
        AllAction.addTask({
          date,
          data: input,
        })
      );
      setInput("");
    }
  };
  return (
    <div className="date">
      <h1>{date}</h1>

      {tasks === void 0 ? (
        ""
      ) : (
        <>
          <form onSubmit={handelClick}>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add task..."
              value={input}
            ></input>
            <button type="submit">Add</button>
          </form>
        </>
      )}
      {tasks !== undefined
        ? tasks.map((e) => <li className="date__list">{e}</li>)
        : ""}
    </div>
  );
}

export default Date;
