import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom";

function Home() {

  const preLoadedData = useLoaderData();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {

    console.info(preLoadedData);

    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(data => setPokemons(data.results))
  }, [preLoadedData]);

  return (
    <main>
        <h1>Home page</h1>
        {pokemons.map((pokemon) => {
          return <p key={pokemon.name}>{pokemon.name}</p>
        })}
    </main>
  )
}

export default Home