import React from "react";
import { ErrorMessage, Field } from "formik";

const FormikTextarea = ({ name, label, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field
        as="textarea"
        rows={rest.rows || 4}
        name={name}
        {...rest}
      />
      <ErrorMessage
        name={name}
        className="error"
        component={"div"}
      />
    </div>
  );
};

export default FormikTextarea;
