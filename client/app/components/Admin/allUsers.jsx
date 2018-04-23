import React from 'react';
import 'whatwg-fetch';
import { Route, Redirect } from 'react-router';

export default class MeritMonthly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: []
        };
    }

    allUsers() {    
        fetch('/api/users')
          .then(res => res.json())
          .then(json => {
            this.setState({
                allUsers: json,
            });
          });
        return (
            <div>
              {this.state.allUsers.map((user, i) => (
                <div className="newsletter-box" key={i}>
                  <h3>{user.nickName}</h3>
                  <div>{user.email}</div>
                  <div>{user.merit}</div>
                  <div>{user.totalMerit}</div>
                  <div>{user.roles}</div>
                  <div>{user.pGame}</div>
                  <div>{user.pGameNickName}</div>
                  <div>{user.cGameNickNames}</div>
                  <div>{user.cGames}</div>
                  <div>{user.heavenCrystals}</div>
                  <div>{user.fRank}</div>
                  <div>{user.memberTitle}</div>
                  <div>{user.memberTitle}</div>
                  <div>{user.cultivation}</div>
                  <div>{user.blackKarma}</div>
                  <div>{user.totalMerit}</div>
                  <div>{user.totalMerit}</div>
                  <div>{user.totalMerit}</div>
                  <div>{user.totalMerit}</div>
                  <div>{user.totalMerit}</div>
                </div>
              ))}
            </div>
          )    
    }

    render() {
        const {
            allUsers
        } = this.props;
        return(
            this.allUsers()
        )
    }
};