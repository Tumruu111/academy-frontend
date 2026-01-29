import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
        <button onClick={() => setCount(count - count)}>Reset</button>
      </div>
      <NameAdder />
      <RevealSecret />
      <UserProfile />
    </>
  );
}
function NameAdder() {
  const [name, setName] = useState("");

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
  const [secret, setSecret] = useState("Reveal Secret");

  return (
    <>
      <button
        onClick={() => setSecret("Nice job")}
        onDoubleClickCapture={() => setSecret("Click again to reveal")}
      >
        {secret}
      </button>
      <p>Click on the button to reveal secret</p>
    </>
  );
}
function UserProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your age is: {age}</p>
      <button onClick={() => setAge(age + 1)}>+</button>
      <button onClick={() => setAge(age - 1)}>-</button>
      <button onClick={() => setAge(age - age)}>Reset</button>
    </>
  );
}
export default App;
