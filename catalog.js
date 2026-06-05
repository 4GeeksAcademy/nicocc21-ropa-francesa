const catalogProducts = [
  { id: "c1", category: "calzado", size: "41", price: 99, image: "assets/images/203803645-un-conjunto-de-zapatos-de-primavera-y-verano-para-mujer-zapatillas-de-deporte-sandalias-de.webp" },
  { id: "c2", category: "calzado", size: "42", price: 119, image: "assets/images/93009365-cierre-de-zapatos-de-moda-y-ropa-para-los-hombres.webp" },
  { id: "c3", category: "camisas", size: "M", price: 39, image: "assets/images/fashionable-woman-in-colorful-shirt.webp" },
  { id: "c4", category: "camisas", size: "L", price: 54, image: "assets/images/chaqueta-de-cuello-a-medida-blazer-y-camiseta-con-logotipo.webp" },
  { id: "c5", category: "pantalones", size: "L", price: 68, image: "assets/images/63217870-prendas-de-vestir-y-accesorios-para-hombres-y-mujeres-listos-para-viajar-estilo-de-vida.webp" },
  { id: "c6", category: "pantalones", size: "M", price: 72, image: "assets/images/retrato-guapo-modelo-sonriente-hombre-elegante-sexy-vestido-camisa-cuadros-jeans-hombre-hipster-moda-posando-cerca-azul-estudio-aislado_158538-25029.webp" },
  { id: "c7", category: "accesorios", size: "all", price: 74, image: "assets/images/bolso.webp" },
  { id: "c8", category: "accesorios", size: "all", price: 29, image: "assets/images/gorra desordre.png" },
  { id: "c9", category: "calzado", size: "40", price: 109, image: "assets/images/fashion-2208045__340.webp" },
  { id: "c10", category: "calzado", size: "43", price: 129, image: "assets/images/chico con gorra.webp" },
  { id: "c11", category: "camisas", size: "S", price: 44, image: "assets/images/young-woman-man-wearing-blank-600nw-2692295445.webp" },
  { id: "c12", category: "camisas", size: "XL", price: 58, image: "assets/images/retrato-guapo-sonriente-elegante-joven-modelo-vistiendo-ropa-jeans-gafas-sol-hombre-moda_158538-5023.webp" },
  { id: "c13", category: "pantalones", size: "S", price: 63, image: "assets/images/a200e4deb28e47c48330a94e453bdec8.webp" },
  { id: "c14", category: "pantalones", size: "XS", price: 61, image: "assets/images/concepto-estilo-vida-personas-modelo-moda-hombre-guapo_118342-32194.webp" },
  { id: "c15", category: "accesorios", size: "all", price: 49, image: "assets/images/depositphotos_21435719-stock-photo-sexy-man-and-woman-dressed.webp" },
  { id: "c16", category: "accesorios", size: "all", price: 34, image: "assets/images/moda-hombre-estudio-ropa-moda-blazer-traje-elegante-color-estetico-vestido-confianza-o-modelo-masculino-estilo-fantasia-o-gafas-sol-punta-aisladas-sobre-fondo-blanco_590464-285568.webp" },
  { id: "c17", category: "calzado", size: "42", price: 124, image: "assets/images/203803645-un-conjunto-de-zapatos-de-primavera-y-verano-para-mujer-zapatillas-de-deporte-sandalias-de.webp" },
  { id: "c18", category: "calzado", size: "41", price: 139, image: "assets/images/93009365-cierre-de-zapatos-de-moda-y-ropa-para-los-hombres.webp" },
  { id: "c19", category: "camisas", size: "M", price: 89, image: "assets/images/vestido.webp" },
  { id: "c20", category: "camisas", size: "L", price: 118, image: "assets/images/vestido-y-listo-para-ir-tras-mis-sueños.webp" }
];

const translations = {
  es: {
    meta: {
      title: "Desordre | Catalogo",
      description: "Catalogo de productos Desordre con filtros por categoria y talla.",
    },
    nav: {
      searchAria: "Buscar productos",
      searchLabel: "Buscar producto",
      searchPlaceholder: "Buscar prendas",
      languageLabel: "Idioma",
      accountBtn: "Cuenta",
      accountProfile: "Mi perfil",
      accountOrders: "Pedidos",
      accountFavorites: "Favoritos",
      accountCart: "Carrito",
      accountLogout: "Cerrar sesion",
    },
    catalog: {
      title: "Catalogo",
      subtitle: "Explora la coleccion completa y filtra por categoria o talla.",
      filtersAria: "Filtros de catalogo",
      categoryLabel: "Categoria",
      sizeLabel: "Talla",
      sizeUnique: "Unica",
      empty: "No se encontraron productos con esos filtros.",
      addToCart: "Agregar",
    },
    filters: {
      all: "Todas",
      calzado: "Calzado",
      camisas: "Camisas",
      pantalones: "Pantalones",
      accesorios: "Accesorios",
    },
    footer: {
      categoriesTitle: "Categorias",
      catShoes: "Calzado",
      catShirts: "Camisas",
      catPants: "Pantalones",
      catAccessories: "Accesorios",
      legalTitle: "Legal",
      terms: "Terminos y condiciones",
      privacy: "Politica de privacidad",
      about: "Sobre la marca",
      contactTitle: "Contacto",
      location: "Paris, Francia",
      navTitle: "Navegacion",
      backHome: "Volver a Home",
    },
    modal: {
      close: "Cerrar",
      navAria: "Navegacion de imagenes",
      prev: "Anterior",
      next: "Siguiente",
      hint: "Usa las flechas del teclado para navegar",
    },
    categories: {
      calzado: "calzado",
      camisas: "camisas",
      pantalones: "pantalones",
      accesorios: "accesorios",
    },
    productNames: {
      c1: "Zapatillas Verano",
      c2: "Tenis Mono Negro",
      c3: "Camisa Color Pop",
      c4: "Camisa Cuello Corte Sastre",
      c5: "Pantalon Cargo Urbano",
      c6: "Pantalon Urbano Studio",
      c7: "Bolso Tote Noir",
      c8: "Gorra de la Marca",
      c9: "Tenis Retro",
      c10: "Tenis Nightwalk",
      c11: "Camisa Corte Basico",
      c12: "Camisa Denim Elegante",
      c13: "Pantalon Denim Urbano",
      c14: "Pantalon Monocromo",
      c15: "Bolso Cruzado Mini",
      c16: "Gafas Urbanas",
      c17: "Paso Cometa",
      c18: "Oxford Clasico",
      c19: "Vestido Satinado",
      c20: "Vestido Dreamline",
    },
  },
  en: {
    meta: {
      title: "Desordre | Catalog",
      description: "Desordre product catalog with category and size filters.",
    },
    nav: {
      searchAria: "Search products",
      searchLabel: "Search product",
      searchPlaceholder: "Search pieces",
      languageLabel: "Language",
      accountBtn: "Account",
      accountProfile: "My profile",
      accountOrders: "Orders",
      accountFavorites: "Favorites",
      accountCart: "Cart",
      accountLogout: "Log out",
    },
    catalog: {
      title: "Catalog",
      subtitle: "Explore the full collection and filter by category or size.",
      filtersAria: "Catalog filters",
      categoryLabel: "Category",
      sizeLabel: "Size",
      sizeUnique: "One size",
      empty: "No products found with those filters.",
      addToCart: "Add",
    },
    filters: {
      all: "All",
      calzado: "Shoes",
      camisas: "Shirts",
      pantalones: "Pants",
      accesorios: "Accessories",
    },
    footer: {
      categoriesTitle: "Categories",
      catShoes: "Shoes",
      catShirts: "Shirts",
      catPants: "Pants",
      catAccessories: "Accessories",
      legalTitle: "Legal",
      terms: "Terms and conditions",
      privacy: "Privacy policy",
      about: "About the brand",
      contactTitle: "Contact",
      location: "Paris, France",
      navTitle: "Navigation",
      backHome: "Back to Home",
    },
    modal: {
      close: "Close",
      navAria: "Image navigation",
      prev: "Previous",
      next: "Next",
      hint: "Use keyboard arrows to navigate",
    },
    categories: {
      calzado: "shoes",
      camisas: "shirts",
      pantalones: "pants",
      accesorios: "accessories",
    },
    productNames: {
      c1: "Summer Sneakers",
      c2: "Black Mono Sneakers",
      c3: "Color Pop Shirt",
      c4: "Tailored Collar Shirt",
      c5: "Urban Cargo Pants",
      c6: "Urban Studio Pants",
      c7: "Noir Tote Bag",
      c8: "Brand Cap",
      c9: "Retro Sneakers",
      c10: "Nightwalk Sneakers",
      c11: "Basic Cut Shirt",
      c12: "Elegant Denim Shirt",
      c13: "Urban Denim Pants",
      c14: "Monochrome Pants",
      c15: "Mini Crossbody Bag",
      c16: "Urban Shades",
      c17: "Comet Step",
      c18: "Classic Oxford",
      c19: "Satin Dress",
      c20: "Dreamline Dress",
    },
  },
  fr: {
    meta: {
      title: "Desordre | Catalogue",
      description: "Catalogue de produits Desordre avec filtres par categorie et taille.",
    },
    nav: {
      searchAria: "Rechercher des produits",
      searchLabel: "Rechercher un produit",
      searchPlaceholder: "Rechercher des pieces",
      languageLabel: "Langue",
      accountBtn: "Compte",
      accountProfile: "Mon profil",
      accountOrders: "Commandes",
      accountFavorites: "Favoris",
      accountCart: "Panier",
      accountLogout: "Se deconnecter",
    },
    catalog: {
      title: "Catalogue",
      subtitle: "Explorez la collection complete et filtrez par categorie ou taille.",
      filtersAria: "Filtres du catalogue",
      categoryLabel: "Categorie",
      sizeLabel: "Taille",
      sizeUnique: "Unique",
      empty: "Aucun produit trouve avec ces filtres.",
      addToCart: "Ajouter",
    },
    filters: {
      all: "Toutes",
      calzado: "Chaussures",
      camisas: "Chemises",
      pantalones: "Pantalons",
      accesorios: "Accessoires",
    },
    footer: {
      categoriesTitle: "Categories",
      catShoes: "Chaussures",
      catShirts: "Chemises",
      catPants: "Pantalons",
      catAccessories: "Accessoires",
      legalTitle: "Legal",
      terms: "Conditions generales",
      privacy: "Politique de confidentialite",
      about: "A propos de la marque",
      contactTitle: "Contact",
      location: "Paris, France",
      navTitle: "Navigation",
      backHome: "Retour a l'accueil",
    },
    modal: {
      close: "Fermer",
      navAria: "Navigation des images",
      prev: "Precedent",
      next: "Suivant",
      hint: "Utilisez les fleches du clavier pour naviguer",
    },
    categories: {
      calzado: "chaussures",
      camisas: "chemises",
      pantalones: "pantalons",
      accesorios: "accessoires",
    },
    productNames: {
      c1: "Baskets d'ete",
      c2: "Baskets noires mono",
      c3: "Chemise Color Pop",
      c4: "Chemise col tailleur",
      c5: "Pantalon cargo urbain",
      c6: "Pantalon urbain studio",
      c7: "Sac tote noir",
      c8: "Casquette de marque",
      c9: "Baskets retro",
      c10: "Baskets Nightwalk",
      c11: "Chemise coupe basique",
      c12: "Chemise denim elegante",
      c13: "Pantalon denim urbain",
      c14: "Pantalon monochrome",
      c15: "Mini sac bandouliere",
      c16: "Lunettes urbaines",
      c17: "Pas Comete",
      c18: "Oxford classique",
      c19: "Robe satinee",
      c20: "Robe Dreamline",
    },
  },
};

const LANG_STORAGE_KEY = "desordre-language";
const CART_STORAGE_KEY = "desordre-cart";
const storedLanguage = localStorage.getItem(LANG_STORAGE_KEY);
let currentLanguage = storedLanguage && Object.prototype.hasOwnProperty.call(translations, storedLanguage)
  ? storedLanguage
  : "es";

let lastVisibleProducts = [];
let currentModalIndex = -1;

const grid = document.getElementById("catalog-grid");
const categoryFilter = document.getElementById("category-filter");
const sizeFilter = document.getElementById("size-filter");
const searchInput = document.getElementById("catalog-search");
const accountBtn = document.getElementById("catalog-account-btn");
const accountDropdown = document.getElementById("catalog-account-dropdown");
const languageSelect = document.getElementById("catalog-language");
const modal = document.getElementById("catalog-modal");
const modalImage = document.getElementById("catalog-modal-image");
const modalTitle = document.getElementById("catalog-modal-title");
const modalCloseBtn = document.getElementById("catalog-modal-close");
const modalPrevBtn = document.getElementById("catalog-modal-prev");
const modalNextBtn = document.getElementById("catalog-modal-next");

function t(path) {
  const locale = translations[currentLanguage] || translations.es;
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), locale) ?? path;
}

function formatPrice(value) {
  const locale = currentLanguage === "fr" ? "fr-FR" : currentLanguage === "en" ? "en-US" : "es-ES";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function getProductName(product) {
  const names = t("productNames");
  return typeof names === "object" && names !== null && product.id in names
    ? names[product.id]
    : product.id;
}

function localizeStaticContent() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (!key) {
      return;
    }

    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (!key || !(element instanceof HTMLInputElement)) {
      return;
    }

    element.placeholder = t(key);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");
    if (!key) {
      return;
    }

    element.setAttribute("aria-label", t(key));
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.getAttribute("data-i18n-content");
    if (!key) {
      return;
    }

    element.setAttribute("content", t(key));
  });

  document.title = t("meta.title");
}

function cardTemplate(product) {
  const categoryLabel = t(`categories.${product.category}`);
  const sizeLabel = product.size === "all" ? t("catalog.sizeUnique") : product.size;

  return `
    <li class="catalog-card">
      <div class="catalog-image">
        <img src="${product.image}" alt="${getProductName(product)}" loading="lazy" referrerpolicy="no-referrer" data-product-id="${product.id}" />
      </div>
      <div class="catalog-body">
        <h3>${getProductName(product)}</h3>
        <p class="catalog-meta">${categoryLabel} · ${t("catalog.sizeLabel")} ${sizeLabel}</p>
        <div class="card-row">
          <p class="catalog-price">${formatPrice(product.price)}</p>
          <button class="card-btn card-btn-add" type="button" data-product-id="${product.id}">${t("catalog.addToCart")}</button>
        </div>
      </div>
    </li>
  `;
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

function addProductToCart(productId, quantity = 1) {
  const product = catalogProducts.find((item) => item.id === productId);
  if (!product) {
    return;
  }

  const cartItems = getStoredCart();
  const existing = cartItems.find((item) => item.id === productId);
  const names = {
    es: translations.es.productNames[product.id] || product.id,
    en: translations.en.productNames[product.id] || product.id,
    fr: translations.fr.productNames[product.id] || product.id,
  };

  if (existing) {
    existing.qty += quantity;
  } else {
    cartItems.push({
      id: productId,
      names,
      price: product.price,
      qty: quantity,
      image: product.image,
    });
  }

  saveStoredCart(cartItems);
}

function getFilteredProducts() {
  const category = categoryFilter instanceof HTMLSelectElement ? categoryFilter.value : "all";
  const size = sizeFilter instanceof HTMLSelectElement ? sizeFilter.value : "all";
  const query = searchInput instanceof HTMLInputElement ? searchInput.value.trim().toLowerCase() : "";

  return catalogProducts.filter((product) => {
    const categoryMatch = category === "all" || product.category === category;
    const sizeMatch = size === "all" || product.size === size;
    const searchSource = `${getProductName(product)} ${t(`categories.${product.category}`)}`.toLowerCase();
    const searchMatch = !query || searchSource.includes(query);
    return categoryMatch && sizeMatch && searchMatch;
  });
}

function renderCatalog() {
  if (!(grid instanceof HTMLElement)) {
    return;
  }

  const filtered = getFilteredProducts();
  lastVisibleProducts = filtered;

  if (!filtered.length) {
    grid.innerHTML = `<li class="catalog-empty">${t("catalog.empty")}</li>`;
    return;
  }

  grid.innerHTML = filtered.map((product) => cardTemplate(product)).join("");
}

function toggleAccountMenu(forceOpen) {
  if (!(accountBtn instanceof HTMLButtonElement) || !(accountDropdown instanceof HTMLElement)) {
    return;
  }

  const open = typeof forceOpen === "boolean" ? forceOpen : accountDropdown.hidden;
  accountDropdown.hidden = !open;
  accountBtn.setAttribute("aria-expanded", String(open));
}

function openImageModalAt(index) {
  if (!(modal instanceof HTMLElement) || !(modalImage instanceof HTMLImageElement) || !(modalTitle instanceof HTMLElement)) {
    return;
  }

  if (index < 0 || index >= lastVisibleProducts.length) {
    return;
  }

  const product = lastVisibleProducts[index];
  currentModalIndex = index;
  modalImage.src = product.image;
  modalImage.alt = getProductName(product);
  modalTitle.textContent = getProductName(product);
  modal.hidden = false;

  if (modalCloseBtn instanceof HTMLButtonElement) {
    modalCloseBtn.focus();
  }
}

function openImageModalByProductId(productId) {
  const index = lastVisibleProducts.findIndex((product) => product.id === productId);
  if (index >= 0) {
    openImageModalAt(index);
  }
}

function closeImageModal() {
  if (!(modal instanceof HTMLElement) || !(modalImage instanceof HTMLImageElement) || !(modalTitle instanceof HTMLElement)) {
    return;
  }

  modal.hidden = true;
  modalImage.src = "";
  modalImage.alt = "";
  modalTitle.textContent = "";
  currentModalIndex = -1;
}

function navigateModal(step) {
  if (!(modal instanceof HTMLElement) || modal.hidden || !lastVisibleProducts.length) {
    return;
  }

  const nextIndex = (currentModalIndex + step + lastVisibleProducts.length) % lastVisibleProducts.length;
  openImageModalAt(nextIndex);
}

if (categoryFilter instanceof HTMLSelectElement) {
  categoryFilter.addEventListener("change", renderCatalog);
}

if (sizeFilter instanceof HTMLSelectElement) {
  sizeFilter.addEventListener("change", renderCatalog);
}

if (searchInput instanceof HTMLInputElement) {
  searchInput.addEventListener("input", renderCatalog);
}

if (accountBtn instanceof HTMLButtonElement) {
  accountBtn.addEventListener("click", () => toggleAccountMenu());
}

if (modalCloseBtn instanceof HTMLButtonElement) {
  modalCloseBtn.addEventListener("click", closeImageModal);
}

if (modalPrevBtn instanceof HTMLButtonElement) {
  modalPrevBtn.addEventListener("click", () => navigateModal(-1));
}

if (modalNextBtn instanceof HTMLButtonElement) {
  modalNextBtn.addEventListener("click", () => navigateModal(1));
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
    localizeStaticContent();
    renderCatalog();

    if (currentModalIndex >= 0) {
      openImageModalAt(currentModalIndex);
    }
  });
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const addBtn = target.closest(".card-btn-add");
  if (addBtn instanceof HTMLButtonElement) {
    const productId = addBtn.dataset.productId;
    if (typeof productId === "string" && productId.length > 0) {
      addProductToCart(productId, 1);
      return;
    }
  }

  const clickedImage = target.closest(".catalog-image img");
  if (clickedImage instanceof HTMLImageElement) {
    const productId = clickedImage.dataset.productId;
    if (typeof productId === "string") {
      openImageModalByProductId(productId);
      return;
    }
  }

  if (target === modal) {
    closeImageModal();
    return;
  }

  if (!target.closest(".account-menu")) {
    toggleAccountMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleAccountMenu(false);
    closeImageModal();
    return;
  }

  if (event.key === "ArrowLeft") {
    navigateModal(-1);
    return;
  }

  if (event.key === "ArrowRight") {
    navigateModal(1);
  }
});

localizeStaticContent();
renderCatalog();
