import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../Theme'
import { Button } from './Button'

describe('Button', () => {
  const mockOnClick = jest.fn()

  it('renders the button with the provided label', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button label="Test Button" onClick={mockOnClick} />
      </ThemeProvider>,
    )

    expect(getByText('Test Button')).toBeInTheDocument()
  })

  it('calls the onClick function when the button is clicked and active', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button label="Test Button" onClick={mockOnClick} active />
      </ThemeProvider>,
    )

    fireEvent.click(getByText('Test Button'))
    expect(mockOnClick).toHaveBeenCalled()
  })

  it('renders the button with the correct text color when active', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button label="Test Button" onClick={mockOnClick} active color="blue" />
      </ThemeProvider>,
    )

    expect(getByText('Test Button')).toHaveStyle('color: rgb(255, 255, 255)')
  })

  it('renders Button unchanged', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button label="Test Button" onClick={mockOnClick} />
      </ThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })
})
