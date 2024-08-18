// LIMPANDO POIS NAO ESTAO MAIS SENDO USADOS DEPOIS DE CRIAR O STORE
// import { Game } from '../../App'

import { useSelector } from 'react-redux'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'
import * as S from './styles'

// LIMPANDO POIS NAO ESTAO MAIS SENDO USADOS DEPOIS DE CRIAR O STORE
// type Props = {
//   itensNoCarrinho: Game[]
// }

// LIMPANDO POIS NAO ESTAO MAIS SENDO USADOS DEPOIS DE CRIAR O STORE
// const Header = ({ itensNoCarrinho }: Props) => {

// USESELECTOR E UMA FUNCAO DO REACT REDUX
// recebe o estado e devolve a selecao do estado
const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
