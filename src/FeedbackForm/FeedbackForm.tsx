import React from 'react';
import './FeedbackForm.scss';
import { useRecoilState } from 'recoil';
import { sendEmail } from '../App/App.api';
import { formState } from '../App/App.atoms';

interface InputData {
  target: {
    name: string,
    value: string
  }
}

export const FeedbackForm = () => {
  const [form, updateEntry] = useRecoilState(formState);

  const updateForm = ({ target: { name, value } }: InputData) => {
    updateEntry({
      ...form,
      [name]: value
    });
  };

  const submitFeedback = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { name, message } = form;

    if (name === '' || message === '') {
      updateEntry({
        ...form,
        errorName: name === '',
        errorMessage: message === ''
      });
      return;
    }
    const formData = {
      ...form,
      isFeedbackSent: true
    };

    updateEntry(formData);
    closeForm();
    await sendEmail(formData);
  };

  const closeForm = () => {
    setTimeout(() => {
      toggleForm();
    }, 1500);

    setTimeout(() => {
      updateEntry({
        isFeedbackSent: false,
        isFormOpen: false,
        name: '',
        message: '',
        errorName: false,
        errorMessage: false
      });
    }, 3400);
  };

  const toggleForm = () => {
    updateEntry({
      ...form,
      isFormOpen: !form.isFormOpen
    });
  };

  const {
    isFeedbackSent, isFormOpen, name, message, errorName, errorMessage
  } = form;

  return (
    <div>
      <section className='feedback'>
        <div className='feedback__tab btn' onClick={toggleForm}>+</div>
        <div className={`modal ${isFormOpen ? 'open' : ''}`}>
          <form className='feedback__form'>
            <h2>Feedback and Suggestions <span onClick={toggleForm}>x</span></h2>
            {!isFeedbackSent
              ? (
                <fieldset>
                  <p>Please use the form below to provide any feedback, suggestions or other amp settings.</p>
                  <label htmlFor='feedback__name'>Your name</label>
                  <input id='feedback__name' name='name' type='text' className={errorName ? 'feedback__name--error' : ''} value={name} onChange={updateForm} />
                  <label htmlFor='feedback__message'>Your message</label>
                  <textarea id='feedback__message' name='message' className={errorMessage ? 'feedback__message--error' : ''} value={message} onChange={updateForm} />
                  <button type='submit' className='btn' onClick={submitFeedback}>Send</button>
                </fieldset>
              )
              : <p>Thanks for your feedback!</p>}
          </form>
        </div>
      </section>
    </div>
  );
};
