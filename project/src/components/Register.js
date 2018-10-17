import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { addUser } from '../actions/index';
import { connect } from 'react-redux';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userRegister: "",
            passwordRegister: "",
            confirmPassword: "",
            mailRegister: "",
            phoneRegister: "",
            changePage: false
        }
    }
    updateState = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        this.setState({
            [id]: value
        });
    }
    checkSubmit = (e) => {
        e.preventDefault();
        if (
            this.state.userRegister === "" ||
            this.state.passwordRegister === "" ||
            this.state.mailRegister === "" ||
            this.state.phoneRegister === ""
        ) {
            alert('bạn chưa nhập đủ dữ liệu')
        } else {
            if (this.state.passwordRegister !== this.state.confirmPassword) {
                alert("password và confirmPassword chưa giống nhau")
            } else {
                const user = {
                    userName: this.state.userRegister,
                    password: this.state.passwordRegister,
                    phone: this.state.phoneRegister,
                    mail: this.state.mailRegister,
                    avatar: "",
                    cart: []
                }
                alert('đăng ký thành công');
                this.setState({
                    changePage: true
                })
                this.props.addUser(user);
            }
        }
    }
    render() {
        if (this.state.changePage === true) {
            return (
                <Redirect to='/login' />
            )
        }
        return (
            <div className="container-fluid">
                <div id="body">
                    <div className="modal-register">
                        <form action="">
                            <div className="modal-register-user">
                                <div className="form-group">
                                    <label htmlFor="userRegister">User Name</label>
                                    <input type="text" className="form-control" id="userRegister" required
                                        onChange={this.updateState}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordRegister">Password</label>
                                    <input type="password" className="form-control" id="passwordRegister" required
                                        onChange={this.updateState}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" required
                                        onChange={this.updateState}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mailRegister">Mail</label>
                                    <input type="email" className="form-control" id="mailRegister" required
                                        onChange={this.updateState}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneRegister">Phone Number</label>
                                    <input type="phone" className="form-control" id="phoneRegister" required
                                        onChange={this.updateState}></input>
                                </div>
                                <div className="form-group d-flex">
                                    <div className="w-100">
                                        <input type="reset" value="Reset"></input>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <input type="submit" value="Register"
                                            onClick={this.checkSubmit}>
                                        </input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => ({
    addUser: (user) => dispatch(addUser(user))
})
export default connect(null, mapDispatchToProps)(Register);
