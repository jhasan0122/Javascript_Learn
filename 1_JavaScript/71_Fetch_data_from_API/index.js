
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could bot fetch resource");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data.name);
//         console.log(data.weight);
//         console.log(data.id);
//     })
//     .catch(error => console.log(error));



async function fetchData() {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imagElement = document.getElementById("pokemonSprite");
        imagElement.src = pokemonSprite;
        imagElement.style.display = "block";
    }
    catch (error){
        console.log(error);
    }
}

fetchData();