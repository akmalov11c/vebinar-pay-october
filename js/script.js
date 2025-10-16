const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const planInput = document.getElementById("planInput");
const options = document.querySelectorAll(".card-option");
const form = document.getElementById("leadForm");
let selectedPlan = "BIZNES";

options.forEach((opt) => {
  opt.addEventListener("click", () => {
    options.forEach((o) => (o.style.outline = ""));
    opt.style.outline = "2px solid rgba(255,255,255,0.06)";
    selectedPlan = opt.dataset.plan;
    planInput.value = selectedPlan;
    modal.classList.add("open");
  });
});

closeModal.addEventListener("click", () => modal.classList.remove("open"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbxtPqmVY7Y2ID9l4rhMip4YJ3n_AJAIQy60nZ8amX0AAsKpoMLyRZkh95FlU52xztPq/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.querySelectorAll("input").forEach((input) => input.blur());

  const fd = new FormData(form);
  const params = new URLSearchParams();
  fd.forEach((value, key) => params.append(key, value));

  const blob = new Blob([params.toString()], {
    type: "application/x-www-form-urlencoded",
  });
  navigator.sendBeacon(GAS_URL, blob);

  modal.classList.remove("open");
  window.location.href = `plan.html?type=${fd.get("plan").toLowerCase()}`;

  form.reset();
});
