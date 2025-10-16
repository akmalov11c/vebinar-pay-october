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
  "https://script.google.com/macros/s/AKfycbxNOl7s9FdoeUly8H59OJd-8jXpGYieZkgEjEn97ibfhklwp2gTPVLsRk4e51CxpI6cPQ/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fd = new FormData(form);

  await fetch(GAS_URL, { method: "POST", body: fd });
  modal.classList.remove("open");
  window.location.href = `plan.html?type=${fd.get("plan").toLowerCase()}`;
  form.reset();
});
