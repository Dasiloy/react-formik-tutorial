import React from "react";
import { Formik, Form } from "formik";

export default function FormikContainer({
  validationSchema,
  initialValues,
  onSubmit,
  children,
}) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}>
      {formik => (
        <Form>
          {children}
          <button
            type="submit"
            disabled={formik.isSubmitting}>
            submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
