const grid = document.getElementById("charactersGrid");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

const searchName = document.getElementById("searchName");
const searchStatus = document.getElementById("searchStatus"); // mejora para buscar por estado (vivo, muerto, desconocido)
const searchSpecies = document.getElementById("searchSpecies"); // mejora para buscar por especie");

let allCharacters = [];

async function loadCharacters() {
  loading.style.display = "block";
  error.textContent = "";
  grid.innerHTML = "";

  try {
    const res = await fetch("http://localhost/rick-morty-app/backend/api/characters.php");
    const data = await res.json();

    if (!data.success) {
      throw new Error("Error al obtener datos");
    }

    allCharacters = data.data;
    renderCharacters(allCharacters);

  } catch (e) {
    error.textContent = "Error al cargar personajes";
  }

  loading.style.display = "none";
}

function renderCharacters(list) {
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `<p class="message">Sin resultados</p>`;
    return;
  }

  list.forEach(char => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${char.image}">
      <div class="card-body">
        <h2>${char.name}</h2>
        <p><strong>Especie:</strong> ${char.species}</p>
        <p><strong>Estado:</strong> ${char.status}</p>
      </div>
    `;

    grid.appendChild(div);
  });
}

// Filtro por nombre
searchName.addEventListener("input", () => {
  const text = searchName.value.toLowerCase();

  const result = allCharacters.filter(c =>
    c.name.toLowerCase().includes(text)
  );

  renderCharacters(result);
});

// Filtro por estado, mejora para buscar por estado (vivo, muerto, desconocido)
/*
searchStatus.addEventListener("input", () => {
  const text = searchStatus.value.toLowerCase();

  const result = allCharacters.filter(c =>
    c.status.toLowerCase().includes(text)
  );

  renderCharacters(result);
});

// Filtro por especie, mejora para buscar por estado (vivo, muerto, desconocido)

searchSpecies.addEventListener("input", () => {
  const text = searchSpecies.value.toLowerCase();

  const result = allCharacters.filter(c =>
    c.species.toLowerCase().includes(text)
  );

  renderCharacters(result);
});
*/

loadCharacters();