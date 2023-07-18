import { render } from '@testing-library/react'
import React from 'react'
import MovieRaiting from '../../components/MovieRaiting'


describe('MovieRaiting tests', () => {
  test('MovieRaiting render', () => {
    const component = render(<MovieRaiting rating={8} />)
    // screen.getByText(/Subscribe to our newsletter system now/);
    const starNumber = component.container.querySelectorAll('.ion-ios-star')
    const emptyStarNumber = component.container.querySelectorAll('.ion-ios-star-outline')

    expect(starNumber.length).toEqual(8);
    expect(emptyStarNumber.length).toEqual(2);
  })

  test('MovieRaiting rating 10', () => {
    const component = render(<MovieRaiting rating={10} />)
    // screen.getByText(/Subscribe to our newsletter system now/);
    const componentNumber = component.container.querySelectorAll('.ion-ios-star')
    const emptyStarNumber = component.container.querySelectorAll('.ion-ios-star-outline')

    expect(componentNumber.length).toEqual(10);
    expect(emptyStarNumber.length).toEqual(0);
  })

  test('MovieRaiting rating 0', () => {
    const component = render(<MovieRaiting rating={0} />)
    // screen.getByText(/Subscribe to our newsletter system now/);
    const componentNumber = component.container.querySelectorAll('.ion-ios-star')
    const emptyStarNumber = component.container.querySelectorAll('.ion-ios-star-outline')

    expect(componentNumber.length).toEqual(0);
    expect(emptyStarNumber.length).toEqual(10);
  })
})
