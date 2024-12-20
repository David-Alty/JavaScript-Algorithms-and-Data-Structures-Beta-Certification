const userInput = document.getElementById("search-input");
const submitBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const pokemonImage = document.getElementById("pokemon-image");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";

const fetchData = async () => {
  try {
    const res = await fetch(`${pokeApiUrl}${userInput.value.toLowerCase()}`);
    if (!res.ok) {
      throw new Error("Pokémon not found");
    }
    const data = await res.json();
    displayData(data);
  } catch (err) {
    alert(err.message);
    console.error(err.message);
  }
};

const displayData = (data) => {
  pokemonName.textContent = "";
  pokemonId.textContent = "";
  pokemonWeight.textContent = "";
  pokemonHeight.textContent = "";
  pokemonTypes.innerHTML = "";
  pokemonImage.innerHTML = "";

  pokemonName.textContent = data.name.toUpperCase();
  pokemonId.textContent = `#${data.id}`;

  pokemonWeight.textContent = `Weight: ${data.weight}`;
  pokemonHeight.textContent = `Height: ${data.height}`;

  const img = document.createElement("img");
  img.id = "sprite";
  img.src = data.sprites.front_default;
  img.alt = data.name;
  pokemonImage.appendChild(img);

  data.types.forEach((typeInfo) => {
    const type = document.createElement("span");
    type.textContent = typeInfo.type.name.toUpperCase();
    pokemonTypes.appendChild(type);
  });

  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAttack.textContent = data.stats[3].base_stat;
  specialDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;
};

submitBtn.addEventListener("click", fetchData);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchData();
  }
});
