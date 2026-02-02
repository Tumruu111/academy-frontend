import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Type definitions for UserProfile props
type UserProfileProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  age: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
};

function App() {
  const [count, setCount] = useState<number>(0);

  // State for UserProfile
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<number>(0);

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

      {/* UserProfile with props */}
      <UserProfile
        name={userName}
        setName={setUserName}
        age={userAge}
        setAge={setUserAge}
      />
    </>
  );
}

// NameAdder stays the same
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

// RevealSecret stays the same
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
      <p>Click on the button to reveal secret</p>
    </>
  );
}

// UserProfile now with "is active" checkbox and glowing effect
function UserProfile({ name, setName, age, setAge }: UserProfileProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  // Dynamic style for glow when active
  const containerStyle: React.CSSProperties = {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginTop: "10px",
    display: "inline-block",
    boxShadow: isActive ? "0 0 15px 3px green" : "none",
    transition: "box-shadow 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your age is: {age}</p>
      <div>
        <button onClick={() => setAge(age + 1)}>+</button>
        <button onClick={() => setAge(age - 1)}>-</button>
        <button onClick={() => setAge(0)}>Reset</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />{" "}
          Is Active
        </label>
      </div>
    </div>
  );
}

export default App;
