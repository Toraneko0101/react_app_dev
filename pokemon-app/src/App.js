import './App.css';
import { useEffect, useState } from 'react';
import {getAllPokemon, getPokemon} from "./utils/pokemon.js";
import Card from "./components/Card/Card.js"
function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon"; //このエンドポイントの値をうまく変えていく
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  //browserがloadされた時に叩くので、1回だけ呼び出す
  useEffect(() => {
    const fetchPokemonData = async () =>{
      //全てのポケモンデータをURLから非同期で取得
      let res = await getAllPokemon(initialURL);
      //各ポケモンの詳細なデータを取得
      loadPokemon(res.results);

      setLoading(false);
    };

    fetchPokemonData();
  },[])

  
  const loadPokemon = async (data) => {
    //Promise.all: 全てのfetchが終わるまで待機:引数には配列。今回はmap関数を展開したもの
    let _pokemonData = await Promise.all(
      data.map((pokemon) =>{
        let pokemonRecord = getPokemon(pokemon.url); //pokemonの詳細な情報
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };
  console.log(pokemonData); //状態が変わるたびに再レンダリング

  return <div className="App">
    {loading ? (
      <h1>ロード中・・・</h1>
    ) : (
    <>
      <div className="pokemonCardContainer">
        {pokemonData.map((pokemon, i)=>{
          return <Card key={i} pokemon={pokemon} />;
        })}
      </div>
    </>
    )}
  </div>;
}

export default App;
