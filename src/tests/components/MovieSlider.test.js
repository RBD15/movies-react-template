import { render, screen } from '@testing-library/react'
import React, { PureComponent } from 'react'
import MovieSlider from '../../components/MovieSlider'
import MoviesMock from '../mocks/MoviesMock'
import { BrowserRouter } from 'react-router-dom'

describe('MovieSlider tests', () => {

  test('MovieSlider render', () => {
    render(
      <BrowserRouter>
        <MovieSlider movies={MoviesMock} />
      </BrowserRouter>
    )
    screen.getByText(/Follow us/);
    screen.getByText(MoviesMock[0].Title);
  })

})
