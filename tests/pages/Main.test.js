import { render, screen } from "@testing-library/react";
import Main from "../../src/pages/Main";

describe('Testing Main', () => {

  test('Render Main', () => {
    render(<Main/>)
    screen.getByText(/Follow us/);
  });

});

