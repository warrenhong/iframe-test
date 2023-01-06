import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [receivedText, setReceivedText] = useState("");

  const onMessageReceived = useCallback(async(event: any) => {
    const { data, eventSourceKey } = event.data;
    console.log(event,eventSourceKey);
    setReceivedText(data.dede);
  }, []);
  useEffect(() => {
    window.addEventListener("message", onMessageReceived);

    return () => {
      window.removeEventListener("message", onMessageReceived);
    };
  }, [onMessageReceived]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hwdewed</p>
      </header>
      <div style={receivedText ? { fontSize: "48px", color: "red" } : {}}>
        {receivedText}
      </div>
    </div>
  );
}

export default App;
