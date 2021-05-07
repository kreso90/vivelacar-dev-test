import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePost from './components/SinglePost'
import PostList from './components/PostList'

function App() {

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={PostList}></Route>
          <Route path="/singlepost/:id" component={SinglePost}></Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
