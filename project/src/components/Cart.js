import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CartProduct from './CartProduct';
import CartAddress from './CartAddress';
import CartTotal from './CartTotal';
import CartPayment from './CartPayment';
class Cart extends Component {
    componentDidMount() {
        document.title = "THL Cart"
    }
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div id="body">
                        <div id="body-cart">
                            <div id="body-cart-process">
                                <div className="row">
                                    <div className="bcp-bar col-12 col-sm-3 shown">
                                        <h4>
                                            <Link to='/cart/product'>PRODUCTS</Link>
                                        </h4>
                                    </div>
                                    <div className="bcp-bar col-12 col-sm-3">
                                        <h4>
                                            <Link to='/cart/address'>ADDRESS</Link>
                                        </h4>
                                    </div>
                                    <div className="bcp-bar col-12 col-sm-3">
                                        <h4>
                                            <Link to='/cart/total'>TOTAL</Link>
                                        </h4>
                                    </div>
                                    <div className="bcp-bar col-12 col-sm-3">
                                        <h4>
                                            <Link to='/cart/payment'>PAYMENT</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div id="body-cart-content">
                                <Switch>
                                    <Route path='/cart/product' component={CartProduct} />
                                    <Route path='/cart/address' component={CartAddress} />
                                    <Route path='/cart/total' component={CartTotal} />
                                    <Route path='/cart/payment' component={CartPayment} />
                                    <Route component={CartProduct} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div >
            </Router>
        )
    }
}
export default Cart;
