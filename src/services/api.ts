import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

// ESTAMOS IMPORTANDO ESSAS FUNCOES DE DENTRO DO PACOTE @reduxjs/toolkit/query/react
// 1 Primeiro criamos o api como const, dizemos qual a base, que e fazer um fetch, passando um objeto com o url da api (USAR SEMPRE A PRIMEIRA PARTE DO URL, ANTES DO PRIMEIRO /)
// 2 Segundo construimos as requisicoes (endpoints) que e uma arrow function que recebe um construtor de endpois (builder) e temos um retorno de objeto
// como um fetch e basicamente um metodo get e recuperando e listando um conteudo
// quando e feito a leitura de um conteudo de api, e feito um get
// nesse caso do Query (getJogos)
// no caso de 'produtos', ele é qual a requisicao queremos do api, nesse caso /produtos (http://localhost:4000/produtos), mas nao precisa passar o /
// 3 exportamos a funcao que e criada automaticamente useGetJogosQuery e o api como default pra colocar no store
// 4 podemos usar a requisicao da api assim, no componente:
// 5 estamos desestruturando pra acessar esses metodos que sao uma em muitas que esse toolkit query nos da pra usar na api:
// const { data: jogos, isLoading } = useGetJogosQuery()
// 6 assim podemos usar os metodos
// if (isLoading) return <h2>Carregando...</h2>
// e entao precisamos importar essa api em store, pra criar um reducerPath, como se a requisicao api fosse um reducers

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    // no tipo de builder.query recebemos a tipagem com o tipo do endpoint, e passamos um segundo argumento para o caso de usarmos uma complementacao/parametro na requisicao, como nao temos ele fica void
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetJogosQuery } = api
export default api
