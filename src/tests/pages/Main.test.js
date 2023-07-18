import { render, screen, waitFor } from "@testing-library/react";
import Main from "../../pages/Main";
import { BrowserRouter } from "react-router-dom";
import MoviesMock from "../mocks/MoviesMock";
// import axios from "axios";
import * as movieHook from "../../hooks/useMovies";

describe('Testing Main', () => {

  test('Render Main', async() => {
  const Search = MoviesMock;
  const title = MoviesMock[0].Title
  let data = {
    Search:Search
  };
  const movieMockModified = {data};
  // Mocking axios import
  // jest.spyOn(axios,'get').mockResolvedValue(movieMockModified)
  //Mocking getMovies arrow function from useMovies file 
  jest.spyOn(movieHook,'getMovies').mockResolvedValue(movieMockModified)  
  const component = render(
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    )
    await waitFor(()=> {
      screen.getByText(/Follow us/);
      // screen.getByText(/Batman Begins/);
      const titleComponent = component.container.querySelector('.moveTitleLink');
      expect(titleComponent.textContent).toEqual(title)
      expect(movieHook.getMovies).toBeCalledTimes(1);
    })
  });

});

