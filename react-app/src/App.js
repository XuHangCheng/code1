import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import B from './components/B.js';
import A from './components/A.js';
import Home from './components/Home.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>

            <Link to='/b'>跳转B页</Link>|
            <Link to='/a'>跳转A页</Link>|
            <Link to='/'>跳转Home页</Link>
            {/* <Route exact path='/' component={Home}></Route>
            <Route path='/b' component={B}></Route>
            <Route path='/a' component={A}></Route> */}
            <Switch>
              <Route path='/b' component={B}></Route>
              <Route path='/a' component={A}></Route>
              <Route path='/' component={Home}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
