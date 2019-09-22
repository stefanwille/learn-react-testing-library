import React from "react";
import { Fetch } from "./Fetch";
// import "@testing-library/jest-dom/extend-expect";
// import axiosMock from "axios";

import { render, cleanup, prettyDOM, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("loads and displays todos", async () => {
  const fetchMock = fetch as any;
  fetchMock.mockResponseOnce(
    JSON.stringify([{ id: 12, text: "hello there", completed: false }])
  );

  const container = render(<Fetch maxTodos={3} />);
  // getByTestId("greeting-text");
  // console.log(getByText("Hello Fetch World"));

  await wait(() => expect(container.getByTestId("todo-12")).toBeTruthy());

  const todoList = container.getByTestId("todo-list");
  expect(todoList).not.toBeEmpty();
  // console.log(prettyDOM(todoList));
});
