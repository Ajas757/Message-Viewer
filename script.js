const sendBtn = document.querySelector("#sendBtn");
const messageIn = document.querySelector("#messageIn");
const messageOut = document.querySelector("#messageOut");
const input = document.querySelector("input");

sendBtn.addEventListener("click", sendMsg);

function sendMsg() {
  let content = messageIn.value;
  if (content === "") {
    input.placeholder = "Please enter a valid message";
  } else {
    messageOut.innerHTML = content;
    messageIn.value = "";
  }
}
