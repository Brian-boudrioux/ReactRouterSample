import { useState, useEffect } from "react";

function Home() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(data => setPokemons(data.results))
  }, []);

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