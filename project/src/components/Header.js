import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const size24 = {
    fontSize: "24px"
}
const inline = {
    display: "inline-block"
}
const none = {
    display: "none"
}
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: none,
            displayLogin: inline,
            displayName: none,
        }
    }
    componentDidMount = () => {
        if (localStorage.getItem('userName') !== null &&
            localStorage.getItem(localStorage.getItem('userName')) !== null) {
            this.setState({
                display: inline
            })
        }
        if (localStorage.getItem('userName') !== null) {
            this.setState({
                displayLogin: none,
                displayName: inline,
            })
        }
    }
    render() {
        return (
            <header>
                <div className="container-fluid">
                    <div id="header">
                        <div className="row">
                            <div className="col-12 col-xs-12 col-sm-3 col-md-2 col-lg-2" id="header-img">
                                <Link to='/'>THL Shop</Link>
                            </div>
                            <div className="col-12 col-xs-12 col-sm-9 col-md-4 col-lg-6" id="header-search">
                                <input type="search" name="search" placeholder="search something" />
                            </div>
                            <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-2" id="header-cart">
                                
                                <Link to='/cart' style={this.state.display}>
                                <span>
                                    <i className="fa fa-shopping-cart" style={size24}></i>
                                </span>
                                    Shopping Cart
                                </Link>
                            </div>
                            <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-2" id="header-user">
                                <Link to='/login' style={this.state.displayLogin}>Login </Link>
                                <span>
                                    <i className="fa fa-user" style={size24}></i>
                                </span>
                                <Link to='/user' style={this.state.displayName} >
                                    {localStorage.getItem('userName')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;
