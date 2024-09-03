import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import * as S from './styles'

import { paraReal } from '../Produto'
import cesta from '../../assets/cesta.png'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
        <span data-testid="qnt-carrinho">{itens.length} itens</span>, valor
        total: {paraReal(valorTotal)}
      </div>
    </S.Header>
  )
}

export default Header
