import "./App.css";

function App() {
  return (
    <>
      <div>
        <BackgroundControls />
      </div>
    </>
  );
}

function BackgroundControls() {
  const colors = [
    "black",
    "white",
    "yellow",
    "pink",
    "blue",
    "violet",
    "skyblue",
  ];
  return (
    <div className="layout">
      {colors.map((color, i) => (
        <Buttons key={i} color={color} />
      ))}
    </div>
  );
}

function Buttons({ color }) {
  return (
    <button
      className="button"
      style={{
        background: color,
        color: color === "black" ? "white" : "black",
        boxShadow: `0 4px 8px 0 ${
          color === "black" ? "rgba(252, 252, 252, 0.2)" : "rgba(0, 0, 0, 0.2)"
        }, 0 6px 20px 0 ${
          color === "black"
            ? "rgba(252, 252, 252, 0.19)"
            : "rgba(0, 0, 0, 0.19)"
        }`,
      }}
      onClick={() => changeBackground(color)}
    >
      {color}
    </button>
  );
}

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

export default App;
