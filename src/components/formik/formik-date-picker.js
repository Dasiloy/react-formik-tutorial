import React from "react";
import { Field, ErrorMessage } from "formik";
import DatePicker from "react-date-picker";

export default function FormikDatePicker({
  name,
  label,
  ...rest
}) {
  return (
    <div className="form-control">
      <label htmlFor={name}>Date</label>
      <Field name={name} {...rest}>
        {({ form, field }) => (
          <DatePicker
            onChange={date =>
              form.setFieldValue(name, date)
            }
            value={field.value}
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        component={"div"}
        className="error"
      />
    </div>
  );
}
