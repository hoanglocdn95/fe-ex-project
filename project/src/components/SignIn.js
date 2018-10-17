import React, {Component} from "react";
import {BrowserRouter as Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

class SignIn extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div id="body">
                    <Route path='/sign/login' component={Login} />
                    <Route path='/sign/register' component={Register} />
                </div>
            </div>
        )
    }
}
export default SignIn;
