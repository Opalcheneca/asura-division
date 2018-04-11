import React, { Component } from 'react';
import 'whatwg-fetch';

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsletterTitle: "",
      newsletterDescription: "",
      newsletters: [],
      addNewsletter: false
    };

    this.onTextboxChangeNewsletterTitle = this.onTextboxChangeNewsletterTitle.bind(this);
    this.onTextboxChangeNewsletterDescription = this.onTextboxChangeNewsletterDescription.bind(this);

    this.newsletterCreation = this.newsletterCreation.bind(this);
    this.addNewsletterSection = this.addNewsletterSection.bind(this);

  }
  componentDidMount() {
    fetch('/api/newsletters')
      .then(res => res.json())
      .then(json => {
        this.setState({
          newsletters: json
        });
      });
  }

  onTextboxChangeNewsletterTitle(event) {
    this.setState({
      newsletterTitle: event.target.value,
    })
  }
  onTextboxChangeNewsletterDescription(event) {
    this.setState({
      newsletterDescription: event.target.value,
    })
  }

  newsletterCreation() {
    const {
      newsletterTitle,
      newsletterDescription
    } = this.state;

    fetch('/api/newsletters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newsletterTitle,
        description: newsletterDescription
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) { }
      });
      this.setState({
        addNewsletter: false,
      });
  }

  addNewsletterSection() {
    this.setState({
      addNewsletter: true,
    });
  }

  render() {
    const {
      newsletterTitle,
      newsletterDescription, 
      addNewsletter
    } = this.state;

    
    if (addNewsletter) {
      return (
        <div>
          <p> Create your favor</p>
          <input
            type="text"
            placeholder="Newsletter Title"
            value={newsletterTitle}
            onChange={this.onTextboxChangeNewsletterTitle}
          />
          <br />
          <input
            type="text"
            placeholder="Description"
            value={newsletterDescription}
            onChange={this.onTextboxChangeNewsletterDescription}
          />
          <br />
          <button onClick={this.newsletterCreation}>Add News</button>
        </div>
      );
    } else{
      return (
        <div>
          <p>Newsletters:</p>
          <h2></h2>
          <ul>
            {this.state.newsletters.map((newsletter, i) => (
              <li key={i}>
                <span>{newsletter.description} </span>
              </li>
            ))}
          </ul>
          <button onClick={this.addNewsletterSection}>Create newsletter</button>
        </div>
      );
    }

  }
}

export default Newsletter;