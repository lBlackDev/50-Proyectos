const cups = document.querySelectorAll(".drinkWater");
const liters = document.getElementById("liters");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");

updateBigCup();

cups.forEach((drink, idx) => {
  drink.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (idx === 7 && cups[idx].classList.contains("full")) idx--;
  else if (
    cups[idx].classList.contains("full") &&
    !cups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  cups.forEach((drink, idx2) => {
    if (idx2 <= idx) {
      drink.classList.add("full");
    } else {
      drink.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".drinkWater.full").length;
  const totalCups = cups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
