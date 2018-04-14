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
            nickName: "",
            country: "",
            totalmerit: "",
            avatar: "",
            roles: "",
            pGame: "",
            pGameNickName: "",
            cGames: "",
            cGameNickNames: "",
            heavenCrystals: "",
            fRank: "",
            gRank: "",
            memberTitle: "",
            palace: "",
            blackKarma: "",
        };
        this.rankUpBtn = this.rankUpBtn.bind(this);
    }

    componentDidMount() {
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
                        nickName: json[0].nickName,
                        country: json[0].country,
                        totalMerit: json[0].totalMerit,
                        avatar: json[0].avatar,
                        roles: json[0].roles,
                        pGame: json[0].pGame,
                        pGameNickName: json[0].pGameNickName,
                        cGames: json[0].cGames,
                        cGameNickNames: json[0].cGameNickNames,
                        heavenCrystals: json[0].heavenCrystals,
                        fRank: json[0].fRank,
                        gRank: json[0].gRank,
                        memberTitle: json[0].memberTitle,
                        palace: json[0].palace,
                        blackKarma: json[0].blackKarma,
                    });
                });
        }
    }

    componentDidUpdate() {
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
            nickName,
            country,
            totalMerit,
            avatar,
            roles,
            pGame,
            pGameNickName,
            cGames,
            cGameNickNames,
            heavenCrystals,
            fRank,
            gRank,
            memberTitle,
            palace,
            blackKarma,
        } = this.state;

        return (
            <div>
                <h1>Profile Page</h1>
                <h2>Hello, {this.state.nickName}</h2>
                <div className="ad-profile">
                    <h2>AD Profile</h2>
                    <div><span>Your Asura Palace: {this.state.palace} Palace</span></div>
                    <div><span>Your Total Merit: {this.state.totalMerit}M</span></div>
                    <div><span>Your Merit: {this.state.merit}M</span></div>
                    <div><span>Your Cultivation: {this.state.cultivation}</span></div>
                    <div><span>Heaven Crystals: {this.state.heavenCrystals}</span></div>
                    <div><span>Favor Rank: {this.state.fRank}</span></div>
                    <div><span>Guardian Rank: {this.state.gRank}</span></div>
                    <div><span>Your Asura Titles: {this.state.memberTitle}</span></div>
                    <div><span>Your Black Karma Points: {this.state.blackKarma}</span></div>
                    {this.cultivating()}
                </div>
                <div className="account">
                    <h2>AD Account</h2>
                    <div><span>Your Nick Name: {this.state.nickName}</span></div>
                    <div><span>Your Country: {this.state.country}</span></div>
                    <div><span>Your Avatar: {this.state.avatar}</span></div>
                    <div><span>Your Role: {this.state.roles}</span></div>
                </div>
                <div>
                    <h2>About Your Games History</h2>
                    <div><span>Previous Games you have played: {this.state.pGame}</span></div>
                    <div><span>Previous Games nick names: {this.state.pGameNickName}</span></div>
                    <div><span>Current Games: {this.state.cGames}</span></div>
                    <div><span>Current Games nickname: {this.state.cGameNickNames}</span></div>
                </div>
                <div>
                    <h2>Hero Armors</h2>
                </div>
                <button onClick={() => { this.editProfile() }}>
                    Edit Your Profile
                </button>
            </div>
        );
    }
}
export default Profile;