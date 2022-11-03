import logo from "./logo.svg";
import "./App.css";
import useCounter from "./useCounter";
import { useState } from "react";

const Button = ({ children, onClick, className, ...props }) => (
  <button
    onClick={onClick}
    className={`px-2 py-1 rounded text-md hover:bg-[#ffffff6c] ${
      props.disabled && "text-[#ffffff6c] border-[#ffffff6c]"
    } text-[#61dafb] border-[#61dafb]  border-[2px] ${className}`}
    {...props}
  >
    {children}
  </button>
);

function App() {
  const [time, settime] = useState(0);
  const [start, reset, { counter, age }] = useCounter(time);

  return (
    <div className="App font-mono">
      <header className="App-header flex flex-col gap-2">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex items-center justify-center gap-5">
          <div class="grid grid-cols-4 gap-4">
            <Button
              disabled={!time}
              onClick={() => start()}
              className="text-[#70fb61] border-[#70fb61]"
            >
              start
            </Button>
            <p className="col-span-2">
              {" "}
              {counter} {age}
            </p>
            <Button
              disabled={!time}
              onClick={() => reset()}
              className="text-[#fb6161] border-[#fb6161]"
            >
              reset
            </Button>
            <Button onClick={() => settime(30)}>30 sec</Button>
            <Button onClick={() => settime(60)}>1 min</Button>
            <Button onClick={() => settime(300)}>5 min</Button>
            <Button onClick={() => settime(3600)}>1 hour</Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
