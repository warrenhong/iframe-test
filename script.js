alert("dede");

const elem = document.getElementById("received");

window.addEventListener("message", (event) => {
  const { data } = event;
  console.log(data);

  if (data.eventSourceKey === "lolol") {
    elem.innerText = data.eventSourceKey;
  }
});
