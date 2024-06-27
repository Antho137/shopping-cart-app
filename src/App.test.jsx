import React from 'react';
import { render, screen } from "@testing-library/react";
import Home from './components/Home';

test("render intro heading", () => {
  render(<Home />);
  const element = screen.getByText(/You are welcome/i);
  expect(element).toBeInTheDocument();
});
