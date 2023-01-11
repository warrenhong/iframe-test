const elem = document.getElementById("received");

window.addEventListener("message", (event) => {
  const { data } = event;
    console.log(event)
  if (data.eventSourceKey === "lolol") {
    elem.innerText = data.payload.dede;
  }
});



// const calledOnce = React.useRef(false);

// const onMessageReceived = useCallback((event: any) => {
//   const { data } = event;
//   console.log(data);

//   if (data.eventSourceKey === "lolol") {
//     // setReceivedText(JSON.stringify(data.eventSourceKey));
//     calledOnce.current = true;
//   }
// }, []);

// useEffect(() => {
//   if (calledOnce.current) {
//     return;
//   }

//   window.addEventListener("message", onMessageReceived);

//   return () => {
//     window.removeEventListener("message", onMessageReceived);
//   };
// }, [onMessageReceived]);
