import './App.css';
import { useEffect, useState } from 'react';
import {getAllPokemon, getPokemon} from "./utils/pokemon.js";
import Card from "./components/Card/Card.js"
import Navbar from './components/Navbar/Navbar.js';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon"; //このエンドポイントの値をうまく変えていく
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  //browserがloadされた時に叩くので、1回だけ呼び出す
  useEffect(() => {
    const fetchPokemonData = async () =>{
      //全てのポケモンデータをURLから非同期で取得
      let res = await getAllPokemon(initialURL);
      //各ポケモンの詳細なデータを取得
      await loadPokemon(res.results);
      setNextURL(res.next);
      setPrevURL(res.previous); //null
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

  const handlePrevPage = async () => {
    if(!prevURL) return;
    setLoading(true);
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    console.log(data.previous);
    setLoading(false);
  };
  const handleNextPage = async () => {
    if(!nextURL) return;
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next); //nextURLを更新
    setPrevURL(data.previous); //prevURLを更新
    setLoading(false);
  };

  return( 
  <>
  <Navbar />
  <div className="App">
    {loading ? (
      <h1>ロード中・・・</h1>
    ) : (
    <>
      <div className="pokemonCardContainer">
        {pokemonData.map((pokemon, i)=>{
          return <Card key={i} pokemon={pokemon} />;
        })}
      </div>
      <div className="btn">
        <button onClick={handlePrevPage}>前へ</button>
        <button onClick={handleNextPage}>次へ</button>
      </div>
    </>
    )}
  </div>
  </>
  );
}

export default App;
