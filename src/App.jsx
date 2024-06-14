import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  console.log(
    "Thank you for your time, visit https://www.lucavitalewebdeveloper.it/"
  );
  //api call
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
  //all pokemon
  const [pokemonList, setPokemonList] = useState([]);
  //value input search
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const apiCall = async () => {
      const apiPoke = await axios.get(apiUrl);
      setPokemonList(apiPoke.data.results);
    };
    apiCall();
  }, []);

  return (
    <div className=" h-screen font-Mont bg-[#323232] overflow-x-hidden w-screen">
      <Navbar setSearchTerm={setSearchTerm} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {/* control pokemonList array */}
        {pokemonList
          .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} />
          ))}
        {pokemonList.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).length === 0 && (
          <p className=" font-bold text-white text-center">Pokemon not found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
