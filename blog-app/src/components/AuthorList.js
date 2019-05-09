import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';



class AuthorList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList() {
    return this.props.users.map(user => {
      return (
        <div className="item" key={user.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{user.name}</h2>

            </div>

          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(AuthorList);
