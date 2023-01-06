import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">DEMO</header>
      <button
        onClick={() => {
          const payload = {
            eventSourceKey: "nyc",
            data: { variable: "HEY I'M FROM THE IFRAME" },
          };
          
          window.parent.postMessage(payload, "*");
          window.postMessage(payload, "*");
        }}
      >
        SEND TO AIRKIT
      </button>
    </div>
  );
}

export default App;
