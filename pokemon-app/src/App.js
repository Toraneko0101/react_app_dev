import './App.css';
import { useEffect, useState } from 'react';
import {getAllPokemon} from "./utils/pokemon.js";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon"; //このエンドポイントの値をうまく変えていく
  const [loading, setLoading] = useState(true);

  //browserがloadされた時に叩くので、1回だけ呼び出す
  useEffect(() => {
    const fetchPokemonData = async () =>{
      //全てのポケモンデータをURLから非同期で取得
      let res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false);
    };
    fetchPokemonData();
  },[])

  return <div className="App">
    {loading ? (
      <h1>ロード中・・・</h1>
    ) : (
    <>
      <h1>ポケモンデータを取得しました</h1>
    </>
    )}
  </div>;
}

export default App;
