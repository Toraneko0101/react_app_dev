## 学習元
Udemy: [React実践] 3種類のReactアプリケーションを構築してReactの理解を深める実践講座

## Node.jsとは?
```
Node.js
    ・JSで書く、サーバサイド
```

## Node.jsのversion
```
$ nvm list
-> v20.9.0

$ npm -v
10.1.0

$ yarn -v
1.22.19

install -g: globalにinstall
```

## installすべきvscodeの拡張機能
```
ES7+ React/Redux/React-Native snippets
    tab補完など
Auto Close Tag
    自動で閉じタグをつける
Auto Rename Tag
    閉じタグの方も自動で変わる
HTML CSS Support
    HTMLやCSSを触る際
Material Icon Theme
    Iconの奴。vscode-iconsを入れていたので、今回はskip
Prettier - Code formatter
    保存した際に、フォーマットを整える
    Editor: Format On Saveにチェックを入れた
    レガシーコードなどを保存した際に変更されかねないことは考慮していないので注意する事
    めんどくさかったらオフにする
    なお、フロントエンド関連に対するコードフォーマッタなので、C++やPythonには影響を与えない！

rafce:  tab補完で関数コンポーネントのひな型を自動で作る
```

## ショートカットキー
```
Ctrl + Shift + X
    拡張機能
Ctrl + Shift + E
    ファイル
Ctrl + Shift + P
    コマンドパレット
Ctrl + B
    閉じる、開く
Ctrl + J
    ターミナルを開く
Ctrl + Shift + K
    現在の行を切り取る
Ctrl + O
    ファイルを開く
```

## 初期プロジェクトを作成する
```
$ npx create-react-app pokemon-app
$ cd pokemon-app
$ npm start //localhost:3000で立ち上がることを確認

reportWebVitals.js, setupTests.js, logo.svg, App.test.jsは使わないので消す
⇒localhost:3000が空白になったらOK
```

## ポケモンAPIについて
```
・Endpointと呼ばれるURLにアクセスすれば、このリソースを使用することができる
https://pokeapi.co/
⇒ここに対して、たとえば、https://pokeapi.co/api/v2/pokemon/dittoとするとメタモンの情報が取れる感じ

・ブラウザで確認する際はjson_viewerという拡張機能を入れるとヨシ！
    ・JsonVueなどでもよし

const initialURL = "https://pokeapi.co/api/v2/pokemon";というようなURLを元にして使用する。
```

## fetchについて
```
Commit: to fetch(862e682)
```

## 読み込み中の表示を追加
```
Commit: to loading
```

## ポケモンの詳細データを取ってくる
```
Commit: to detail_pokemon
```

## Cardに書く内容をreturn内に記述
```
Commit: to card_contents
```

## Emmetについて
```
div.hogeで
<div className="hoge"></div>
等を生成してくれる優れもの

javascriptでデフォルトでoffになっていたのでEmmet: Include Languagesに、以下の様に追加した。
問題であれば削除する事
//javascriptreactであれば補完が効くので以下の様にしている
"emmet.includeLanguages": {
  "vue-html" : "html",
  "javascript": "javascriptreact",
  "jsx": "javascriptreact"
}

```

## グリッド表示
```
grid-template-columns
    縦列の幅を指定
    fr: 比率での指定
gap
    行や列の間の隙間(row-gap, column-gapの一括指定)
display: grid;
    二次元グリッドシステムにする。
    子要素がグリッドアイテムへと変わる

```

## カードのCSS
```
Commit: to Card_CSS
```

## Nav-bar
```
Commit: to Nav
```

## ページ遷移
```
Commit: to page
・次の20匹はgetAllPokemonの返り値の.nextに含まれている。
・前の20匹は.previous
・そのため遷移の度にそれをuseEffectに格納しておく
```