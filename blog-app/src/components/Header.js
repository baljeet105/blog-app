import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondarry pointing menu" style={{marginTop: '2em'}}>
      <Link to='/' className="item">
      All PostList
      </Link>

      <Link to='/CreatePost' className="item">
        Create Post
      </Link>

      <div className="right menu">
      <Link to='/AuthorList' className="item">
        Author List
      </Link>
      </div>

    </div>
)};

export default Header;
