
const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const apiKey = "ZGee9pAWlx1/6HjBde3JJA==CZllzIinEJuOTNy4"
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

async function getJoke(){
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
    
        const response = await fetch(apiURL, options);
        const data = await response.json();
        jokeEl.innerText = data[0].joke;
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        
        console.log(error);
    }

}

btnEl.addEventListener("click", getJoke)