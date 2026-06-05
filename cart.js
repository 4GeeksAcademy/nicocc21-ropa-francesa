const LANG_STORAGE_KEY = "desordre-language";
const CART_STORAGE_KEY = "desordre-cart";

const translations = {
  es: {
    title: "Desordre | Carrito",
    h1: "Carrito",
    summary: "Resumen",
    items: "Prendas",
    subtotal: "Subtotal",
    tax: "Impuestos",
    total: "Total",
    buy: "Comprar",
    unitPrice: "Precio unitario",
    quantity: "Cantidad",
    productTotal: "Total producto",
    empty: "Tu carrito esta vacio. Agrega prendas desde Home o Catalogo.",
  },
  en: {
    title: "Desordre | Cart",
    h1: "Cart",
    summary: "Summary",
    items: "Items",
    subtotal: "Subtotal",
    tax: "Taxes",
    total: "Total",
    buy: "Buy",
    unitPrice: "Unit price",
    quantity: "Quantity",
    productTotal: "Product total",
    empty: "Your cart is empty. Add items from Home or Catalog.",
  },
  fr: {
    title: "Desordre | Panier",
    h1: "Panier",
    summary: "Resume",
    items: "Articles",
    subtotal: "Sous-total",
    tax: "Taxes",
    total: "Total",
    buy: "Acheter",
    unitPrice: "Prix unitaire",
    quantity: "Quantite",
    productTotal: "Total produit",
    empty: "Votre panier est vide. Ajoutez des articles depuis Home ou Catalogue.",
  },
};

const storedLanguage = localStorage.getItem(LANG_STORAGE_KEY);
let currentLanguage = storedLanguage && Object.prototype.hasOwnProperty.call(translations, storedLanguage)
  ? storedLanguage
  : "es";

const languageSelect = document.getElementById("cart-language");
const accountBtn = document.getElementById("cart-account-btn");
const accountDropdown = document.getElementById("cart-account-dropdown");
const cartList = document.getElementById("cart-list");

function t(key) {
  return translations[currentLanguage][key] || key;
}

function formatPrice(value) {
  const locale = currentLanguage === "fr" ? "fr-FR" : currentLanguage === "en" ? "en-US" : "es-ES";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function getStoredCart() {
  const raw = localStorage.getItem(CART_STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function renderCart() {
  if (!(cartList instanceof HTMLElement)) {
    return;
  }

  const cartProducts = getStoredCart();
  cartList.innerHTML = "";

  if (!cartProducts.length) {
    cartList.innerHTML = `<li class="catalog-empty">${t("empty")}</li>`;
  } else {
    cartProducts.forEach((item, index) => {
      const li = document.createElement("li");
      const lineTotal = item.price * item.qty;
      const itemName = typeof item.names === "object" && item.names !== null
        ? item.names[currentLanguage] || item.names.es || item.id
        : item.id;
      const loading = index < 2 ? "eager" : "lazy";

      li.className = "cart-item";
      li.innerHTML = `
        <img src="${item.image}" alt="${itemName}" class="cart-thumb" width="320" height="320" loading="${loading}" decoding="async" />
        <div class="cart-item-copy">
          <h3>${itemName}</h3>
          <p>${t("unitPrice")}: ${formatPrice(item.price)}</p>
          <p>${t("quantity")}: ${item.qty}</p>
          <p><strong>${t("productTotal")}: ${formatPrice(lineTotal)}</strong></p>
        </div>
      `;
      cartList.appendChild(li);
    });
  }

  const itemCount = cartProducts.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cartProducts.reduce((sum, item) => sum + item.price * item.qty, 0);
  const taxes = subtotal * 0.21;
  const total = subtotal + taxes;

  const itemsNode = document.getElementById("items-value");
  const subtotalNode = document.getElementById("subtotal-value");
  const taxNode = document.getElementById("tax-value");
  const totalNode = document.getElementById("total-value");

  if (itemsNode) itemsNode.textContent = String(itemCount);
  if (subtotalNode) subtotalNode.textContent = formatPrice(subtotal);
  if (taxNode) taxNode.textContent = formatPrice(taxes);
  if (totalNode) totalNode.textContent = formatPrice(total);
}

function applyTranslation() {
  document.title = t("title");

  const h1 = document.getElementById("cart-title");
  if (h1) h1.textContent = t("h1");

  const summary = document.querySelector(".cart-summary h2");
  if (summary) summary.textContent = t("summary");

  const summaryLabels = document.querySelectorAll(".cart-summary p span");
  if (summaryLabels.length === 4) {
    summaryLabels[0].textContent = t("items");
    summaryLabels[1].textContent = t("subtotal");
    summaryLabels[2].textContent = t("tax");
    summaryLabels[3].textContent = t("total");
  }

  const buyBtn = document.querySelector(".cart-summary .work-link");
  if (buyBtn) buyBtn.textContent = t("buy");

  renderCart();
}

function toggleAccountMenu(forceOpen) {
  if (!(accountDropdown instanceof HTMLElement) || !(accountBtn instanceof HTMLButtonElement)) {
    return;
  }

  const open = typeof forceOpen === "boolean" ? forceOpen : accountDropdown.hidden;
  accountDropdown.hidden = !open;
  accountBtn.setAttribute("aria-expanded", String(open));
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
