import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main/>', () => {
  it('should render the description', () => {
    render(<Main description="nextjs boilerplate" />)

    expect(
      screen.getByText('nextjs boilerplate', { exact: false })
    ).toBeInTheDocument()
  })

  it('should render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
