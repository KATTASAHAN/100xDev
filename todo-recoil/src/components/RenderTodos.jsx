import { useRecoilValue } from "recoil";
import { todosAtom } from "../store/todoAtoms";

const RenderTodos = () => {
  const todos = useRecoilValue(todosAtom);
  return (
    <>
      {todos?.map((todo) => (
        <div
          key={todo.key}
          style={{ border: "1px solid black", margin: "5px" }}
        >
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </>
  );
};

export default RenderTodos;
