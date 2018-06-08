import React from 'react';
import { connect } from 'react-redux';
import './FeedbackForm.scss';

class FeedbackForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isFeedbackSent: false,
      isFormOpen: false,
      name: '',
      message: '',
      errorName: false,
      errorMessage: false
    };
  }

  updateEntry = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    const { name, message } = this.state;

    if (name === '' || message === '') {
      this.setState({
        errorName: name === '',
        errorMessage: message === ''
      });
      return;
    }

    this.setState({
      isFeedbackSent: true
    }, this.closeForm);

    this.props.submitForm({ name, message });
  }

  closeForm = () => {
    setTimeout(() => {
      this.toggleForm();
    }, 1500);

    setTimeout(() => {
      this.setState({
        isFeedbackSent: false,
        name: '',
        message: '',
        errorName: false,
        errorMessage: false
      });
    }, 3400);
  }

  toggleForm = () => {
    this.setState({
      isFormOpen: !this.state.isFormOpen
    });
  }

  render () {
    const {
      isFeedbackSent, isFormOpen, name, message, errorName, errorMessage
    } = this.state;

    return (<div>
      <section className={'feedback'}>
        <div className='feedback__tab btn' onClick={this.toggleForm}>+</div>
        <div className={`modal ${isFormOpen ? 'open' : ''}`}>
          <form className='feedback__form'>
            <h2>Feedback &amp; Suggestions <span onClick={this.toggleForm}>x</span></h2>
            {!isFeedbackSent
              ? <fieldset>
                <p>Please use the form below to provide any feedback, suggestions or other amp settings.</p>
                <label htmlFor='feedback__name'>Your name</label>
                <input id='feedback__name' name='name' type='text' className={errorName ? 'feedback__name--error' : ''} value={name} onChange={this.updateEntry} />
                <label htmlFor='feedback__message'>Your message</label>
                <textarea id='feedback__message' name='message' className={errorMessage ? 'feedback__message--error' : ''} value={message} onChange={this.updateEntry} />
                <button type='submit' className='btn' onClick={this.submitForm}>Send</button>
              </fieldset>
              : <p>Thanks for your feedback!</p>
            }
          </form>
        </div>
      </section>
    </div>
    );
  }
}

const mapStateToProps = ({app}) => {
  return {
    isFormSubmitted: app
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: formData => {
      dispatch({ type: 'SUBMIT_FORM', formData });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
