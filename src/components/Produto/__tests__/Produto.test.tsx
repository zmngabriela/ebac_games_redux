import { fireEvent, screen } from '@testing-library/react'
import Produto from '../../../components/Produto'
import { renderwithProvider } from '../../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows', 'X-box Series', 'PS5'],
  preco: 199.9,
  precoAntigo: 299.9,
  titulo: 'Hogwarts Legacy'
}

describe('Tests for product component', () => {
  test('Must correctly render', () => {
    renderwithProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })

  test('Must add a item in the cart', () => {
    const { store } = renderwithProvider(<Produto game={jogo} />)
    const btn = screen.getByTestId('btn-add-product')
    fireEvent.click(btn)
    // nesse caso de evento de botao, nao temos um expect
    // temos que aprender a ler o estado
    // a funcao que criamos renderProvider() nos retorna varias funcoes
    // e toda store tem a funcao getState()
    // store.getState().carrinho.itens
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
