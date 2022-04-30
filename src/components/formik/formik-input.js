import React from "react";
import { Field, ErrorMessage } from "formik";

const FormikInput = ({
  name,
  type,
  label,
  required,
  disabled,
  placeholder,
  ...rest
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field
        as="input"
        type={type || "text"}
        id={name}
        name={name}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage
        name={name}
        className="error"
        component={"span"}
      />
    </div>
  );
};

export default FormikInput;
