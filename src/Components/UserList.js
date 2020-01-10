import React from 'react';

export default class UserList extends React.Component {
  render() {
    let list = this.props.list;
    return (
      <ol className="user-list">
        {list.map(person => 

        <li className="user-list__item" key={person.id}>{person.firstName} {person.lastName}</li>

        )}
      </ol>
    );
  }
}