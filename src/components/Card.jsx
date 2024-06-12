import React, { useEffect, useState } from "react";
import axios from "axios";

function Card({ pokemon }) {
  const apiPokemon = pokemon.url;
  const [singlePokemon, setSinglePokemon] = useState({});

  useEffect(() => {
    const dataCall = async () => {
      const data = await axios.get(apiPokemon);
      setSinglePokemon(data.data);
    };
    dataCall();
  }, [apiPokemon]);

  //add 0/00 id pokemon
  const addzero = (id) => {
    if (id < 10) {
      return "#00" + id;
    } else if (id < 100) {
      return "#0" + id;
    } else {
      return id;
    }
  };
  //  //add 0/00 height pokemon
  const addZeroHeight = (h) => {
    if (h < 10) {
      return h + "0";
    } else {
      return h;
    }
  };
  //adjust stats max 100pt
  const reduceStat = (stat) => {
    if (stat > 100) {
      return 100;
    } else {
      return stat;
    }
  };

  return (
    <div className="text-white shadow-black shadow-2xl border-[#D3C580] border relative p-5 rounded-2xl">
      <div className="grid grid-cols-2 items-center mb-2">
        <div className="flex flex-col gap-1">
          <p className="border-2 bg-[#D3C580] text-black font-bold border-black px-3 w-max rounded-lg">
            {addzero(singlePokemon.id)}
          </p>
          <h3 className=" text-2xl capitalize font-bold">
            {singlePokemon.name}
          </h3>
          <p>Height : {addZeroHeight(singlePokemon.height)} cm</p>
          <p>Weight : {singlePokemon.weight} kg</p>
          <p>Habitat : DA SISTEMARE</p>
          <p className="capitalize">
            Type :
            {singlePokemon.types &&
              singlePokemon.types.map((type) => type.type.name).join(" / ")}
          </p>
        </div>
        <img
          className="hover:scale-150"
          src={
            singlePokemon?.sprites?.other?.["official-artwork"]?.front_default
          }
          alt="pokemon"
        />
      </div>
      <div>
        <p className=" text-2xl font-bold capitalize mb-4 text-[#D3C580]">
          basic statistics:
        </p>
        <div className="">
          {singlePokemon.stats &&
            singlePokemon.stats.map((stat, index) => (
              <div className="grid grid-cols-2 font-bold" key={index}>
                <p>
                  {stat.stat.name} : {stat.base_stat}
                </p>
                <div className="h-[16px] w-full bg-gray-200 rounded-lg">
                  <div
                    className="h-[16px] bg-[#D3C580] rounded-lg"
                    style={{ width: `${reduceStat(stat.base_stat)}%` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
