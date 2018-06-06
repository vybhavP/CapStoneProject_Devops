import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
// import { Button, Header, Icon, Image, Menu } from 'semantic-ui-react';
// import Menubar from './components/menubar.js';
// import ContainerExampleFluid from './components/container';
// import DividerExampleHorizontal from './components/divider';
// import MyImage from './images/home.jpg';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/home';
import About from './components/about';
import Topics from './components/topics';
import LoginOrSignup from './components/loginorsignup';
import UserLogin from './components/user_login';
import UserSignup from './components/user_signup';
import UserHome from './components/user_home';
import AddCourse from './components/add_course';
import ViewCourses from './components/view_courses';
import UpdateCourse from './components/update_course';
import DeleteCourse from './components/delete_course';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Menubar /> */}
        {/* <Image src={MyImage} fluid /> */}
        <Router>
    <div>
      <ul className="Home_menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login or Signup</Link>
        </li>
        {/* <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li> */}
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginOrSignup} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/user_login" component={UserLogin} />
      <Route path="/user_signup" component={UserSignup} />
      <Route path="/user_home" component={UserHome} />
      <Route path="/add_course" component={AddCourse} />
      <Route path="/view_courses" component={ViewCourses} />
      <Route path="/update_course" component={UpdateCourse} />
      <Route path="/delete_course" component={DeleteCourse} />
    </div>
  </Router>
        {/* <ContainerExampleFluid /> */}
        {/* <Button primary as={NavLink} to="/login">Login</Button> */}
        {/* <DividerExampleHorizontal /> */}
      </div>
    );
  }
}

export default App;
