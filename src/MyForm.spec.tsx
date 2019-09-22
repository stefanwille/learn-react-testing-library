import React from "react";

import { render, fireEvent, wait } from "@testing-library/react";
import { MyForm } from "./MyForm";

describe("MyForm", () => {
  it("renders", () => {
    const container = render(<MyForm />);

    const firstName = container.getByLabelText("First name:");
    expect(firstName).not.toBeNull();

    const lastName = container.getByLabelText("Last name:");
    expect(lastName).not.toBeNull();

    const submit = container.getByDisplayValue("Submit");
    expect(submit).not.toBeNull();
  });

  it("handles submit", async () => {
    const container = render(<MyForm />);

    const firstName = container.getByLabelText("First name:");

    const lastName = container.getByLabelText("Last name:");

    const submit = container.getByDisplayValue("Submit");

    fireEvent.change(lastName, { target: { value: "Slobodan" } });
    fireEvent.change(firstName, { target: { value: "Stefan" } });
    fireEvent.click(submit);
    await wait(() =>
      expect(container.getByTestId("form-result").textContent).toBe(
        "Your name is Stefan Slobodan"
      )
    );

    // await waitForElement(() => container.getByTestId("form-result"));
    // expect(container.getByTestId("form-result").textContent).toBe(
    //   "Your name is Stefan Slobodan"
    // );
    // const fullName = await container.findByTestId("form-result");
    // expect(fullName.textContent).toMatch(/Your name is Stefan Slobodan/);
  });
});
