import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [receivedText, setReceivedText] = useState("hey hey");

  useEffect(() => {
    const onMessageReceived = async (event: any) => {
      const { data } = event;
      console.log(event, data.dede);
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
        <p>PLEASE WORK iii</p>
      </header>
      <div style={receivedText ? { fontSize: "48px", color: "red" } : {fontSize: "48px", color: "blue"}}>
        {receivedText}
      </div>
    </div>
  );
}

export default App;
