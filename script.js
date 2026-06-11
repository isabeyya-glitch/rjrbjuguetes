const WHATSAPP_NUMBER = "56940248567";

const categories = [
  {
    id: "Todos",
    label: "Todos",
    title: "Todos los productos",
    description: "Catalogo completo de juguetes mayoristas con precios en CLP e IVA incluido.",
  },
  {
    id: "Exterior",
    label: "Exterior",
    title: "Juguetes de exterior",
    description: "Piscinas de pelotas, carpas, camas elasticas, resbalines y columpios.",
  },
  {
    id: "Bebes",
    label: "Bebes",
    title: "Bebes y primera infancia",
    description: "Andadores, triciclos, correpasillos y productos para movimiento inicial.",
  },
  {
    id: "Autos",
    label: "Autos",
    title: "Autos a bateria",
    description: "Autos electricos infantiles, modelos bluetooth y formatos pequenos.",
  },
  {
    id: "Motos",
    label: "Motos",
    title: "Motos y cuatrimotos",
    description: "Motos, cuatrimotos y juguetes electricos de 6V o 12V.",
  },
];

const products = [
  {
    name: "Columpio c/ resbalin rosado",
    category: "Exterior",
    price: 55000,
    unit: "/U",
    packaging: "Embalaje: 1 U",
    image: "product-33.jpg",
  },
  {
    name: "Columpio c/ resbalin azul",
    category: "Exterior",
    price: 55000,
    unit: "/U",
    packaging: "Embalaje: 1 U",
    image: "product-34.jpg",
  },
  {
    name: "Piscina de pelota con football",
    category: "Exterior",
    price: 20000,
    unit: "/U",
    packaging: "Embalaje: 1 U",
    image: "product-01.jpg",
  },
  {
    name: "Piscina de pelotas",
    category: "Exterior",
    price: 7000,
    unit: "/U",
    packaging: "Embalaje: 1 U · 125 x 125 x 65 cm",
    image: "product-02.jpg",
  },
  {
    name: "Piscina de pelotas",
    category: "Exterior",
    price: 6000,
    unit: "/U",
    packaging: "Embalaje: 1 U",
    image: "product-03.jpg",
  },
  {
    name: "Cama elastica",
    category: "Exterior",
    price: 26000,
    unit: "/U",
    packaging: "50 kg · 120 x 110 x 120 cm · Embalaje: 1 U",
    image: "product-08.jpg",
  },
  {
    name: "Proyector inteligente",
    category: "Bebes",
    price: 5000,
    unit: "/U",
    packaging: "Embalaje: 1 U",
    image: "product-07.jpg",
  },
  {
    name: "Carpa de casa",
    category: "Exterior",
    price: 6000,
    unit: "/U",
    packaging: "Colores surtidos · 205 x 115 x 145 cm · Embalaje: 1 U",
    image: "product-04.jpg",
  },
  {
    name: "Triciclo 818",
    category: "Bebes",
    price: 35000,
    unit: "/U",
    packaging: "Embalaje: 3 U",
    image: "product-09.jpg",
  },
  {
    name: "Triciclo metal luz y musica",
    category: "Bebes",
    price: 27000,
    unit: "/U",
    packaging: "Embalaje: 3 U",
    image: "product-05.jpg",
  },
  {
    name: "Triciclo 818 musical",
    category: "Bebes",
    price: 33000,
    unit: "/U",
    packaging: "Embalaje: 3 U",
    image: "product-06.jpg",
  },
  {
    name: "Resbalin y columpio",
    category: "Exterior",
    price: 60000,
    unit: "/U",
    packaging: "Juego infantil para patio · con 200 pelotas",
    image: "product-15.jpg",
  },
  {
    name: "Auto a Bateria 588",
    category: "Autos",
    price: 170000,
    unit: "/U",
    packaging: "12V 7A Bateria",
    image: "product-16.jpg",
  },
  {
    name: "Pelota saco",
    category: "Exterior",
    price: 80000,
    unit: "/U",
    packaging: "Saco 2.000 U",
    image: "product-10.jpg",
  },
  {
    name: "Andador 4 en 1",
    category: "Bebes",
    price: 15000,
    unit: "/U",
    packaging: "Embalaje: 1 U",
    image: "product-11.jpg",
  },
  {
    name: "Andador 805",
    category: "Bebes",
    price: 12000,
    unit: "/U",
    packaging: "Embalaje: 6 U",
    image: "product-12.jpg",
  },
  {
    name: "Andador perrito 806",
    category: "Bebes",
    price: 12000,
    unit: "/U",
    packaging: "Embalaje: 6 U",
    image: "product-14.jpg",
  },
  {
    name: "Andador 525",
    category: "Bebes",
    price: 12000,
    unit: "/U",
    packaging: "Embalaje: 7 U",
    image: "product-13.jpg",
  },
  {
    name: "Auto a bateria 8688",
    category: "Autos",
    price: 175000,
    unit: "/U",
    packaging: "12V7A · bateria 1",
    image: "product-17.jpg",
  },
  {
    name: "Auto G65 bateria bluetooth",
    category: "Autos",
    price: 100000,
    unit: "/U",
    packaging: "120 x 70 x 65 cm · 06V Bateria",
    image: "product-18.jpg",
  },
  {
    name: "Auto a bateria 5199",
    category: "Autos",
    price: 175000,
    unit: "/U",
    packaging: "120 x 70 x 65 cm · 12V 7A Bateria",
    image: "product-19.jpg",
  },
  {
    name: "Auto a bateria 810",
    category: "Autos",
    price: 150000,
    unit: "/U",
    packaging: "125 x 81 x 79 cm · 12V 7A Bateria",
    image: "product-20.jpg",
  },
  {
    name: "Auto a bateria bluetooth M5",
    category: "Autos",
    price: 180000,
    unit: "/U",
    packaging: "125 x 81 x 79 cm · 12V 7A Bateria",
    image: "product-23.jpg",
  },
  {
    name: "Cuatrimoto",
    category: "Motos",
    price: 32000,
    unit: "/U",
    packaging: "Bateria V6",
    image: "product-30.jpg",
  },
  {
    name: "Auto a bateria 8808",
    category: "Autos",
    price: 190000,
    unit: "/U",
    packaging: "134 x 84 x 73 cm · 12V7A",
    image: "product-21.jpg",
  },
  {
    name: "Moto V5R",
    category: "Motos",
    price: 105000,
    unit: "/U",
    packaging: "Embalaje: 1 · 12V7A",
    image: "product-22.jpg",
  },
  {
    name: "Auto 803 bateria y bluetooth",
    category: "Autos",
    price: 110000,
    unit: "/U",
    packaging: "112 x 74 x 66 cm · Embalaje: 1 U",
    image: "product-24.jpg",
  },
  {
    name: "Auto 802 bateria bluetooth",
    category: "Autos",
    price: 85000,
    unit: "/U",
    packaging: "115 x 70 x 50 cm · Embalaje: 1 U",
    image: "product-25.jpg",
  },
  {
    name: "Auto a bateria 901 pequeno",
    category: "Autos",
    price: 80000,
    unit: "/U",
    packaging: "112 x 74 x 66 cm · Embalaje: 1 U",
    image: "product-26.jpg",
  },
  {
    name: "Auto a bateria 9888 bluetooth",
    category: "Autos",
    price: 85000,
    unit: "/U",
    packaging: "112 x 74 x 66 cm · Embalaje: 1 U",
    image: "product-27.jpg",
  },
  {
    name: "Auto 519 bateria V6",
    category: "Autos",
    price: 65000,
    unit: "/U",
    packaging: "100 x 53 x 30 cm · Embalaje: 1 U",
    image: "product-28.jpg",
  },
  {
    name: "Correpasillo",
    category: "Bebes",
    price: 35000,
    unit: "/U",
    packaging: "Embalaje: 1 U",
    image: "product-29.jpg",
  },
  {
    name: "Moto V602 bateria V6",
    category: "Motos",
    price: 55000,
    unit: "/U",
    packaging: "Embalaje: 1",
    image: "product-31.jpg",
  },
  {
    name: "Cuatrimoto 6 ruedas",
    category: "Motos",
    price: 100000,
    unit: "/U",
    packaging: "Embalaje: 1 · bateria 6V",
    image: "product-32.jpg",
  },
];

let currentView = "home";
let currentCategory = "Todos";

const grid = document.querySelector("[data-product-grid]");
const searchInput = document.querySelector("[data-search]");
const productInterest = document.querySelector("[data-product-interest]");
const drawer = document.querySelector("[data-drawer]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const title = document.querySelector("[data-category-title]");
const description = document.querySelector("[data-category-description]");
const sidebarMenu = document.querySelector("[data-sidebar-menu]");
const drawerMenu = document.querySelector("[data-category-menu]");

const money = new Intl.NumberFormat("es-CL", {
  currency: "CLP",
  maximumFractionDigits: 0,
  style: "currency",
});

function clean(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function categoryCount(id) {
  return id === "Todos" ? products.length : products.filter((product) => product.category === id).length;
}

function quoteUrl(name) {
  const message = name
    ? `Hola, quiero cotizar este producto: ${name}.`
    : "Hola, quiero solicitar el catalogo mayorista de juguetes.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderMenus() {
  const html = categories
    .map(
      (category) => `
        <button class="${category.id === currentCategory ? "active" : ""}" type="button" data-category="${category.id}">
          <span>${category.label}</span>
          <span>${categoryCount(category.id)}</span>
        </button>
      `,
    )
    .join("");
  sidebarMenu.innerHTML = html;
  drawerMenu.innerHTML = html;
}

function renderProducts() {
  const term = clean(searchInput.value.trim());
  const items = products.filter((product) => {
    const inCategory = currentCategory === "Todos" || product.category === currentCategory;
    const inSearch = !term || clean(`${product.name} ${product.category} ${product.packaging}`).includes(term);
    return inCategory && inSearch;
  });

  grid.innerHTML = items
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-photo">
            <img src="./assets/catalog/${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <span class="product-price">${money.format(product.price)} ${product.unit}</span>
            <span class="product-category">${product.category}</span>
            <p class="product-meta">${product.packaging}</p>
            <div class="product-bottom">
              <a class="quote-link" href="${quoteUrl(product.name)}" target="_blank" rel="noreferrer" data-product="${product.name}">Cotizar</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function updateCategory(id) {
  currentCategory = id;
  const category = categories.find((item) => item.id === id) || categories[0];
  title.textContent = category.title;
  description.textContent = category.description;
  searchInput.value = "";
  renderMenus();
  renderProducts();
  showView("catalog");
  closeMenu();
}

function showView(name) {
  currentView = name;
  document.querySelectorAll("[data-view]").forEach((page) => {
    page.classList.toggle("active", page.dataset.view === currentView);
  });
  document.querySelectorAll("[data-view-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.viewLink === currentView);
  });
  window.scrollTo(0, 0);
}

function openMenu() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

document.addEventListener("click", (event) => {
  const route = event.target.closest("[data-view-link]");
  if (route) {
    event.preventDefault();
    showView(route.dataset.viewLink);
    return;
  }

  const category = event.target.closest("[data-category]");
  if (category) {
    updateCategory(category.dataset.category);
    return;
  }

  if (event.target.closest("[data-menu-toggle]") || event.target.closest("[data-menu-open]")) {
    openMenu();
    return;
  }

  if (event.target.closest("[data-close-menu]") || event.target === drawer) {
    closeMenu();
  }
});

searchInput.addEventListener("input", renderProducts);

grid.addEventListener("click", (event) => {
  const quote = event.target.closest("[data-product]");
  if (quote && productInterest) productInterest.value = quote.dataset.product;
});

document.querySelector("[data-lead-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    "Hola, quiero cotizar juguetes al por mayor.",
    "",
    `Nombre/empresa: ${data.get("name") || "No indicado"}`,
    `WhatsApp: ${data.get("phone") || "No indicado"}`,
    `Producto: ${data.get("product") || "No indicado"}`,
    `Cantidad: ${data.get("quantity") || "No indicado"}`,
    "Necesito confirmar disponibilidad y precio final.",
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelector("[data-product-count]").textContent = products.length;
renderMenus();
updateCategory("Todos");
showView("home");
