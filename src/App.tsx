import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <p>count is {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <NameAdder />

      <RevealSecret />
    </>
  );
}

function NameAdder() {
  const [name, setName] = useState<string>("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello! {name}</p>
    </>
  );
}

function RevealSecret() {
  const [secret, setSecret] = useState<string>("Reveal Secret");

  return (
    <>
      <button
        onClick={() => setSecret("Nice job")}
        onDoubleClickCapture={() => setSecret("Click again to reveal")}
      >
        {secret}
      </button>
    </>
  );
}

export default App;
