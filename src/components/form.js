import React from "react";
import * as Yup from "yup";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
} from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  socials: {
    facebook: "",
    twitter: "",
  },
  works: ["", ""],
  phoneNumbers: ["", ""],
};

const validateAddress = value => {
  if (value.length === 0) {
    return "Address is required";
  }
  return undefined;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required!"),
  email: Yup.string()
    .email("invalid email")
    .required("required!"),
  channel: Yup.string().required("required!"),
});

// handlesubmit callback
const onSubmit = (values, formik) => {
  setTimeout(() => {
    formik.setSubmitting(false);
    formik.resetForm();
  }, 2000);
  console.log(values);
};

function NewForm() {
  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={true}
        // validateOnMount
      >
        {formik => (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="name"
              />
              <ErrorMessage
                name="name"
                className="error"
                component={"div"}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder={"example@yahoomail.com"}
              />
              <ErrorMessage
                name="email"
                className="error"
                component={"div"}
              />
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="channel"
              />
              <ErrorMessage
                name="channel"
                className="error"
                component={"div"}
              />
            </div>
            {/* You can use the render props method to handle more complex custom components */}
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <Field
                name="address"
                validate={validateAddress}>
                {props => {
                  return (
                    <>
                      <input
                        id="address"
                        name="address"
                        type={"text"}
                        placeholder="43, keys avenue, Tokyo"
                        {...props.field}
                      />
                      {props.form.errors.address &&
                        props.meta.touched && (
                          <div className="error">
                            {props.meta.error}
                          </div>
                        )}
                    </>
                  );
                }}
              </Field>
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook</label>
              <Field
                name="socials.facebook"
                type="text"
                id="facebook"
              />
            </div>
            <div className="form-control">
              <label htmlFor="portfolio">Portfolio</label>
              <Field
                name="works[0]"
                type="text"
                id="portfolio"
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Phone Number</label>
              <FieldArray>
                {props => {
                  const { push, remove } = props;
                  const {
                    values: { phoneNumbers },
                  } = props.form;
                  return (
                    <div>
                      {phoneNumbers.map((phone, index) => (
                        <div key={`${phone}${index}`}>
                          <Field
                            name={`phoneNumbers[${index}]`}
                            type="text"
                            id="phone"
                          />
                          <button
                            type="button"
                            onClick={() => remove(index)}>
                            -
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comment</label>
              <Field
                name="comments"
                id="comments"
                placeholder="some comments here"
                as="textarea"
                rows="4"
              />
              <ErrorMessage
                name="comments"
                className="error"
                component={"div"}
              />
            </div>
            <button
              type="submit"
              disabled={formik.isSubmitting}>
              submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewForm;
