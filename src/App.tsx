import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const calledOnce = React.useRef(false);

  const [receivedText, setReceivedText] = useState<string>("hey hey");
  const onMessageReceived = useCallback((event: any) => {
    const { data } = event;
    console.log(data);

    if (data.eventSourceKey === "lolol") {
      setReceivedText(JSON.stringify(data.eventSourceKey));
      calledOnce.current = true
    }
  },[]);

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    window.addEventListener("message", onMessageReceived);

    return () => {
      window.removeEventListener("message", onMessageReceived);
    };
  }, [onMessageReceived]);

  return (
    <div className="App">
      <header className="App-header">
        <p>PLEASE WORK 3 PLEASE WORK</p>
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
