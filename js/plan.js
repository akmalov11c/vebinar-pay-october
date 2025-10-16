const plans = {
  premium: { title: "Premium", price: "50.000.000 so'm" },
  biznes: { title: "Biznes", price: "50.000.000 so'm" },
  vip: { title: "V.I.P", price: "50.000.000 so'm" },
};

const params = new URLSearchParams(window.location.search);
const planType = params.get("type")?.toLowerCase();

const planNameEl = document.querySelector(".plan-name-pay");
const planPriceEl = document.querySelector(".plan-price");
const timerEl = document.querySelector(".timer");

if (plans[planType]) {
  planNameEl.textContent = plans[planType].title;
  planPriceEl.textContent = plans[planType].price;
} else {
  planNameEl.textContent = "Tanlanmagan plan";
  planPriceEl.textContent = "-";
}

let timerDuration = 15 * 60;

function updateTimer() {
  const minutes = Math.floor(timerDuration / 60);
  const seconds = timerDuration % 60;
  timerEl.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (timerDuration > 0) {
    timerDuration--;
  } else {
    clearInterval(timerInterval);
    timerEl.textContent = "Vaqt tugadi!";
  }
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
