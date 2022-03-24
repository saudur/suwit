const komputer = document.getElementById("komputer");
const pemain = document.getElementById("pemain");
const hasil = document.getElementById("hasil");
const button = document.querySelectorAll("button");
let temp;
let komputerPilih;
let result;
button.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    temp = e.target.id;
    pemain.innerHTML = temp;
    acakKomputer();
    dapaThasil();
  })
);

function acakKomputer() {
  const randomNumber = Math.floor(Math.random() * button.length);

  if (randomNumber === 0) {
    komputerPilih = "🖐";
  } else if (randomNumber === 1) {
    komputerPilih = "✌";
  } else {
    komputerPilih = "✊";
  }
  komputer.innerHTML = komputerPilih;
}

function dapaThasil() {
  if (komputerPilih === temp) {
    result = "SERI";
  } else if (komputerPilih === "🖐") {
    if (temp === "✌") {
      result = "MENANG";
    } else {
      result = "KALAH";
    }
  } else if (komputerPilih === "✌") {
    if (temp === "🖐") {
      result = "KALAH";
    } else {
      result = "MENANG";
    }
  } else if (komputerPilih === "✊") {
    if (temp === "✌") {
      result = "KALAH";
    } else {
      result = "MENANG";
    }
  }

  hasil.innerHTML = result;
}
