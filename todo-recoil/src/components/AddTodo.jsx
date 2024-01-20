import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosAtom } from "../store/todoAtoms";

const AddTodo = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const setTodos = useSetRecoilState(todosAtom);
  let keys = 3;

  return (
    <>
      <div>
        <p>Title</p>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <p>Description</p>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div style={{ marginTop: "15px" }}>
        <input
          type="submit"
          onClick={() => {
            setTodos((todos) => [
              ...todos,
              {
                key: ++keys,
                title: title,
                description: description,
              },
            ]);
          }}
        />
      </div>
    </>
  );
};

export default AddTodo;
