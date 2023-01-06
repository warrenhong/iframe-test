import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [receivedText, setReceivedText] = useState("");

  useEffect(() => {
    const onMessageReceived = async (event: any) => {
      const { data } = event;
      // console.log(event, data);
      setReceivedText(JSON.stringify(data.eventSourceKey));
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
        <p>PLEASE WORK ii</p>
      </header>
      <div style={receivedText ? { fontSize: "48px", color: "red" } : {}}>
        {receivedText}
      </div>
    </div>
  );
}

export default App;
