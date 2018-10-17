import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Cart from './components/Cart';
import User from './components/User';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
          <Header />
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register}/>
            <Route path='/cart' component={Cart} />
            <Route path='/user' component={User} />
            <Route path='/' component={Body} />
          </Switch>
          <Footer />
          </div>
        </Router>
    )
  }
}
export default App;
