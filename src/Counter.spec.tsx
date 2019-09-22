import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Counter } from "./Counter";

describe("Counter", () => {
  it("render", () => {
    const container = render(<Counter />);
    expect(container).toBeTruthy();
    const { getByTestId, getByText } = container;
    const counterValueNode = getByTestId("counter-value");
    expect(counterValueNode.textContent).toBe("0");
    for (let i = 0; i < 10; i++) {
      fireEvent.click(getByText("Increment"));
    }
    expect(counterValueNode.textContent).toBe("10");
  });
});
