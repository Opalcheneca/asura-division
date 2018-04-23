import React, { Component } from 'react';
import 'whatwg-fetch';

import MeritMonthly from './meritMonthly.jsx';
import AllUsers from './allUsers.jsx';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <AllUsers />
                <MeritMonthly />
            </div>
        )
    }
}

export default AdminPage;