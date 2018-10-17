import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class User extends Component {
    constructor(props){
        super(props);
        this.state={
            userName: localStorage.userName,
            phone: localStorage.phone,
            password: localStorage.password,
            checkLogout: false
        }
    }
    componentDidMount() {
        document.title = "THL User"
    }
    logOut = () => {
        localStorage.clear();
        this.setState({
            checkLogout: true
        })
    }
    render() {
        if (this.state.checkLogout) {
            window.location.reload()
            return <Redirect to="/" />
        }
        return (
            <div className="container-fluid">
                <div id="body">
                    <div id="body-user">
                        <div className="modal-login">
                            <form action="">
                                <div className="modal-login-img">
                                    <img src="lib/img/login-user.png" alt="User"></img>
                                </div>
                                <div className="modal-login-user">
                                    <div className="form-group">
                                        <label htmlFor="userName">User Name</label>
                                        <input className="form-control" type="text" name="userName" disabled
                                            value={this.state.userName}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input className="form-control" type="password" name="password" disabled
                                            value={this.state.password}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="realName">Your Name</label>
                                        <input className="form-control" type="text" name="realName" disabled
                                            value={this.state.userName}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <input className="form-control" type="text" name="phoneNumber" disabled
                                            value={this.state.phone}></input>
                                    </div>
                                    <div className="custom-file form-group">
                                        <input type="file" className="custom-file-input" id="customFile"></input>
                                        <label className="custom-file-label" htmlFor="customFile">Update avatar</label>
                                    </div>
                                    <hr></hr>
                                    <div className="form-group">
                                        <button type="submit">Save</button>
                                    </div>
                                </div>
                                <div className="modal-login-btn d-flex">
                                    <div className="w-100">
                                        <input type="reset" value="Reset"></input>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <span id="mlb-register"
                                            onClick={this.logOut}>
                                            Log Out
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default User;
