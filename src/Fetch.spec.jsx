import React from "react";
import { Fetch } from "./Fetch";
import "@testing-library/jest-dom/extend-expect";
// import axiosMock from "axios";

import { render, cleanup, prettyDOM } from "@testing-library/react";

afterEach(cleanup);

it("loads and displays todos", () => {
  // axiosMock.get.mockResolvedValueOnce({
  //   data: { id: 12, text: "hello there", completed: false }
  // });
  const { getByTestId, debug } = render(<Fetch maxTodos={10} />);
  // getByTestId("greeting-text");
  // console.log(getByText("Hello Fetch World"));
  //debug();
  const todoList = getByTestId("todo-list");
  console.log(prettyDOM(todoList));

  expect(todoList).not.toBeEmpty();

  // for (let i = 0; i < todoList.children.length; i++) {
  //   console.log(todoList.children[i].tagName);
  // }
});
