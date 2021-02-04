/* eslint-disable react/react-in-jsx-scope */

import { useMutation } from 'react-query';

import { callSendForm } from 'wjhm';

import ContactComponent from './contact.styles';

import ContactForm from './partials/fields';

const Contact: React.FC = () => {
  const { data, error, isLoading: loading, mutateAsync } = useMutation(callSendForm);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (!event?.target) return;

    const form = event.target as HTMLFormElement;

    const data = new URLSearchParams();

    for (const pair of new FormData(form)) {
      data.append(pair[0], pair[1]);
    }

    await mutateAsync(data);
  };

  let title: string = `Tell Me About Your Project`;
  if (data) title = `Awesome, I've Got The Info!`;

  const wentWrong: boolean = data === false;
  const isSuccess: boolean = data === true;

  return (
    <ContactComponent>
      <div className="contact__wrapper">
        <h2>{title}</h2>
        {wentWrong && (
          <p>
            Oops, something went wrong. Please email me directly at{' '}
            <a href="mailto:jack@noface.co.uk">jack@noface.co.uk</a>
          </p>
        )}
        {isSuccess && (
          <p>
            I&apos;ll send you an email in the next few hours and we can go from there{` `}
            <span role="img" aria-label="smiling face">
              😊
            </span>
          </p>
        )}
        <ContactForm loading={loading} onSubmit={onSubmit} submitted={isSuccess} />
      </div>
    </ContactComponent>
  );
};

export default Contact;
