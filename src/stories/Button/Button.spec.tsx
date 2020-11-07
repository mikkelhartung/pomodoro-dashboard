import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Default } from './Button.stories'

describe('Story: Button', () => {
  it('should render with default args', () => {
    render(<Default {...Default.args} />)

    expect(screen.getByText('Click me')).toBeInTheDocument()
  });
})
