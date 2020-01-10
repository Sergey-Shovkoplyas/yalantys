import React from 'react';

import MonthUsers from './MonthUsers';

export default class MonthList extends React.Component {

  state = {
    hover: false
  };

  toggleHover = (e) => {
    return this.setState({hover: !this.state.hover})
  };

  //Create arr of users by month
  getUsersByMonth(users) {
    const MONTH = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];
    let userByMonth = [];
  
    for (let i = 0; i < 12; i++) {
      let monthName = MONTH[i]
      let usersBirthday = users.filter(item => +item.dob.slice(5, 7) === (i + 1));
      let monthColor = getColor();
      function getColor() {
        let usersUantity = usersBirthday.length;
        if (usersUantity >= 0 && usersUantity <= 2) {
          return 'month--gray'
        } else if (usersUantity >= 3 && usersUantity <= 6) {
          return 'month--blue'
        } else if (usersUantity >= 7 && usersUantity <= 10) {
          return 'month--green'
        } else if (usersUantity >= 11) {
          return 'month--red'
        }
      };
  
      userByMonth[i] = {
        monthName: monthName,
        monthColor: monthColor,
        usersBirthday: usersBirthday
      }
    }
  
    return userByMonth
  
  }

  render() {
    let users = this.props.list;
    let userByMonth = this.getUsersByMonth(users);

    return (
      <ol className="month-list">
        {userByMonth.map((month, index) =>

          <li className="month-list__item" key={index}>
            <MonthUsers month={month}/>
          </li>

        )}
      </ol>
    );
  }
}
