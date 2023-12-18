export const getAllPokemon = (url) =>{
    return new Promise((resolve, reject) =>{
        //成功した場合、dataをjson化し、成功したとしてrtnで返す
        //Promiseは成功or失敗するまで待つ
        fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
    })
}