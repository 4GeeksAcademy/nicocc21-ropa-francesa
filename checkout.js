const LANG_STORAGE_KEY = "desordre-language";
const translations = {
  es: {
    title: "Desordre | Checkout",
    h1: "Checkout",
    steps: ["1. Datos personales", "2. Direccion de entrega", "3. Pago con tarjeta"],
    prev: "Anterior",
    next: "Siguiente",
    finish: "Finalizar compra",
  },
  en: {
    title: "Desordre | Checkout",
    h1: "Checkout",
    steps: ["1. Personal data", "2. Delivery address", "3. Card payment"],
    prev: "Previous",
    next: "Next",
    finish: "Place order",
  },
  fr: {
    title: "Desordre | Checkout",
    h1: "Checkout",
    steps: ["1. Donnees personnelles", "2. Adresse de livraison", "3. Paiement par carte"],
    prev: "Precedent",
    next: "Suivant",
    finish: "Finaliser l'achat",
  },
};

const storedLanguage = localStorage.getItem(LANG_STORAGE_KEY);
let currentLanguage = storedLanguage && Object.prototype.hasOwnProperty.call(translations, storedLanguage)
  ? storedLanguage
  : "es";

let currentStep = 1;

const languageSelect = document.getElementById("checkout-language");
const accountBtn = document.getElementById("checkout-account-btn");
const accountDropdown = document.getElementById("checkout-account-dropdown");
const steps = document.querySelectorAll("#checkout-steps li");
const panels = document.querySelectorAll(".checkout-panel");
const prevBtn = document.getElementById("checkout-prev");
const nextBtn = document.getElementById("checkout-next");

function t(key) {
  return translations[currentLanguage][key] || key;
}

function updateSteps() {
  steps.forEach((item, index) => {
    item.textContent = t("steps")[index];
    item.classList.toggle("is-active", index + 1 === currentStep);
  });

  panels.forEach((panel) => {
    const step = Number(panel.getAttribute("data-step"));
    panel.hidden = step !== currentStep;
    panel.classList.toggle("is-active", step === currentStep);
  });

  if (prevBtn instanceof HTMLButtonElement) {
    prevBtn.disabled = currentStep === 1;
    prevBtn.textContent = t("prev");
  }

  if (nextBtn instanceof HTMLButtonElement) {
    nextBtn.textContent = currentStep === 3 ? t("finish") : t("next");
  }
}

function applyTranslation() {
  document.title = t("title");
  const h1 = document.getElementById("checkout-title");
  if (h1) {
    h1.textContent = t("h1");
  }

  updateSteps();
}

function toggleAccountMenu(forceOpen) {
  if (!(accountDropdown instanceof HTMLElement) || !(accountBtn instanceof HTMLButtonElement)) {
    return;
  }

  const open = typeof forceOpen === "boolean" ? forceOpen : accountDropdown.hidden;
  accountDropdown.hidden = !open;
  accountBtn.setAttribute("aria-expanded", String(open));
}

if (prevBtn instanceof HTMLButtonElement) {
  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep -= 1;
      updateSteps();
    }
  });
}

if (nextBtn instanceof HTMLButtonElement) {
  nextBtn.addEventListener("click", () => {
    if (currentStep < 3) {
      currentStep += 1;
      updateSteps();
      return;
    }

    window.location.href = "index.html";
  });
}

if (languageSelect instanceof HTMLSelectElement) {
  languageSelect.value = currentLanguage;
  languageSelect.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) {
      return;
    }

    currentLanguage = target.value;
    localStorage.setItem(LANG_STORAGE_KEY, currentLanguage);
    applyTranslation();
  });
}

if (accountBtn instanceof HTMLButtonElement) {
  accountBtn.addEventListener("click", () => toggleAccountMenu());
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (!target.closest(".account-menu")) {
    toggleAccountMenu(false);
  }
});

applyTranslation();
