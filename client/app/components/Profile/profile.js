import React, { Component } from 'react';
import 'whatwg-fetch';
import { Route, Redirect } from 'react-router';
import { NotificationContainer, NotificationManager } from 'react-notifications';

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
            merit: "",
            nickName: ""
        };
        this.rankUpBtn = this.rankUpBtn.bind(this);
    }

    componentDidMount () {
        const {
            merit,
            cultivation
        } = this.state;

        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            fetch('/api/user/' + token)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        merit: json[0].merit,
                        cultivation: json[0].cultivation,
                        nickName: json[0].nickName
                    });
                });
        }
    }

    componentDidUpdate(){
        let {
            merit,
            cultivation
        } = this.state;

        window.addEventListener('load', this.handleLoad);
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            fetch('/api/user/' + token)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        merit: json[0].merit,
                        cultivation: json[0].cultivation,
                        nickName: json[0].nickName
                    });
                });
        }
    }

    cultivating() {
        const {
            merit,
            cultivation
        } = this.state;

        let meritToTake = 0;
        let newCultivation = "";

        //Martial Palace
        if (cultivation == "Houtian" & merit >= 50) {
            newCultivation = "Xiantian";
            meritToTake = 50;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Xiantian" & merit >= 120) {
            newCultivation = "Zifu Disciple";
            meritToTake = 120;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Zifu Disciple" & merit >= 140) {
            newCultivation = "Wanxiang Adept";
            meritToTake = 140;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Wanxiang Adept" & merit >= 160) {
            newCultivation = "Primal Daoist";
            meritToTake = 160;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Primal Daoist" & merit >= 180) {
            newCultivation = "Void Immortal";
            meritToTake = 180;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Void Immortal" & merit >= 450) {
            newCultivation = "Empyrean God";
            meritToTake = 450;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Empyrean God" & merit >= 600) {
            newCultivation = "True God";
            meritToTake = 600;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "True God" & merit >= 640) {
            newCultivation = "Elder God";
            meritToTake = 640;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Elder God" & merit >= 680) {
            newCultivation = "World God";
            meritToTake = 680;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "World God" & merit >= 720) {
            newCultivation = "Samsara Daolord";
            meritToTake = 720;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        //Guardian Palace
        if (cultivation == "Spirit Realm" & merit >= 50) {
            newCultivation = "Origin Realm";
            meritToTake = 50;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Origin Realm" & merit >= 120) {
            newCultivation = "Profound Realm";
            meritToTake = 120;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Profound Realm" & merit >= 140) {
            newCultivation = "Heaven realm";
            meritToTake = 140;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Heaven realm" & merit >= 160) {
            newCultivation = "Martial Lord";
            meritToTake = 160;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Martial Lord" & merit >= 180) {
            newCultivation = "Martial King";
            meritToTake = 180;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Martial King" & merit >= 500) {
            newCultivation = "Martial Emperor";
            meritToTake = 500;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Martial Emperor" & merit >= 650) {
            newCultivation = "Martial Ancestor";
            meritToTake = 650;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Martial Ancestor" & merit >= 690) {
            newCultivation = "True Immortal";
            memeritToTakerit = 690;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "True Immortal" & merit >= 730) {
            newCultivation = "Heavenly immortal";
            meritToTake = 730;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
        else if (cultivation == "Heavenly immortal" & merit >= 770) {
            newCultivation = "Martial immortal";
            meritToTake = 770;
            return (<button onClick={() => { this.rankUpBtn(newCultivation, meritToTake) }}>Rank Up</button>);
        }
    }

    rankUpBtn(newCultivation, newMerit) {
        const {
            merit,
            cultivation
        } = this.state;

        const obj = getFromStorage('the_main_app');
        const { token } = obj;
        fetch('/api/user/' + token + '/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                merit: merit - newMerit,
                cultivation: newCultivation
            }),
        }).then(res => res.json())
    }

    render() {
        const {
            merit,
            cultivation,
            nickName
        } = this.state;

        return (
            <div>
                <p>Profiles:</p>
                <h2>{this.state.nickName}</h2>
                <h2>{this.state.merit}</h2>
                <h2>{this.state.cultivation}</h2>
                {this.cultivating()}
                <button onClick={() => { this.editProfile() }}>
                    Edit Your Profile
                </button>
            </div>
        );
    }
}
export default Profile;