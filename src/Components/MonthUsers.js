import React from 'react';

import UserList from './UserList';

export default class MonthUsers extends React.Component {
  state = {
    hover: false
  };

  toggleHover = (e) => {
    return this.setState({ hover: !this.state.hover })
  };

  render() {
    let month = this.props.month;

    return (
      <div className={`${month.monthColor} month`}>
        <div className={`${month.monthName} month__title`} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          {month.monthName}
        </div>
        {this.state.hover ? 
        <UserList list={month.usersBirthday}/> : 
        <div></div>}
      </div>
    );
  }
}