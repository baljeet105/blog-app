import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers, deletePost } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }


  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
            <button onClick={ () => this.props.deletePost(post.id)} className ="ui button negative right floated">Delete</button>
              <h2>{post.title}</h2>
              <p>{post.body}</p>

            </div>
            <UserHeader userId={post.name} />
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
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers, deletePost }
)(PostList);
