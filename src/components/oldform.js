import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required!"),
  email: Yup.string()
    .email("invalid email")
    .required("required!"),
  channel: Yup.string().required("required!"),
});

function Form() {
  // handlesubmit callback
  const onSubmit = values => {
    console.log(values);
    resetForm({
      ...initialValues,
    });
  };

  const {
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    resetForm,
    getFieldProps,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(getFieldProps("name"));

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...getFieldProps("name")}
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={values.name}
          />
          {touched.name && errors.name && (
            <div className="error">{errors.name}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...getFieldProps("email")}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
          />
          {touched.email && errors.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...getFieldProps("channel")}
            // onBlur={handleBlur}
            // onChange={handleChange}
            // value={values.channel}
          />
          {touched.channel && errors.channel && (
            <div className="error">{errors.channel}</div>
          )}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
