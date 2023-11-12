import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders Home page', () => {
  render(<App />)
  const linkElement = screen.getByText(/React Flow Demo/i)
  expect(linkElement).toBeInTheDocument()
})
