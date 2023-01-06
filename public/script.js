const elem = document.getElementById("received");

window.addEventListener("message", (event) => {
  const { data } = event;

  if (data.eventSourceKey === "lolol") {
    elem.innerText = data.payload.dede;
  }
});
