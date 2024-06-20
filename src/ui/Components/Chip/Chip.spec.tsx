import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../Theme'
import { Chip } from './Chip'

describe('Chip', () => {
  const mockOnClick = jest.fn()

  it('renders the chip with the provided label', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Chip label="Test Chip" onClick={mockOnClick} />
      </ThemeProvider>,
    )
    expect(getByText('Test Chip')).toBeInTheDocument()
  })

  it('calls the onClick function when the close icon is clicked', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Chip label="Test Chip" onClick={mockOnClick} />
      </ThemeProvider>,
    )
    fireEvent.click(getByTestId('iconButton'))
    expect(mockOnClick).toHaveBeenCalled()
  })
  it('renders Chip unchanged', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Chip label="Test Chip" onClick={mockOnClick} />
      </ThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })
})
