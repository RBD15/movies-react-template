import { render, screen } from '@testing-library/react'
import React, { PureComponent } from 'react'
import Footer from '../../components/Footer'


describe('Footer tests', () => {
  test('Footer render', () => {
    render(<Footer/>)
    screen.getByText(/Subscribe to our newsletter system now/);
    screen.getAllByText(/Account/);
    
  })
})
