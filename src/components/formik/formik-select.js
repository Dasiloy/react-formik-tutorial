import React from "react";
import { Field, ErrorMessage } from "formik";

const FormikSelect = ({
  name,
  label,
  options,
  ...rest
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} {...rest}>
        {options.map(option => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        className="error"
        component="div"
      />
    </div>
  );
};

export default FormikSelect;
