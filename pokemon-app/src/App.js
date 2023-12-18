import './App.css';
import { useEffect } from 'react';
import {getAllPokemon} from "./utils/pokemon.js";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon"; //このエンドポイントの値をうまく変えていく

  //browserがloadされた時に叩くので、1回だけ呼び出す
  useEffect(() => {
    const fetchPokemonData = async () =>{
      //全てのポケモンデータをURLから非同期で取得
      let res = await getAllPokemon(initialURL);
      console.log(res);
    };
    fetchPokemonData();
  },[])

  return <div className="App"></div>;
}

export default App;
