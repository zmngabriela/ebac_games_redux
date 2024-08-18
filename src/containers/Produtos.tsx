// import { Game } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'

import * as S from './styles'

// LIMPANDO POIS NAO ESTAO MAIS SENDO USADOS DEPOIS DE CRIAR O STORE
// type Props = {
//   jogos: Game[]
//   adicionarAoCarrinho: (jogo: Game) => void
// }

const Produtos = () => {
  const { data: jogos, isLoading } = useGetJogosQuery()
  // desestruturando propriedades do api request useGetJogosQuery(), pra poder controlar a requisicao aqui
  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

// LIMPANDO POIS NAO ESTAO MAIS SENDO USADOS DEPOIS DE CRIAR O STORE
// const Produtos = ({ jogos, adicionarAoCarrinho }: Props) => {
// <Produto key={game.id} game={game} aoComprar={adicionarAoCarrinho} />

export default Produtos
