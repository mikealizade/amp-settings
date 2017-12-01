import React from 'react'
import './FeedbackForm.scss';

export default class FeedbackForm extends React.Component {
    constructor (props) {
        super(props)
        this.submitForm = this.submitForm.bind(this);
        this.toggleForm = this.toggleForm.bind(this);

        this.state = {
            isFeedbackSent: false,
            isFormOpen: false
        }
    }

    submitForm(){
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
        const { isFeedbackSent, isFormOpen } = this.state

        return (<section className={`feedback ${isFormOpen ? 'open' : ''}`}>
                    <div>
                        <div className="feedback__tab btn" onClick={this.toggleForm}>Feedback</div>
                        <form className="feedback__form">
                            <h2>Feedback &amp; Suggestions</h2>
                            {!isFeedbackSent ?
                                <fieldset>
                                    <p>Please use the form below to provide any feedback or suggestions.</p>
                                    <label htmlFor="feedback__name">Your name</label>
                                    <input id="feedback__name" type="text"/>
                                    <label htmlFor="feedback__message">Your message</label>
                                    <textarea id="feedback__message"/>
                                    <button className="btn" onClick={this.submitForm}>Send</button>
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
