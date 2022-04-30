import React from "react";
import { Field, ErrorMessage } from "formik";

export default function FormikRadio({
  name,
  label,
  options,
  ...rest
}) {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {props =>
          options.map(option => (
            <React.Fragment key={option.key}>
              <input
                id={option.value}
                type={"radio"}
                {...props.field}
                value={option.value}
                checked={option.value === props.field.value}
              />
              <label
                htmlFor={option.value}
                style={option.style}>
                {option.key}
              </label>
            </React.Fragment>
          ))
        }
      </Field>
      <ErrorMessage
        className="error"
        component={"div"}
        name={name}
      />
    </div>
  );
}
