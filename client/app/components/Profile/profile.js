import React, { Component } from 'react';
import 'whatwg-fetch';
import { Route, Redirect } from 'react-router';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Cultivating from './cultivating.jsx';

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

        // this.onTextboxChangeCountry = this.onTextboxChangeCountry.bind(this);		
        // this.onTextboxChangePGames = this.onTextboxChangePGames.bind(this);
        // this.onTextboxChangePGamesNickName = this.onTextboxChangePGamesNickName.bind(this);
        // this.onTextboxChangeCGames = this.onTextboxChangeCGames.bind(this);
        // this.onTextboxChangeCGamesNickName = this.onTextboxChangeCGamesNickName.bind(this);
        // this.editProfile = this.editProfile.bind(this);
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

    // onTextboxChangeCountry(event) {
    // 	this.setState({
    // 	  country: event.target.value,
    // 	})
    //   } 
    //   onTextboxChangePGames(event) {
    // 	this.setState({
    // 	  pGames: event.target.value,
    // 	})
    //   }
    //   onTextboxChangePGamesNickName(event) {
    // 	this.setState({
    // 	  pGameNickName: event.target.value,
    // 	})
    //   }
    //   onTextboxChangeCGames(event) {
    // 	this.setState({
    // 	  cGames: event.target.value,
    // 	})
    //   }
    //   onTextboxChangeCGamesNickName(event) {
    // 	this.setState({
    // 	  signUpNickName: event.target.value,
    // 	})
    //   }



    editProfile() {
        //     const {
        //     country,
        //     pGames,
        //     pGameNickName,
        //     cGames,
        //     cGamesNickName
        //     } = this.state;

        //     // const obj = getFromStorage('the_main_app');
        //     // const { token } = obj;
        //     // fetch('/api/user/' + token + '/accUpdate', {
        //     // method: 'PUT',
        //     // headers: {
        //     // 'Content-Type': 'application/json'
        //     // },
        //     // body: JSON.stringify({
        //     // merit: merit - newMerit,
        //     // cultivation: newCultivation
        //     // }),
        //     // }).then(res => res.json())
        //     return (
        //         <div>
        //             <input
        //                 type="text"
        //                 placeholder="Country"
        //                 value={country}
        //                 onChange={this.onTextboxChangeCountry}
        //             />
        //             <br />
        //             <input
        //                 type="text"
        //                 placeholder="Previous Games you've played"
        //                 value={pGames}
        //                 onChange={this.onTextboxChangePGames}
        //             />
        //             <br />
        //             <input
        //                 type="text"
        //                 placeholder="Previous Nick Name on those games you've played"
        //                 value={pGameNickName}
        //                 onChange={this.onTextboxChangePGamesNickName}
        //             />
        //             <br />
        //             <input
        //                 type="text"
        //                 placeholder="Current Multiplayer games you are playing"
        //                 value={cGames}
        //                 onChange={this.onTextboxChangeCGames}
        //             />
        //             <br />
        //             <input
        //                 type="text"
        //                 placeholder="Country"
        //                 value={cGamesNickName}
        //                 onChange={this.onTextboxChangeCGamesNickName}
        //             />
        //             <br />
        //             <button onClick={() => { this.editProfileButton() }}>
        //                 Submit
        //                 </button>
        //         </div>
        //     )

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
                    <Cultivating merit={this.state.merit} cultivation={this.state.cultivation} />
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