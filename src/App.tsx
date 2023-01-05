import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [receivedText, setReceivedText] = useState("");

  useEffect(() => {
    const onMessageReceived = (event: any) => {
      const { data, eventSourceKey } = event.data;
      console.log(event)
      setReceivedText(data);
    };
    window.addEventListener("on", onMessageReceived);

    return () => {
      window.removeEventListener("on", onMessageReceived);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <div style={receivedText ? { fontSize: "48px", color: "red" } : {}}>
        {receivedText}
      </div>
    </div>
  );
}

export default App;
