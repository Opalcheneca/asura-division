import React from 'react';
import 'whatwg-fetch';
import { Route, Redirect } from 'react-router';

export default class MeritMonthly extends React.Component{
    constructor(props){
        super(props);
    }

    meritMonthly() {
        const day = new Date();
        if (day.getDate() == 22) {
            fetch('/api/users/monthly', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            console.log("Merit Delivered")
        }
        else {
            console.log("It is still not the time for this")
        }

    }

    render() {
        return (
            <div>
                <button onClick={() => { this.meritMonthly() }}>
                    Give Montly Merit
                </button>
            </div>
        )
    }    
};