/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';

import ContactFormComponent from './fields.styles';

type ContactFormProps = {
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
  submitted: boolean;
};

const ContactForm = (props: ContactFormProps) => {
  const { submit, submitted } = props;

  let classList: string = `contact__form`;
  if (submitted) classList += ` contact__form--hidden`;

  return (
    <ContactFormComponent name="contact" onSubmit={submit} className={classList}>
      <input type="hidden" name="_gotcha" />
      <div className="row">
        <div className="col">
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div className="col">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="col">
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" />
        </div>
      </div>
      <label htmlFor="message">Tell Me About Your Project</label>
      <textarea name="message" id="message" rows={6} />
      <button type="submit" value="Send Message">
        Send Message
      </button>
    </ContactFormComponent>
  );
};

export default ContactForm;
