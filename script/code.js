let base = document.getElementById("base");

document.getElementById("click").addEventListener("click", (event) => {
    event.preventDefault()
  let baseValue = base.value;

  let answer = baseValue * 365
  console.log(answer);
  document.getElementById("area").value = answer
});
