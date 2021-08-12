let input = document.querySelector("input");
let btn = document.querySelector("button");
let msg = input.value;
function clickMe() {
  btn.textContent = "Sent !";
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
    .then((res) => console.log(res));
}
btn.addEventListener("click", clickMe);
