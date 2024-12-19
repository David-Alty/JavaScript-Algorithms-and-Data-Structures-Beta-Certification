const pokeman = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const fetchData = async () =>{
    try {
        const res = await fetch(pokeman);
        const data = await res.json();
        console.log(data);
    }
    catch (err) {
            console.log("The request was rejected!")
    }
};
fetchData();