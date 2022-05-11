const app = {
  init: function () {
    app.getAllPokemon();
    app.toggleMenu();
  },

  getAllPokemon: async function () {
    try {
      const response = await fetch("http://localhost:3000/list");
      const pokeData = await response.json();

      for (const pokemon of pokeData) {
        app.insertPokemonInDOM(pokemon);
      }
    } catch (error) {
      console.error(error);
    }
  },

  insertPokemonInDOM: function (pokemon) {
    // Recupération et clonage du template
    const template = document.getElementById("pokemon");
    const cloneTemplate = template.content.cloneNode(true);

    const name = cloneTemplate.querySelector(".item__info span");
    name.textContent = pokemon.name;
    const number = cloneTemplate.querySelector(".item__number span");
    number.textContent = `# ${pokemon.id}`;
    const illustration = cloneTemplate.querySelector(".item__pic img");
    illustration.src = pokemon.illustration;
    illustration.alt = `illustration de ${pokemon.name}`;
    const type = cloneTemplate.querySelector(".item__info img");
    if (pokemon.type === "feu") {
      type.src = "./img/feu.png";
    } else if (pokemon.type === "eau") {
      type.src = "./img/eau.png";
    } else if (pokemon.type === "plante") {
      type.src = "./img/plante.png";
    }
    type.alt = `Logo du type ${pokemon.type}`;

    document.querySelector(".menu__list--hidden").appendChild(cloneTemplate);
  },

  toggleMenu: function () {
    const button = document.querySelector(".navbar button");
    const menu = document.getElementsByClassName("menu__list")[0];

    button.addEventListener("click", () => {
      menu.classList.toggle("menu__list--hidden");
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init);
