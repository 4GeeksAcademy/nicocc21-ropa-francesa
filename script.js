const products = [
  {
    id: "n1",
    name: "Bomber Cromatica",
    line: "Nuevo drop",
    price: 169,
    visual: "linear-gradient(130deg, #3e0b1d 0%, #9d1838 55%, #161824 100%)",
    tags: "bomber goth rojo negro",
    type: "new",
    images: [
      {
        src: "assets/images/concepto-estilo-vida-personas-modelo-moda-hombre-guapo_118342-32194.webp",
        alt: "Bomber negra vista frontal",
      },
      {
        src: "assets/images/depositphotos_21435719-stock-photo-sexy-man-and-woman-dressed.webp",
        alt: "Bomber negra vista lateral",
      },
      {
        src: "assets/images/young-woman-man-wearing-blank-600nw-2692295445.webp",
        alt: "Bomber negra vista trasera",
      },
    ],
  },
  {
    id: "n2",
    name: "Bolso Noir Tote",
    line: "Nuevo drop",
    price: 74,
    visual: "linear-gradient(130deg, #101015 0%, #2e1a2b 50%, #6d0f28 100%)",
    tags: "bolso tote negro minimal urbano",
    type: "new",
    images: [
      {
        src: "assets/images/bolso.webp",
        alt: "Bolso negro minimal en primer plano",
      },
      {
        src: "assets/images/ropa-de-moda-femenina-plana-lay-cuadrado.webp",
        alt: "Top tejido oscuro vista lateral",
      },
      {
        src: "assets/images/fashion-2208045__340.webp",
        alt: "Top tejido oscuro vista trasera",
      },
    ],
  },
  {
    id: "n3",
    name: "Vestido Shadow Slip",
    line: "Nuevo drop",
    price: 129,
    visual: "linear-gradient(130deg, #2f2832 0%, #4d3a40 42%, #7a1a2f 100%)",
    tags: "vestido oscuro elegante urbano",
    type: "new",
    images: [
      {
        src: "assets/images/vestido.webp",
        alt: "Vestido oscuro de corte urbano",
      },
      {
        src: "assets/images/63217870-prendas-de-vestir-y-accesorios-para-hombres-y-mujeres-listos-para-viajar-estilo-de-vida.webp",
        alt: "Pantalon cargo oscuro vista lateral",
      },
      {
        src: "assets/images/a200e4deb28e47c48330a94e453bdec8.webp",
        alt: "Pantalon cargo oscuro vista trasera",
      },
    ],
  },
  {
    id: "b1",
    name: "Look Studio Hombre",
    line: "Best seller",
    price: 189,
    visual: "linear-gradient(130deg, #11131a 0%, #202636 58%, #6e1f35 100%)",
    tags: "hombre look estudio capas",
    type: "best",
    images: [
      {
        src: "assets/images/feliz-caballero-bien-vestido-tener-fotos-en-el-estudio.webp",
        alt: "Hombre bien vestido en estudio",
      },
    ],
  },
  {
    id: "b2",
    name: "Camisa Color Pop",
    line: "Best seller",
    price: 52,
    visual: "linear-gradient(130deg, #210f18 0%, #6f1630 65%, #b02448 100%)",
    tags: "mujer camisa colorida urbana",
    type: "best",
    images: [
      {
        src: "assets/images/fashionable-woman-in-colorful-shirt.webp",
        alt: "Mujer con camisa colorida en retrato",
      },
    ],
  },
  {
    id: "b3",
    name: "Vestido Dreamline",
    line: "Best seller",
    price: 118,
    visual: "linear-gradient(130deg, #242129 0%, #4a3d4d 52%, #7a6f82 100%)",
    tags: "vestido urbano elegante",
    type: "best",
    images: [
      {
        src: "assets/images/vestido-y-listo-para-ir-tras-mis-sueños.webp",
        alt: "Vestido moderno de estilo urbano",
      },
    ],
  },
];

const searchInput = document.getElementById("search-input");
const newList = document.getElementById("new-list");
const bestList = document.getElementById("best-list");
const accountBtn = document.getElementById("account-btn");
const accountDropdown = document.getElementById("account-dropdown");
const languageSelect = document.getElementById("language-select");
const productModal = document.getElementById("product-modal");
const productModalClose = document.getElementById("product-modal-close");
const productModalTitle = document.getElementById("product-modal-title");
const productModalImage = document.getElementById("product-modal-image");

const translations = {
  es: {
    nav: {
      searchLabel: "Buscar producto",
      searchPlaceholder: "Buscar prendas, colores o colecciones",
      languageLabel: "Idioma",
      accountBtn: "Cuenta",
      accountProfile: "Mi perfil",
      accountOrders: "Pedidos",
      accountFavorites: "Favoritos",
      accountCart: "Carrito",
      accountLogout: "Cerrar sesion",
    },
    hero: {
      badge: "Campana destacada",
      title: "Color en movimiento para una nueva generacion urbana",
      copy: "Descubre la linea mas vibrante de la temporada: siluetas modernas, materiales comodos y combinaciones visuales con mucha energia.",
      cta: "Ver lanzamientos",
      catalogCta: "Ir al catalogo",
    },
    sections: {
      newTitle: "Nuevos lanzamientos",
      newDesc: "Las piezas recien llegadas a la coleccion.",
      bestTitle: "Mas vendidos",
      bestDesc: "Los favoritos de la comunidad esta semana.",
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
      workTitle: "Trabaja con nosotros",
      workCta: "Ir a registro",
    },
    product: {
      view: "Ver",
      add: "Agregar",
      newLine: "Nuevo drop",
      bestLine: "Best seller",
      noNew: "No hay resultados en nuevos lanzamientos.",
      noBest: "No hay resultados en mas vendidos.",
      names: {
        n1: "Bomber Cromatica",
        n2: "Bolso Noir Tote",
        n3: "Vestido Shadow Slip",
        b1: "Look Studio Hombre",
        b2: "Camisa Color Pop",
        b3: "Vestido Dreamline",
      },
    },
    modal: {
      close: "Cerrar",
    },
  },
  en: {
    nav: {
      searchLabel: "Search product",
      searchPlaceholder: "Search pieces, colors, or collections",
      languageLabel: "Language",
      accountBtn: "Account",
      accountProfile: "My profile",
      accountOrders: "Orders",
      accountFavorites: "Favorites",
      accountCart: "Cart",
      accountLogout: "Log out",
    },
    hero: {
      badge: "Featured campaign",
      title: "Color in motion for a new urban generation",
      copy: "Discover the season's most vibrant line: modern silhouettes, comfortable materials, and high-energy visual combinations.",
      cta: "View releases",
      catalogCta: "Go to catalog",
    },
    sections: {
      newTitle: "New arrivals",
      newDesc: "The latest pieces added to the collection.",
      bestTitle: "Best sellers",
      bestDesc: "The community favorites this week.",
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
      workTitle: "Work with us",
      workCta: "Go to registration",
    },
    product: {
      view: "View",
      add: "Add",
      newLine: "New drop",
      bestLine: "Best seller",
      noNew: "No results in new arrivals.",
      noBest: "No results in best sellers.",
      names: {
        n1: "Chromatic Bomber",
        n2: "Noir Tote Bag",
        n3: "Shadow Slip Dress",
        b1: "Studio Man Layer",
        b2: "Color Pop Shirt",
        b3: "Dreamline Dress",
      },
    },
    modal: {
      close: "Close",
    },
  },
  fr: {
    nav: {
      searchLabel: "Rechercher un produit",
      searchPlaceholder: "Rechercher des pieces, couleurs ou collections",
      languageLabel: "Langue",
      accountBtn: "Compte",
      accountProfile: "Mon profil",
      accountOrders: "Commandes",
      accountFavorites: "Favoris",
      accountCart: "Panier",
      accountLogout: "Se deconnecter",
    },
    hero: {
      badge: "Campagne a la une",
      title: "La couleur en mouvement pour une nouvelle generation urbaine",
      copy: "Decouvrez la ligne la plus vibrante de la saison: silhouettes modernes, matieres confortables et combinaisons visuelles pleines d'energie.",
      cta: "Voir les sorties",
      catalogCta: "Aller au catalogue",
    },
    sections: {
      newTitle: "Nouveautes",
      newDesc: "Les pieces recemment ajoutees a la collection.",
      bestTitle: "Meilleures ventes",
      bestDesc: "Les favoris de la communaute cette semaine.",
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
      workTitle: "Travaillez avec nous",
      workCta: "Aller a l'inscription",
    },
    product: {
      view: "Voir",
      add: "Ajouter",
      newLine: "Nouveau drop",
      bestLine: "Best seller",
      noNew: "Aucun resultat dans les nouveautes.",
      noBest: "Aucun resultat dans les meilleures ventes.",
      names: {
        n1: "Bomber Chromatique",
        n2: "Sac Tote Noir",
        n3: "Robe Shadow Slip",
        b1: "Look Studio Homme",
        b2: "Chemise Color Pop",
        b3: "Robe Dreamline",
      },
    },
    modal: {
      close: "Fermer",
    },
  },
};

const LANG_STORAGE_KEY = "desordre-language";
const CART_STORAGE_KEY = "desordre-cart";
const storedLanguage = localStorage.getItem(LANG_STORAGE_KEY);
let currentLanguage = storedLanguage && Object.prototype.hasOwnProperty.call(translations, storedLanguage)
  ? storedLanguage
  : "es";
let currentModalProductId = null;
let searchDebounceId = null;

function t(path) {
  const locale = translations[currentLanguage] || translations.es;
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), locale) ?? path;
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
}

function getProductName(product) {
  const names = t("product.names");
  if (typeof names === "object" && names !== null && product.id in names) {
    return names[product.id];
  }

  return product.name;
}

function getProductLine(product) {
  return product.type === "new" ? t("product.newLine") : t("product.bestLine");
}

function getProductImage(product) {
  if (!Array.isArray(product.images) || !product.images.length) {
    return null;
  }

  return product.images[0];
}

function getProductById(productId) {
  return products.find((product) => product.id === productId) || null;
}

function formatPrice(value) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function cardTemplate(product, imageLoading = "lazy", imageFetchPriority = "auto") {
  const hasImages = Array.isArray(product.images) && product.images.length > 0;
  const firstImage = hasImages ? product.images[0] : null;
  const productName = getProductName(product);
  const productLine = getProductLine(product);
  const imagePanel = hasImages
    ? `
      <div class="card-image card-image-gallery">
        <img src="${firstImage.src}" alt="${firstImage.alt}" width="960" height="1200" loading="${imageLoading}" fetchpriority="${imageFetchPriority}" decoding="async" referrerpolicy="no-referrer" />
      </div>
    `
    : `<div class="card-image" style="background: ${product.visual}"></div>`;

  return `
    <article class="product-card">
      ${imagePanel}
      <div class="card-body">
        <h3>${productName}</h3>
        <p class="card-meta">${productLine}</p>
        <div class="card-row">
          <span class="price">${formatPrice(product.price)}</span>
          <div class="card-actions">
            <button class="card-btn" type="button" data-product-id="${product.id}">${t("product.view")}</button>
            <button class="card-btn card-btn-add" type="button" data-product-id="${product.id}">${t("product.add")}</button>
          </div>
        </div>
      </div>
    </article>
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

function getProductNames(product) {
  return {
    es: translations.es.product.names[product.id] || product.name,
    en: translations.en.product.names[product.id] || product.name,
    fr: translations.fr.product.names[product.id] || product.name,
  };
}

function addProductToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (!product) {
    return;
  }

  const image = getProductImage(product);
  const cartItems = getStoredCart();
  const existing = cartItems.find((item) => item.id === productId);

  if (existing) {
    existing.qty += quantity;
  } else {
    cartItems.push({
      id: productId,
      names: getProductNames(product),
      price: product.price,
      qty: quantity,
      image: image ? image.src : "",
    });
  }

  saveStoredCart(cartItems);
}

function openProductModal(productId) {
  if (!(productModal instanceof HTMLElement) || !(productModalImage instanceof HTMLImageElement) || !(productModalTitle instanceof HTMLElement)) {
    return;
  }

  const product = getProductById(productId);
  if (!product) {
    return;
  }

  const image = getProductImage(product);
  if (!image) {
    return;
  }

  currentModalProductId = productId;
  productModalTitle.textContent = getProductName(product);
  productModalImage.src = image.src;
  productModalImage.alt = image.alt;
  productModal.hidden = false;
  if (productModalClose instanceof HTMLButtonElement) {
    productModalClose.focus();
  }
}

function closeProductModal() {
  if (!(productModal instanceof HTMLElement) || !(productModalImage instanceof HTMLImageElement) || !(productModalTitle instanceof HTMLElement)) {
    return;
  }

  productModal.hidden = true;
  productModalImage.src = "";
  productModalImage.alt = "";
  productModalTitle.textContent = "";
  currentModalProductId = null;
}

function refreshModalContent() {
  if (currentModalProductId === null) {
    return;
  }

  const product = getProductById(currentModalProductId);
  if (!product || !(productModalTitle instanceof HTMLElement)) {
    return;
  }

  productModalTitle.textContent = getProductName(product);
}

function renderTrack(container, items, emptyMessage) {
  container.innerHTML = "";

  if (!items.length) {
    container.innerHTML = `<li class="empty-search">${emptyMessage}</li>`;
    return;
  }

  const fragment = document.createDocumentFragment();

  items.forEach((product, index) => {
    const li = document.createElement("li");
    const loading = index === 0 ? "eager" : "lazy";
    const fetchPriority = index === 0 ? "high" : "auto";
    li.innerHTML = cardTemplate(product, loading, fetchPriority);
    fragment.appendChild(li);
  });

  container.appendChild(fragment);
}

function renderProducts(searchTerm = "") {
  const query = searchTerm.trim().toLowerCase();
  const visible = products.filter((product) => {
    if (!query) {
      return true;
    }

    const source = `${getProductName(product)} ${product.tags} ${getProductLine(product)}`.toLowerCase();
    return source.includes(query);
  });

  const news = visible.filter((item) => item.type === "new");
  const best = visible.filter((item) => item.type === "best");

  renderTrack(newList, news, t("product.noNew"));
  renderTrack(bestList, best, t("product.noBest"));
}

function toggleAccountMenu(forceOpen) {
  const open = typeof forceOpen === "boolean" ? forceOpen : accountDropdown.hidden;
  accountDropdown.hidden = !open;
  accountBtn.setAttribute("aria-expanded", String(open));
}

searchInput.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  window.clearTimeout(searchDebounceId);
  searchDebounceId = window.setTimeout(() => {
    renderProducts(target.value);
  }, 120);
});

accountBtn.addEventListener("click", () => {
  toggleAccountMenu();
});

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
    renderProducts(searchInput.value);
    refreshModalContent();
  });
}

if (productModalClose instanceof HTMLButtonElement) {
  productModalClose.addEventListener("click", () => {
    closeProductModal();
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

  const viewBtn = target.closest(".card-btn");
  if (viewBtn instanceof HTMLButtonElement) {
    const productId = viewBtn.dataset.productId;
    if (typeof productId === "string" && productId.length > 0) {
      openProductModal(productId);
      return;
    }
  }

  if (target === productModal) {
    closeProductModal();
    return;
  }

  if (!target.closest(".account-menu")) {
    toggleAccountMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleAccountMenu(false);
    closeProductModal();
  }
});

localizeStaticContent();
renderProducts();
