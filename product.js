const LANG_STORAGE_KEY = "desordre-language";
const CART_STORAGE_KEY = "desordre-cart";
const translations = {
  es: {
    title: "Desordre | Producto",
    account: "Cuenta",
    profile: "Mi perfil",
    orders: "Pedidos",
    favorites: "Favoritos",
    cart: "Carrito",
    logout: "Cerrar sesion",
    search: "Buscar prendas",
    name: "Vestido Satinado",
    codeLabel: "Codigo:",
    sizeLabel: "Talla:",
    qtyLabel: "Cantidad",
    addToCart: "Agregar al carrito",
    viewCart: "Ver carrito",
    detailTitle: "Descripcion detallada",
    materials: "Materiales:",
    materialsText: "Mezcla satinada premium con forro interior suave y costuras reforzadas.",
    use: "Uso recomendado:",
    useText: "Ideal para salidas urbanas, cenas, eventos de noche y combinaciones casual-elegantes.",
    navTitle: "Navegacion",
    toCheckout: "Ir al checkout",
  },
  en: {
    title: "Desordre | Product",
    account: "Account",
    profile: "My profile",
    orders: "Orders",
    favorites: "Favorites",
    cart: "Cart",
    logout: "Log out",
    search: "Search pieces",
    name: "Satin Dress",
    codeLabel: "Code:",
    sizeLabel: "Size:",
    qtyLabel: "Quantity",
    addToCart: "Add to cart",
    viewCart: "View cart",
    detailTitle: "Detailed description",
    materials: "Materials:",
    materialsText: "Premium satin blend with soft inner lining and reinforced seams.",
    use: "Recommended use:",
    useText: "Ideal for urban outings, dinners, night events, and smart-casual outfits.",
    navTitle: "Navigation",
    toCheckout: "Go to checkout",
  },
  fr: {
    title: "Desordre | Produit",
    account: "Compte",
    profile: "Mon profil",
    orders: "Commandes",
    favorites: "Favoris",
    cart: "Panier",
    logout: "Se deconnecter",
    search: "Rechercher des pieces",
    name: "Robe satinee",
    codeLabel: "Code:",
    sizeLabel: "Taille:",
    qtyLabel: "Quantite",
    addToCart: "Ajouter au panier",
    viewCart: "Voir panier",
    detailTitle: "Description detaillee",
    materials: "Materiaux:",
    materialsText: "Melange satine premium avec doublure douce et coutures renforcees.",
    use: "Usage recommande:",
    useText: "Ideal pour sorties urbaines, diners, evenements du soir et looks casual chic.",
    navTitle: "Navigation",
    toCheckout: "Aller au checkout",
  },
};

const storedLanguage = localStorage.getItem(LANG_STORAGE_KEY);
let currentLanguage = storedLanguage && Object.prototype.hasOwnProperty.call(translations, storedLanguage)
  ? storedLanguage
  : "es";

const languageSelect = document.getElementById("product-language");
const accountBtn = document.getElementById("product-account-btn");
const accountDropdown = document.getElementById("product-account-dropdown");
const addToCartBtn = document.getElementById("add-to-cart-btn");
const qtySelect = document.getElementById("product-qty");

function t(key) {
  return translations[currentLanguage][key] || key;
}

function applyTranslation() {
  document.title = t("title");

  const search = document.getElementById("product-search");
  if (search instanceof HTMLInputElement) {
    search.placeholder = t("search");
  }

  if (accountBtn instanceof HTMLButtonElement) {
    accountBtn.textContent = t("account");
  }

  const items = accountDropdown?.querySelectorAll("a");
  if (items && items.length === 5) {
    items[0].textContent = t("profile");
    items[1].textContent = t("orders");
    items[2].textContent = t("favorites");
    items[3].textContent = t("cart");
    items[4].textContent = t("logout");
  }

  const name = document.getElementById("product-title");
  if (name) {
    name.textContent = t("name");
  }

  const code = document.querySelector(".product-ref strong");
  if (code) {
    code.textContent = t("codeLabel");
  }

  const size = document.querySelector(".product-size strong");
  if (size) {
    size.textContent = t("sizeLabel");
  }

  const qtyLabel = document.querySelector("label[for='product-qty']");
  if (qtyLabel) {
    qtyLabel.textContent = t("qtyLabel");
  }

  if (addToCartBtn instanceof HTMLButtonElement) {
    addToCartBtn.textContent = t("addToCart");
  }

  const viewCart = document.querySelector(".product-info .work-link");
  if (viewCart) {
    viewCart.textContent = t("viewCart");
  }

  const detailTitle = document.getElementById("detail-title");
  if (detailTitle) {
    detailTitle.textContent = t("detailTitle");
  }

  const detailStrong = document.querySelectorAll(".product-detail p strong");
  if (detailStrong.length === 2) {
    detailStrong[0].textContent = t("materials");
    detailStrong[1].textContent = t("use");
  }

  const detailTexts = document.querySelectorAll(".product-detail p");
  if (detailTexts.length === 2) {
    detailTexts[0].lastChild.textContent = ` ${t("materialsText")}`;
    detailTexts[1].lastChild.textContent = ` ${t("useText")}`;
  }

  const footerTitle = document.getElementById("footer-links");
  if (footerTitle) {
    footerTitle.textContent = t("navTitle");
  }

  const toCheckout = document.querySelector("footer .footer-col-work .work-link");
  if (toCheckout) {
    toCheckout.textContent = t("toCheckout");
  }
}

function toggleAccountMenu(forceOpen) {
  if (!(accountDropdown instanceof HTMLElement) || !(accountBtn instanceof HTMLButtonElement)) {
    return;
  }

  const open = typeof forceOpen === "boolean" ? forceOpen : accountDropdown.hidden;
  accountDropdown.hidden = !open;
  accountBtn.setAttribute("aria-expanded", String(open));
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

function saveStoredCart(cartItems) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
}

function addCurrentProductToCart(quantity) {
  const cartItems = getStoredCart();
  const productId = "p-vst-019";
  const names = {
    es: translations.es.name,
    en: translations.en.name,
    fr: translations.fr.name,
  };
  const existing = cartItems.find((item) => item.id === productId);

  if (existing) {
    existing.qty += quantity;
  } else {
    cartItems.push({
      id: productId,
      names,
      price: 89,
      qty: quantity,
      image: "vestido.webp",
    });
  }

  saveStoredCart(cartItems);
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

if (addToCartBtn instanceof HTMLButtonElement) {
  addToCartBtn.addEventListener("click", () => {
    const quantity = qtySelect instanceof HTMLSelectElement ? Number(qtySelect.value) : 1;
    addCurrentProductToCart(Number.isFinite(quantity) && quantity > 0 ? quantity : 1);
    window.location.href = "cart.html";
  });
}

applyTranslation();
