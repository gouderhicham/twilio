let input = document.querySelector("input");
let btn = document.querySelector("button");
let msg = input.value;
function clickMe() {
  fetch(`/sendSms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      msg: input.value,
    }),
  })
    .then((res) => res.json())
    .then((res) =>{
      btn.innerHTML = "Message Sent !"
      btn.classList.add("sent")
       console.log(res)});
}
btn.addEventListener("click", clickMe);
