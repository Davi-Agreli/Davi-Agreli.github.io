const button = document.getElementById("add")

let num = 0;

const add = () => {
  num++;
  const number = document.getElementById("number")
  console.log(number)
  number.innerHTML = num;
}

button.addEventListener("click", add);