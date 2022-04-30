import React from "react";
import FormikInput from "./formik-input";
import FormikTextarea from "./formik-textarea";
import FormikSelect from "./formik-select";
import FormikRadio from "./formik-radio";
import FormikCheckBox from "./formik-checkbox";
import FormikDatePicker from "./formik-date-picker";

export default function FormControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <FormikInput {...rest} />;
    case "textarea":
      return <FormikTextarea {...rest} />;
    case "select":
      return <FormikSelect {...rest} />;
    case "radio":
      return <FormikRadio {...rest} />;
    case "checkbox":
      return <FormikCheckBox {...rest} />;
    case "date":
      return <FormikDatePicker {...rest} />;
    default:
      return null;
  }
}
