import React from "react";
import { Field, ErrorMessage } from "formik";

export const validation = value => {
  console.log(value);
  if (value.length === 0) {
    return "Required";
  }
  return undefined;
};

export default function FormikCheckBox({
  name,
  label,
  options,
  ...rest
}) {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest} validation={validation}>
        {props =>
          options.map(option => (
            <React.Fragment key={option.key}>
              <input
                id={option.value}
                type={"checkbox"}
                {...props.field}
                value={option.value}
                checked={props.field.value.includes(
                  option.value
                )}
              />
              <label htmlFor={option.value}>
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
