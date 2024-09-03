import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { screen, waitFor } from '@testing-library/react'
import { renderwithProvider } from '../../../utils/tests'
import Produtos from '..'

const mocks = [
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
  },
  {
    id: 3,
    categoria: 'Action',
    imagem: '',
    plataformas: ['X-box Series', 'PS5'],
    preco: 149.9,
    precoAntigo: 200,
    titulo: 'Gotham Knighs'
  },
  {
    id: 4,
    categoria: 'Action',
    imagem: '',
    plataformas: ['Nintendo Switch'],
    preco: 189.9,
    precoAntigo: 299.9,
    titulo: 'Donkey Kong'
  }
]

const server = setupServer(
  rest.get('http://localhost:4000/produtos', (req, res, ctx) => {
    return res(ctx.json(mocks))
  })
)

describe('Tests for products container', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Must correctly render with loading text', () => {
    renderwithProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('Must correctly render with the games list', async () => {
    renderwithProvider(<Produtos />)
    await waitFor(() => {
      expect(screen.getByText('Donkey Kong')).toBeInTheDocument()
    })
  })
})
