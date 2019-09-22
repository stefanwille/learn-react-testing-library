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
              <input
                autoComplete="off"
                type="text"
                name="firstName"
                value={formikApi.values.firstName}
                onChange={formikApi.handleChange}
              />
              <br />
              <input
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
      {fullName.length > 0 && <div>Your name is {fullName}</div>}
    </div>
  );
};
