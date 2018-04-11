import React, { Component } from 'react';
import 'whatwg-fetch';

class Favor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorLevelCreation: "",
      favorEnvironment: "",
      favorTitle: "",
      favorDescription: "",
      favorTimePeriod: "",
      favorMerit: "",
      favors: [],
      addFavor: false
    };

    this.onTextboxChangeFavorlevel = this.onTextboxChangeFavorlevel.bind(this);
    this.onTextboxChangeFavorEnvironment = this.onTextboxChangeFavorEnvironment.bind(this);
    this.onTextboxChangeFavorTitle = this.onTextboxChangeFavorTitle.bind(this);
    this.onTextboxChangeFavorDescription = this.onTextboxChangeFavorDescription.bind(this);
    this.onTextboxChangeFavorTimePeriod = this.onTextboxChangeFavorTimePeriod.bind(this);
    this.onTextboxChangeFavorMerit = this.onTextboxChangeFavorMerit.bind(this);

    this.favorCreation = this.favorCreation.bind(this);
    this.addFavorSection = this.addFavorSection.bind(this);

  }
  componentDidMount() {
    fetch('/api/favors')
      .then(res => res.json())
      .then(json => {
        this.setState({
          favors: json
        });
      });
  }

  onTextboxChangeFavorlevel(event) {
    this.setState({
      favorLevelCreation: event.target.value,
    })
  }
  onTextboxChangeFavorEnvironment(event) {
    this.setState({
      favorEnvironment: event.target.value,
    })
  }
  onTextboxChangeFavorTitle(event) {
    this.setState({
      favorTitle: event.target.value,
    })
  }
  onTextboxChangeFavorDescription(event) {
    this.setState({
      favorDescription: event.target.value,
    })
  }
  onTextboxChangeFavorTimePeriod(event) {
    this.setState({
      favorTimePeriod: event.target.value,
    })
  }
  onTextboxChangeFavorMerit(event) {
    this.setState({
      favorMerit: event.target.value,
    })
  }

  favorCreation() {
    const {
      favorLevelCreation,
      favorEnvironment,
      favorTitle,
      favorDescription,
      favorTimePeriod,
      favorMerit,
      favors,
      addFavor
    } = this.state;

    fetch('/api/favors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorLevel: favorLevelCreation,
        environment: favorEnvironment,
        title: favorTitle,
        description: favorDescription,
        timePeriod: favorTimePeriod,
        merit: favorMerit
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) { }
      });
      this.setState({
        addFavor: false,
      });
  }

  addFavorSection() {
    this.setState({
      addFavor: true,
    });
  }

  render() {
    const {
      favorLevelCreation,
      favorEnvironment,
      favorTitle,
      favorDescription,
      favorTimePeriod,
      favorMerit,
      addFavor
    } = this.state;

    
    if (addFavor) {
      return (
        <div>
          <p> Create your favor</p>
          <input
            type="text"
            placeholder="Favor Level"
            value={favorLevelCreation}
            onChange={this.onTextboxChangeFavorlevel}
          />
          <br />
          <input
            type="text"
            placeholder="Environment"
            value={favorEnvironment}
            onChange={this.onTextboxChangeFavorEnvironment}
          />
          <br />
          <input
            type="text"
            placeholder="Title"
            value={favorTitle}
            onChange={this.onTextboxChangeFavorTitle}
          />
          <br />
          <input
            type="text"
            placeholder="Description"
            value={favorDescription}
            onChange={this.onTextboxChangeFavorDescription}
          />
          <br />
          <input
            type="text"
            placeholder="Time Period"
            value={favorTimePeriod}
            onChange={this.onTextboxChangeFavorTimePeriod}
          />
          <br />
          <input
            type="text"
            placeholder="Merit"
            value={favorMerit}
            onChange={this.onTextboxChangeFavorMerit}
          />
          <br />
          <button onClick={this.favorCreation}>Create Favor</button>
        </div>
      );
    } else{
      return (
        <div>
          <p>Favors:</p>
          <h2></h2>
          <ul>
            {this.state.favors.map((favor, i) => (
              <li key={i}>
                <span>{favor.favorLevel} </span>
              </li>
            ))}
          </ul>
          <button onClick={this.addFavorSection}>Create Favor</button>
        </div>
      );
    }

  }
}

export default Favor;