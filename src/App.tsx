import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [receivedText, setReceivedText] = useState<string>("hey hey");

  useEffect(() => {
    const onMessageReceived = async (event: any) => {
      const { data } = event;
      console.log(data);
      if (data.eventSourceKey) {
        setReceivedText(JSON.stringify(data.eventSourceKey));
      }
    };
    window.addEventListener("message", onMessageReceived);

    return () => {
      window.removeEventListener("message", onMessageReceived);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>PLEASE WORK DEWEWDWEDWE</p>
        <div
          className="text"
          style={
            receivedText
              ? { fontSize: "48px", color: "red" }
              : { fontSize: "48px", color: "blue" }
          }
        >
          {receivedText}
        </div>
      </header>
    </div>
  );
}

export default App;
