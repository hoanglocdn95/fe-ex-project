import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkLogin: false,
            userName: "",
            password: ""
        }
    }
    updateState = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        this.setState({
            [id]: value
        });
    }
    checkUser = (e) => {
        e.preventDefault();
        if (localStorage.getItem("userName") !== null) {
            alert("Bạn cần đăng xuất trước!");
        } else {
            var checkLog = 0;
            this.props.user.map(value => {
                if (value.userName === this.state.userName && value.password === this.state.password) {
                    checkLog = 1;
                    localStorage.setItem("password", value.password);
                    localStorage.setItem("phone", value.phone);
                }
            });
            if (checkLog === 1) {
                localStorage.setItem("userName", this.state.userName);
                alert("Đăng nhập thành công");
                this.setState({
                    checkLogin: true
                })
            } else {
                alert("Sai tên hoặc password");
            }
        }
    }
    componentDidMount() {
        document.title = "THL Login";
        this.props.checkUser();
    }
    render() {
        if (this.state.checkLogin) {
            window.location.reload()
            return <Redirect to="/" />
        }
        return (
            <div className="container-fluid">
                <div id="body">
                    <div className="modal-login">
                        <form action="">
                            <div className="modal-login-img">
                                <img src="/lib/img/login-user.png" alt="User"></img>
                            </div>
                            <div className="modal-login-user">
                                <div className="form-group">
                                    <label htmlFor="userName">User Name</label>
                                    <input className="form-control" type="text" id="userName" placeholder="ex:robododn95" required
                                        onChange={this.updateState}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control" type="password" id="password" required
                                        onChange={this.updateState}></input>
                                </div>
                                <div>
                                    <button type="submit"
                                        onClick={this.checkUser}
                                    >Login</button>
                                    <label>
                                        <input type="checkbox" name="remember"></input> Remember me
                            </label>
                                </div>
                            </div>
                            <div className="modal-login-btn d-flex">
                                <div className="w-100">
                                    <input type="reset" value="Reset"></input>
                                </div>
                                <div className="flex-shrink-0">
                                    <span id="mlb-register">
                                        <Link to='/register'>Have no account?</Link>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.getUser
})
const mapDispatchToProps = (dispatch) => ({
    checkUser: () => dispatch(fetchUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
