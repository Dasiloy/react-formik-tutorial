import * as Yup from "yup";

export const isValidEmail = Yup.string()
  .email("Invalid email address")
  .required("Required");

export const isValidMessage = Yup.string().required(
  "Required"
);

export const isValidSelectOption = Yup.string().required(
  "Required"
);

export const isValidMultipleSelections = Yup.array().required(
  "Required"
);

export const isValidDate = Yup.date()
  .required("Required")
  .nullable();

export const isMtachedPassword = Yup.string()
  .oneOf([Yup.ref("password"), ""], "Passwords must match")
  .required("Required");

export const conditionalValidation = Yup.string().when(
  "password",
  {
    is: "password",
    then: Yup.string().required("Required"),
  }
);
