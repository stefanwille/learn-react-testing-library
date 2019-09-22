import React from "react";
import { Fetch } from "./Fetch";
// import "@testing-library/jest-dom/extend-expect";
// import axiosMock from "axios";

import { render, cleanup, prettyDOM, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("loads and displays todos", async () => {
  // axiosMock.get.mockResolvedValueOnce({
  //   data: { id: 12, text: "hello there", completed: false }
  // });
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
  const mockFetchPromise = Promise.resolve({
    // 3
    json: () => mockJsonPromise
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise); // 4

  const container = render(<Fetch maxTodos={3} />);
  // getByTestId("greeting-text");
  // console.log(getByText("Hello Fetch World"));

  await wait(() => expect(container.getByTestId("todo-2")).toBeTruthy());

  const todoList = container.getByTestId("todo-list");
  expect(todoList).not.toBeEmpty();
  console.log(prettyDOM(todoList));

  // for (let i = 0; i < todoList.children.length; i++) {
  //   console.log(todoList.children[i].tagName);
  // }
});
