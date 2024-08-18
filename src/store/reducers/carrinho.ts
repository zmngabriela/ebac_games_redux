// REDUX DOS ESTADOS DE App.tsx

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

// TIPANDO ITENS COMO UMA ARRAY VAZIA DE GAMES
type CarrinhoState = {
  itens: Game[]
}

// ARMAZENANDO NO ESTADO INICIAL DE ITENS
const initialState: CarrinhoState = {
  itens: []
}

// SLICE
// o redux toolkit trabalha com slices (fatias)
// no slice temos o action e reducers
// createSlice e uma funcao que recebe as configuracoes

const carrinhoSlice = createSlice({
  name: 'carrinho', // nome da slice
  initialState,
  // COMO FOI PASSADO O initialState como const, podemos usar o nome da variavel aqui, ao inves de:
  // initial state: { // o slice tem que receber o estado inicial, e ele é igual a um objeto
  //   itens: []
  // },
  reducers: {
    // reducer nada mais e do que uma funcao que recebe um estado e uma acao (state and action)
    // no reducers e onde colocamos toda a parte de mudanca de estado
    // PAYLOADACTION é uma tipagem de acao pra informar que essa acao ta carregando um dado, e esse dado e do tipo game
    // ele existe pra informacao passada estar tipada corretamente e nao dar nenhum problema ao fazer a açao.
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      // TIPANDO ITENS/INICIALSTATE
      // antes items nao tava com a tipagem Games, que e importante pra entender que e um array pra buscar
      // pra resolver isso, criei uma tipagem de CarrinhoSlice, passando a prop itens como sendo uma array de Games
      // entao armazenei o initialState em uma const, tipando ele como CarrinhoSlice, e passando o item como uma array vazia
      // agora quando usa o state.itens, aparece  que e uma array do tipo Games
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
        // push aqui nao seria possivel, pois nao esta dentro do conceito de imutabilidade
        // o correto seria estar criando um estado, e ai atualizar o estado com [...itens, jogo]
        // copiando a array existente e adicionando o jogo que nao foi encontrado
        // escrever push so foi possivel gracas a esse WritableDraft<Game>, que faz parte da biblioteca immer
        // immer nos ajuda a manter a imutabilidade de estado, mas podemos usar essas funcoes de alteracao que nao vai chegar a substitir o valor
      }
    }
  }
})

// carrinhoSlice.actions.adicionar
//DESESTRUTURANDO
export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer

// TROUXE ISSO DE APP.TSX PRA CA
// function adicionarAoCarrinho(jogo: Game) {
//   if (carrinho.find((game) => game.id === jogo.id)) {
//     alert('Item já adicionado')
//   } else {
//     setCarrinho([...carrinho, jogo])
//   }
// }
