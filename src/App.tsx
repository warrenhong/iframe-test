import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [receivedText, setReceivedText] = useState("");

  useEffect(() => {
    const onMessageReceived = (event: any) => {
      const { data, eventSourceKey } = event.data;
      console.log(event)
      setReceivedText(data.dede);
    };
    window.addEventListener("message", onMessageReceived);

    return () => {
      window.removeEventListener("message", onMessageReceived);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         HELLO 3
        </p>
      </header>
      <div style={receivedText ? { fontSize: "48px", color: "red" } : {}}>
        {receivedText}
      </div>
    </div>
  );
}

export default App;
