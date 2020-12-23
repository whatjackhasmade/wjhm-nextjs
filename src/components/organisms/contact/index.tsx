/* eslint-disable react/react-in-jsx-scope */

import { useForm } from '@formcarry/react';

import ContactComponent from './contact.styles';

import ContactForm from './partials/fields';

const Contact: React.FC = () => {
  const { state, submit } = useForm({
    id: `JiykZrrpn7`,
  });

  const { submitted } = state;

  let title: string = `Tell Me About Your Project`;
  if (submitted) title = `Awesome, I've Got The Info`;

  return (
    <ContactComponent>
      <div className="contact__wrapper">
        <h2>{title}</h2>
        {submitted && (
          <p>
            I&apos;ll send you an email in the next few hours and we can go from there{` `}
            <span role="img" aria-label="smiling face">
              😊
            </span>
          </p>
        )}
        <ContactForm submit={submit} submitted={submitted} />
      </div>
    </ContactComponent>
  );
};

export default Contact;
