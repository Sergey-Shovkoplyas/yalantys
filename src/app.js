import React from 'react';
import axios from 'axios';

import UserList from './Components/UserList';
import MonthList from './Components/MonthList';

export default class extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    const yalantisApiUrl = 'https://yalantis-react-school.herokuapp.com/api/task0/users'

    axios.get(yalantisApiUrl)
      .then(res => {
        const users = res.data;
        this.setState({ users });

      })
  }

  render() {
    return (
      <div className="app">
        <div className="user-list-wrap">
          <h2>User list</h2>
          <UserList list={this.state.users} />
        </div>
        <h2>Users birthdays by month</h2>
        <MonthList list={this.state.users} />
      </div>
    );
  }
}


