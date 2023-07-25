const qoutecont = document.querySelector(".qoute-content");
const btn = document.querySelector(".btn");

function random() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      qoutecont.innerHTML = data.content;
    });
}

btn.addEventListener("click", random);
