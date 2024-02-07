import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState("");

  const value = useDebounce(count, 300);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      {value}
    </>
  );
}

function useDebounce(input, time) {
  const [val, setVal] = useState(input);

  useEffect(() => {
    const v = setTimeout(() => {
      setVal(input);
    }, time);
    return () => {
      clearTimeout(v);
    };
  }, [input]);
  return val;
}

// --------------------- useInterval ---------------------
// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount((c) => c + 1);
//   }, 1000);

//   return <>Timer is at {count}</>;
// }

// function useInterval(callBack, time) {
//   useEffect(() => {
//     const v = setInterval(callBack, time);
//     return () => {
//       clearInterval(v);
//     };
//   }, [callBack, time]);
// }

// -------------------- useDimensions HOOK -------------------
// function App() {
//   const { width, height } = useDimensions();

//   return (
//     <>
//       width : {width} , height : {height}
//     </>
//   );
// }

// function useDimensions() {
//   const [width, setWidth] = useState(window.screen.width);
//   const [height, setHight] = useState(window.screen.width);

//   useEffect(() => {
//     window.addEventListener("resize", () => {
//       setWidth(window.innerWidth);
//       setHight(window.innerHeight);
//     });
//   }, []);

//   return { width, height };
// }

// -------------------- useIsOnline --------------------------
// function App() {
//   const onLine = useIsOnline();

//   if (onLine) return <>online</>;
//   return <>offline</>;
// }

// function useIsOnline() {
//   const [online, setOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener("online", () => {
//       setOnline(true);
//     });

//     window.addEventListener("offline", () => {
//       setOnline(false);
//     });
//   }, []);

//   return online;
// }

// -------------- callToDOs HOOK ----------------
// function App() {
//   const { todos, loading } = useCall(5);
//   if (loading) {
//     return <div>loading...</div>;
//   }
//   return (
//     <>
//       {todos.map((todo) => (
//         <Track todo={todo} />
//       ))}
//     </>
//   );
// }

// function useCall(t) {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const int = setInterval(() => {
//       axios
//         .get("https://sum-server.100xdevs.com/todos")
//         .then((res) => {
//           setTodos(res.data.todos);
//         })
//         .then(() => {
//           setLoading(false);
//         });
//     }, t * 1000);

//     return () => {
//       clearInterval(int);
//     };
//   }, []);

//   return { todos, loading };
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

export default App;
