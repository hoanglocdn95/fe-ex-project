import React, { Component } from 'react';
class CartPayment extends Component {
    render() {
        return (
            <div className="bcc-payment">
                <div className="form-group">
                    <label htmlFor="methodPayment">Phương Thức Thanh Toán</label>
                    <select className="form-control" name="methodPayment" id="methodPayment">
                        <option value="method1">Thanh Toán Khi Nhận Hàng</option>
                        <option value="method1">Thanh Toán Qua Ngân Hàng</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="bankPayment">Ngân Hàng Thanh Toán :</label>
                    <select className="htmlForm-control" name="bankPayment" id="bankPayment">
                        <option value="bank1">ACB</option>
                        <option value="bank2">Vietcom Bank</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="button" className="form-control" value="CONFIRM"></input>
                </div>
            </div>
        )
    }
}
export default CartPayment;
