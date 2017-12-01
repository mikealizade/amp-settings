import React from 'react'
import './FeedbackForm.scss';

export default class FeedbackForm extends React.Component {
    constructor (props) {
        super(props)
        this.submitForm = this.submitForm.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.updateEntry = this.updateEntry.bind(this);

        this.state = {
            isFeedbackSent: false,
            isFormOpen: false,
            name: '',
            message: '',
            error: false
        }
    }

    updateEntry(e){
        let t = e.target;
        this.setState({
            [t.name]: t.value
        })
    }

    submitForm(e){
        e.preventDefault();
        const { name, message } = this.state;

        if(name === '' || message === '') {
            this.setState({
                error: true
            });
            return;
        }

        this.setState({
            isFeedbackSent: true
        }, this.closeForm)
    }

    closeForm(){
        setTimeout(() => {
            this.toggleForm()
        }, 3000);

        setTimeout(() => {
            this.setState({
                isFeedbackSent: false
            })
        }, 3400);
    }

    toggleForm(){
        this.setState({
            isFormOpen: !this.state.isFormOpen
        })
    }


    render() {
        const { isFeedbackSent, isFormOpen, name, message, error } = this.state;

        return (<section className={`feedback ${isFormOpen ? 'open' : ''}`}>
                    <div>
                        <div className="feedback__tab btn" onClick={this.toggleForm}>Feedback</div>
                        <form className="feedback__form">
                            <h2>Feedback &amp; Suggestions</h2>
                            {!isFeedbackSent ?
                                <fieldset>
                                    <p>Please use the form below to provide any feedback or suggestions.</p>
                                    <label htmlFor="feedback__name">Your name</label>
                                    <input id="feedback__name" name="name" type="text" className={error ? 'feedback__name--error' : ''} value={name} onChange={this.updateEntry}/>
                                    <label htmlFor="feedback__message">Your message</label>
                                    <textarea id="feedback__message" name="message" className={error ? 'feedback__message--error' : ''} value={message} onChange={this.updateEntry}/>
                                    <button type="submit" className="btn" onClick={this.submitForm}>Send</button>
                                </fieldset>
                                :
                                <p>Thanks for your feedback!</p>
                            }
                        </form>
                    </div>
            </section>
        )
    }
}
