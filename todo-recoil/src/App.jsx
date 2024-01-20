import "./App.css";
import { RecoilRoot } from "recoil";
import AddTodo from "./components/AddTodo";
import RenderTodos from "./components/RenderTodos";

function App() {
  return (
    <>
      <RecoilRoot>
        <AddTodo />
        <RenderTodos />
      </RecoilRoot>
    </>
  );
}

export default App;
