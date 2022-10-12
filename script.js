const jokeContainer = document.querySelector(".joke");
const btn = document.querySelector(".btn");

const jokeGenrator = () => {
    return new Promise((resolve ,reject) =>{
        resolve
        (fetch("https://api.chucknorris.io/jokes/random")
    .then(
        (response) => {
        return response.json()
    })
    .then((data) => {
        return jokeContainer.innerHTML = data.value;
        // console.log(data.value)

    })).catch(console.error("something went wrong"));

        })
}

btn.addEventListener("click", jokeGenrator);
