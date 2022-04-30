import React from "react";
import * as Yup from "yup";
import {
  isValidDate,
  isValidEmail,
  isValidMessage,
  isValidSelectOption,
  isValidMultipleSelections,
} from "../yup/schema.js";
import {
  menuOptions,
  colors,
  terms,
} from "../constants/select-arrays.js";
import FormikContainer from "./formik";
import FormControl from "./formik/form-control.js";

const initialValues = {
  email: "",
  message: "",
  menu: "",
  color: "",
  terms: [],
  date: null,
};

const validationSchema = Yup.object().shape({
  email: isValidEmail,
  message: isValidMessage,
  menu: isValidSelectOption,
  color: isValidSelectOption,
  terms: isValidMultipleSelections,
  date: isValidDate,
});

const onSubmit = (values, formikProps) => {
  console.log(values);
  console.log(formikProps);
};

function UserRegistration() {
  return (
    <FormikContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      <FormControl
        control="input"
        name="email"
        label="Email"
        type="email"
      />
      <FormControl
        control="textarea"
        name="message"
        label="Message"
        rows={2}
      />
      <FormControl
        control={"select"}
        name={"menu"}
        label={"Menu"}
        options={menuOptions}
      />
      <FormControl
        control={"radio"}
        name="color"
        label="Select Hair color"
        options={colors}
      />
      <FormControl
        control={"checkbox"}
        name="terms"
        label="Select Terms"
        options={terms}
      />
      <FormControl
        control={"date"}
        name="date"
        label="Date"
      />
    </FormikContainer>
  );
}

export default UserRegistration;
