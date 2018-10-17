import React, { Component } from 'react';

class CartAddress extends Component {
    render() {
        return (
            <div className="bcc-address">
                <form>
                    <div className="form-group">
                        <label htmlFor="addressDelivery">Địa Chỉ Giao Hàng</label>
                        <input type="text" className="form-control" id="addressDelivery"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="methodDelivery">GIao Hàng</label>
                        <select className="form-control" id="methodDelivery">
                            <option value="saving">Tiêu Chuẩn</option>
                            <option value="saving">Tiết Kiệm</option>
                            <option value="saving">Nhanh Chóng</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="costDelivery">Phí Giao Hàng</label>
                        <input type="number" className="form-control" id="costDelivery" disabled></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeDelivery">THời Gian Giao Hàng</label>
                        <input type="text" className="form-control" id="timeDelivery" disabled></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default CartAddress;
