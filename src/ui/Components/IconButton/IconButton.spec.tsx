import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../Theme'
import { IconButton } from './IconButton'

describe('IconButton', () => {
  const mockOnClick = jest.fn()

  it('renders the icon button with the provided icon name', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <IconButton iconName="info" onClick={mockOnClick} />
      </ThemeProvider>,
    )
    expect(getByTestId('info')).toBeInTheDocument()
  })

  it('calls the onClick function when the icon button is clicked', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <IconButton iconName="info" onClick={mockOnClick} />
      </ThemeProvider>,
    )
    fireEvent.click(getByTestId('iconButton'))
    expect(mockOnClick).toHaveBeenCalled()
  })

  it('renders the icon button with the correct size when variant is bare', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <IconButton iconName="gear" onClick={mockOnClick} variant="bare" />
      </ThemeProvider>,
    )
    const iconButton = getByTestId('iconButton')
    expect(iconButton).toHaveStyle('width: 20px')
    expect(iconButton).toHaveStyle('height: 20px')
  })
})
