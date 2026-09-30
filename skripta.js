const klik = document.querySelector("#klik");
const reset = document.querySelector("#reset");
const poruka = document.querySelector("#poruka");

let broj = Number(localStorage.getItem("broj")) || 0;
poruka.textContent = "Kliknuto: " + broj;

klik.addEventListener("click", function () {
  broj = broj + 1;
  localStorage.setItem("broj", broj);
  poruka.textContent = "Kliknuto: " + broj;
});

reset.addEventListener("click", function () {
  broj = 0;
  localStorage.setItem("broj", broj);
  poruka.textContent = "Kliknuto: 0";
});