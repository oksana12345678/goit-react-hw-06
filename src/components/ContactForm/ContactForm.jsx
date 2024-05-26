import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const formNameId = useId();
  const formNumberId = useId();
  const contactsSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    phone: Yup.string()
      .min(9, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.phone,
    });
    actions.resetForm();
  };
  return (
    <Formik
      className={css.contactForm}
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
      initialValues={{ name: "", phone: "" }}
    >
      <Form className={css.contactForm}>
        <div className={css.inputContainer}>
          <label htmlFor={formNameId}>Name</label>
          <Field
            className={css.nameInput}
            id={formNameId}
            type="text"
            name="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.inputContainer}>
          <label htmlFor={formNumberId}>Number</label>
          <Field
            className={css.nameInput}
            id={formNumberId}
            type="tel"
            name="phone"
          />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>
        <button className={css.buttonSubmit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
