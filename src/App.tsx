import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">iframe bi-directional demo</header>
      <button
      className="button"
        onClick={() => {
          const payload = {
            eventSourceKey: "nyc",
            data: { variable: "HEY I'M FROM THE IFRAME" },
          };
          
          window.parent.postMessage(payload, "*");
          window.postMessage(payload, "*");

          const domain = window.location !== window.parent.location ? document.referrer : document.location.href
          window.parent.postMessage(payload, domain);
          window.postMessage(payload, domain);
        }}
      >
        SEND DATA TO AIRKIT
      </button>
    </div>
  );
}

export default App;
