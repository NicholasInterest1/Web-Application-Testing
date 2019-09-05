import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("button for strike included", () => {
  const strikeButton = render(<App />);
  strikeButton.getByTestId("strikeoutbtn");
});

test("button for balls included", () => {
  const ballButton = render(<App />);
  ballButton.getByTestId("ballbtn");
});

test("button for hit included", () => {
  const hitButton = render(<App />);
  hitButton.getByTestId("hitbtn");
});

test("button for foulBall included", () => {
  const FoulBallButton = render(<App />);
  FoulBallButton.getByTestId("foulballbtn");
});