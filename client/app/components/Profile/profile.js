import React, { Component } from 'react';
import 'whatwg-fetch';
import { Route, Redirect } from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      token: "",
      email: "",
      cultivation: "",
      merit: ""
    };

    this.rankUpBtn = this.rankUpBtn.bind(this);

  }
  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      fetch('/api/user/' + token)
        .then(res => res.json())
        .then(json => {
          this.setState({
            users: json
          });
        });
    }
  }

  cultivating() {
    const {
        users,
    } = this.state;

    let merit = this.state.users[0].merit;
    let cultivation = this.state.users[0].cultivation;

    //Martial Palace
    if (cultivation == "Houtian" & merit >= 50) {
        cultivation = "Xiantian";
        merit = 50;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Xiantian" & merit >= 120) {
        cultivation = "Zifu Disciple";
        merit = 120;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Zifu Disciple" & merit >= 140) {
        cultivation = "Wanxiang Adept";
        merit = 140;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Wanxiang Adept" & merit >= 160) {
        cultivation = "Primal Daoist";
        merit = 160;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Primal Daoist" & merit >= 180) {
        cultivation = "Void Immortal";
        merit = 180;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Void Immortal" & merit >= 450) {
        cultivation = "Empyrean God";
        merit = 450;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Empyrean God" & merit >= 600) {
        cultivation = "True God";
        merit = 600;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "True God" & merit >= 640) {
        cultivation = "Elder God";
        merit = 640;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Elder God" & merit >= 680) {
        cultivation = "World God";
        merit = 680;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "World God" & merit >= 720) {
        cultivation = "Samsara Daolord";
        merit = 720;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    //Guardian Palace
    if (cultivation == "Spirit Realm" & merit >= 50) {
        cultivation = "Origin Realm";
        merit = 50;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Origin Realm" & merit >= 120) {
        cultivation = "Profound Realm";
        merit = 120;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Profound Realm" & merit >= 140) {
        cultivation = "Heaven realm";
        merit = 140;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Heaven realm" & merit >= 160) {
        cultivation = "Martial Lord";
        merit = 160;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Martial Lord" & merit >= 180) {
        cultivation = "Martial King";
        merit = 180;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Martial King" & merit >= 500) {
        cultivation = "Martial Emperor";
        merit = 500;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Martial Emperor" & merit >= 650) {
        cultivation = "Martial Ancestor";
        merit = 650;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Martial Ancestor" & merit >= 690) {
        cultivation = "True Immortal";
        merit = 690;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "True Immortal" & merit >= 730) {
        cultivation = "Heavenly immortal";
        merit = 730;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
    else if (cultivation == "Heavenly immortal" & merit >= 770) {
        cultivation = "Martial immortal";
        merit = 770;
        return (<button onClick={() => { this.rankUpBtn(cultivation, merit) }}>Rank Up</button>);
    }
}

  rankUpBtn(newCultivation, newMerit) {
    const obj = getFromStorage('the_main_app');
    const { token } = obj;
    fetch('/api/user/' + token + '/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        merit: this.state.users[0].merit - newMerit,
        cultivation: newCultivation,
      }),
    }).then(res => res.json())
  }  

  render() {
    const {
      users,
    } = this.state;

    return (
      <div>
        <p>Profiles:</p>
        <h2></h2>
        {this.state.users.map((user, i) => (
          <div key={0}>
            <h2>Welcome {user.nickName}</h2>
            <span>{user.merit} </span>
            <span>{user.cultivation} </span>
            {this.cultivating()}
            <button  onClick={() => { this.editProfile() }}>
                Edit Your Profile
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default Profile;
