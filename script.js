const iframe1 = document.getElementById("iframe1");
const iframe2 = document.getElementById("iframe2");

window.addEventListener("message", (event) => {
  const { data } = event;
    console.log(event)
  if (data.eventSourceKey === "iframe1") {
    iframe1.innerText = data.payload.dede;
  }

  if (data.eventSourceKey === "iframe2") {
    iframe2.innerText = data.payload.dede;
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
