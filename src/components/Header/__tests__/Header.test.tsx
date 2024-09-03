import { screen } from '@testing-library/react'
import { renderwithProvider } from '../../../utils/tests'
import Header from '..'

describe('Tests for header component', () => {
  test('Must correctly render', () => {
    renderwithProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Must render with 2 items on cart', () => {
    const { debug } = renderwithProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows', 'X-box Series', 'PS5'],
              preco: 199.9,
              precoAntigo: 299.9,
              titulo: 'Hogwarts Legacy'
            }
          ]
        }
      }
    })
    debug()
    expect(screen.getByTestId('qnt-carrinho').innerHTML).toContain('2 itens')
  })
})
