// תרגיל אחד 

// const gettingPokemonName = document.getElementById("gettingPokemonName");
// const sendingRequest = document.getElementById("SendingRequest");

// const pokemonName = document.getElementById("pokemonName")
// const pokemonImg = document.getElementById("pokemonImg")

// sendingRequest.addEventListener("click", async function(evn) {
//     evn.preventDefault();
//     if (gettingPokemonName.value !== "") {
//         try {
//             const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${gettingPokemonName.value}`);
//             const data = await response.json()
//             pokemonName.textContent = data.name
//             pokemonImg.src = data.sprites.front_default
//         } catch (error) {
//             console.log("error")
//         }
//     } else {
//         console.log("enter text")
//     }
// });


// תרגיל שני ושלישי
// const ul = document.getElementById("myList")
// const list = Array.from(ul.querySelectorAll("li"))

// console.log(list[0].parentElement) 
// console.log(list[0].children)
// console.log(ul.firstElementChild)
// console.log(list[1].previousElementSibling)
// console.log(list[1].nextElementSibling)
// console.log(ul.lastElementChild)
