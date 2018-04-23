import React, { Component } from 'react';
import 'whatwg-fetch';

import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';

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
      favorCreator: "",
      favorAide: "",
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
    this.aideButton = this.aideButton.bind(this);
    this.closeFavorButton = this.closeFavorButton.bind(this);

  }
  componentDidMount() {
    fetch('/api/favors')
      .then(res => res.json())
      .then(json => {
        this.setState({
          favors: json,
          favorAide: json[0].favorAide,
        });
      });

    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      fetch('/api/user/' + token)
        .then(res => res.json())
        .then(json => {
          this.setState({
            nickName: json[0].nickName,
          });
        });
    }
  }

  onTextboxChangeFavorCreator(event) {
    this.setState({
      favorCreator: event.target.value,
    })
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
      favorCreator,
      favorLevelCreation,
      favorEnvironment,
      favorTitle,
      favorDescription,
      favorTimePeriod,
      favorMerit,
      nickName,
      favors,
      addFavor,
    } = this.state;

    fetch('/api/favors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorCreator: nickName,
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

  addFavorAide(ID) {
    const {
      favorAide,
      nickName
    } = this.state;

    const favorID = ID;
    fetch('/api/favors/' + favorID + '/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorAide: nickName
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) { }
      });
  }

  aideButton(aide, ID, favorCreator){
    const {
      nickName
    } = this.state;

    if(aide == "" & favorCreator != nickName) {
      return(
        <button onClick={() => { this.addFavorAide(ID) }}>Aide</button>
      )
    }    
  }


  closeFavorButton(favorCreator, ID, favorAide, merit){
    if(favorCreator == nickName) {
      return(
        <button onClick={() => { this.closeFavor(ID, favorAide, favorCreator, merit) }}>Close the Favor</button>
      )
    }    
  }

  closeFavor(ID, favorAide, favorCreator, merit){
    //pyrvo opredeli ranka
    //nameri favorAide sloju mu ranka i mu dobavi merita
    //nameri favorCreator i mu mahni merit
    //find favor ID and delete it
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
    } else {
      return (
        <div>
          <h1>Favors</h1>
          {this.state.favors.map((favor, i) => (
            <div key={i}>
              <div><span>Favor Level: {favor.favorLevel}</span></div>
              <div><span>Favor Environment: {favor.environment}</span></div>
              <div><span>Favor Title: {favor.title}</span></div>
              <div><span>Favor Description: {favor.description}</span></div>
              <div><span>Favor Time Period: {favor.timePeriod}</span></div>
              <div><span>Favor Reward Merit: {favor.merit}</span></div>
              <div><span>Favor Creator: {favor.favorCreator}</span></div>
              <div><span>Favor Aide: {favor.favorAide}</span></div>
              <div><span>Favor Level: {favor.favorLevel}</span></div>
              {this.aideButton(favor.favorAide, favor._id, favor.favorCreator)}
              {this.closeFavorButton(favor.favorCreator, favor._id, favor.favorAide, favor.merit)}
              <hr />
            </div>

          ))}
          <button onClick={this.addFavorSection}>Create Favor</button>
        </div>
      );
    }

  }
}

export default Favor;