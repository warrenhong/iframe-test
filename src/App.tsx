import React, { useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const calledOnce = React.useRef(false);


  const onMessageReceived = useCallback((event: any) => {
    const { data } = event;
    console.log(data);

    if (data.eventSourceKey === "lolol") {
      // setReceivedText(JSON.stringify(data.eventSourceKey));
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
        HEY MAN
      </header>
    </div>
  );
}

export default App;
