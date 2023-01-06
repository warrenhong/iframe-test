import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [once, setOnce]= useState(false)
  const [receivedText, setReceivedText] = useState<string>("hey hey");
  const onMessageReceived = useCallback((event: any) => {
    const { data } = event;
    console.log(data);
    console.log(receivedText)
    if (data.eventSourceKey === "lolol") {
      setReceivedText(JSON.stringify(data.eventSourceKey));
    }
  },[receivedText]);

  useEffect(() => {
    window.addEventListener("message", onMessageReceived);

    return () => {
      window.removeEventListener("message", onMessageReceived);
    };
  }, [onMessageReceived, once]);

  return (
    <div className="App">
      <header className="App-header">
        <p>PLEASE WORK "" PLEASE WORK</p>
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
