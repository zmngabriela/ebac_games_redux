// FAZENDO FORK DO GITHUB
// git clone https://github.com/zmngabriela/ebac_games_redux.git
// npm install
// se tiver problema com lint:
// npm uninstall eslint
// npm install eslint@8.57
// npx eslint -v pra ver a versao
// npm install de novo pra atualizar as dependencias
// npx eslint --fix . pra solucionar o problema com prettier

// SERVIDOR FAKE
// chamar json server (servidor fake)
// npx json-server db.json --port 4000 --delay 1000
// db.json e o nome, 4000 é a porta que vai ser aberto e delay e de 1s pra nao ser tao rapido e a gente ver o carregamento

// INSTALAR REDUX
// npm i --save react-redux @reduxjs/toolkit
// fazer a estrutura de pastas:
// src/store/index.ts (com a conf) + src/store/reducers
// IMPORTAR STORE NO APP.TSX
// import { store } from './store'
// cria o container do app <Provider store={store}>, que e pra ter acesso aos estados registrados no store

// import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  // LIMPANDO POIS NAO ESTAO MAIS SENDO USADOS DEPOIS DE CRIAR O STORE
  // const [games, setGames] = useState<Game[]>([])
  // const [carrinho, setCarrinho] = useState<Game[]>([])

  // REQUISICAO DO API
  // ao inves de usar o fetch, que faz um metodo get do api
  // vamos usar o recurso Redux Toolkit Query
  // criar pasta services/api.ts
  // fazer config

  // useEffect(() => {
  //   fetch('http://localhost:4000/produtos')
  //     .then((res) => res.json())
  //     .then((res) => setGames(res))
  // }, [])

  // MOVENDO ALTERACAO DE ESTADO PRO REDUCERS
  // function adicionarAoCarrinho(jogo: Game) {
  //   if (carrinho.find((game) => game.id === jogo.id)) {
  //     alert('Item já adicionado')
  //   } else {
  //     setCarrinho([...carrinho, jogo])
  //   }
  // }

  // PROVIDER - container da nossa aplicacao com Redux, so assim temos acesso ao estado

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
