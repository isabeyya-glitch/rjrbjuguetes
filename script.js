const WHATSAPP_NUMBER = "56940248567";

const products = [
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
    packaging: "Embalaje: 1 U · 125 x 125 x 65 cm ",
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
    name: "Cama elástica",
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
    name: "Auto a Batería 588",
    category: "Autos",
    price: 170000,
    unit: "/U",
    packaging: "12V 7A Batería",
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
    packaging: "120 x 70 x 65 cm · 06V Batería",
    image: "product-18.jpg",
  },
  {
    name: "Auto a bateria 5199",
    category: "Autos",
    price: 175000,
    unit: "/U",
    packaging: "120 x 70 x 65 cm · 12V 7A Batería",
    image: "product-19.jpg",
  },
  {
    name: "Auto a bateria 810",
    category: "Autos",
    price: 150000,
    unit: "/U",
    packaging: "125 x 81 x 79 cm · 12V 7A Batería",
    image: "product-20.jpg",
  },
  {
    name: "Auto a bateria bluetooth M5",
    category: "Autos",
    price: 180000,
    unit: "/U",
    packaging: "125 x 81 x 79 cm · 12V 7A Batería",
    image: "product-23.jpg",
  },
  {
    name: "Cuatrimoto",
    category: "Motos",
    price: 32000,
    unit: "/U",
    packaging: "Batería V6",
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

let activeCategory = "Todos";
const grid = document.querySelector("[data-product-grid]");
const searchInput = document.querySelector("[data-search]");
const productInterest = document.querySelector("[data-product-interest]");

const money = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function quoteUrl(productName = "") {
  const message = productName
    ? `Hola, quiero cotizar este producto del catalogo: ${productName}.`
    : "Hola, quiero solicitar el catalogo mayorista de juguetes.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const term = normalize(searchInput.value.trim());
  const visible = products.filter((product) => {
    const categoryMatch = activeCategory === "Todos" || product.category === activeCategory;
    const textMatch = !term || normalize(`${product.name} ${product.category} ${product.packaging}`).includes(term);
    return categoryMatch && textMatch;
  });

  grid.innerHTML = visible
    .map(
      (product) => `
        <article class="product-card">
          <img src="./assets/catalog/${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-body">
            <div class="product-topline">
              <h3>${product.name}</h3>
              <span class="category-pill">${product.category}</span>
            </div>
            <p class="product-meta">${product.packaging}</p>
            <div class="price-row">
              <div>
                <span class="price">${money.format(product.price)}</span>
                <span class="unit">${product.unit}</span>
              </div>
              <a class="quote-link" href="${quoteUrl(product.name)}" target="_blank" rel="noreferrer" data-product="${product.name}">Cotizar</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

document.querySelector("[data-filters]").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  activeCategory = button.dataset.category;
  document.querySelectorAll("[data-filters] button").forEach((item) => item.classList.toggle("active", item === button));
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);

grid.addEventListener("click", (event) => {
  const quote = event.target.closest("[data-product]");
  if (!quote || !productInterest) return;
  productInterest.value = quote.dataset.product;
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

renderProducts();
