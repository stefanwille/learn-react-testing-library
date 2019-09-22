import React, { useState } from "react";
import { Formik, Form, FormikProps, FormikActions } from "formik";

interface FormState {
  firstName: string;
  lastName: string;
}

export const MyForm = () => {
  const [fullName, setFullName] = useState("");
  return (
    <div>
      MyForm
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        onSubmit={(values: FormState, actions: FormikActions<FormState>) => {
          const { firstName, lastName } = values;
          setFullName(`${firstName} ${lastName}`);
        }}
        render={(formikApi: FormikProps<FormState>) => {
          return (
            <Form autoComplete="off">
              <p>Hello</p>
              <label htmlFor="firstName">First name:</label>
              <input
                id="firstName"
                autoComplete="off"
                type="text"
                name="firstName"
                value={formikApi.values.firstName}
                onChange={formikApi.handleChange}
              />
              <br />
              <label htmlFor="lastName">Last name:</label>
              <input
                id="lastName"
                autoComplete="off"
                type="text"
                name="lastName"
                value={formikApi.values.lastName}
                onChange={formikApi.handleChange}
              />
              <input type="submit" value="Submit"></input>
            </Form>
          );
        }}
      ></Formik>
      {fullName.length > 0 && (
        <div data-testid="form-result">Your name is {fullName}</div>
      )}
    </div>
  );
};
