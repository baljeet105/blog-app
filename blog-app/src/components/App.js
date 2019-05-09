import React from 'react';
import PostList from './PostList';
import Header from './Header';
import {Router, Route } from 'react-router-dom';

import CreatePost from './CreatePost';
import AuthorList from './AuthorList';
import history from '../history';



const App = () => {
  return (
    <div className="main">
      <div className="ui container" >

        <Router history={history}>
          <div>
          <Header />
            <Route path="/" exact component={PostList} />
            <Route path="/createpost" exact component={CreatePost} />
            <Route path="/AuthorList" exact component={AuthorList} />
          </div>
        </Router>

      </div>
    </div>
  );
};

export default App;
