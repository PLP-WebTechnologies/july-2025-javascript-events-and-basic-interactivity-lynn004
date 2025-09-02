// -----------------------------
// Climate Change Website Script
// -----------------------------

// Random Facts Feature 
const factBtn = document.getElementById("factBtn");
const factDisplay = document.getElementById("factDisplay");

const facts = [
  "Global sea levels have risen about 8 inches since 1880.",
  "Rising water levels threaten 40% of the world's population living near coasts.",
  "Melting glaciers contribute to almost one-third of sea level rise.",
  "Warmer oceans expand, causing higher water levels.",
  "By 2100, sea levels could rise by over 1 meter if climate change continues unchecked."
];

factBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factDisplay.textContent = facts[randomIndex];
});

// Water Level Simulation 
const waterSlider = document.getElementById("waterSlider");
const waterLevel = document.getElementById("waterLevel");

waterSlider.addEventListener("input", () => {
  const value = waterSlider.value;
  waterLevel.style.height = value + "%"; // Adjust height of water div
});

// === Form Validation ===
const form = document.getElementById("pledgeForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const actionInput = document.getElementById("action");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const actionError = document.getElementById("actionError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default submission
  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Action
  if (actionInput.value.trim() === "") {
    actionError.textContent = "Please enter a climate action.";
    isValid = false;
  } else {
    actionError.textContent = "";
  }

  // Success Message
  if (isValid) {
    successMessage.textContent = `Thank you, ${nameInput.value}, for pledging to ${actionInput.value}! 🌱`;
    form.reset();
  }
});
