import React, { Component } from 'react';
class CartTotal extends Component {
    render() {
        return (
            <div className="bcc-total">
                <div className="bcc-total-item">
                    <div className="row">
                        <div className="col-8 col-sm-5">
                            <h4>Ốp Lưng Sam Sung</h4>
                        </div>
                        <div className="col-4 col-sm-1">
                            <h4>1</h4>
                        </div>
                        <div className="col-6 col-sm-3">
                            <h4>90.000</h4>
                        </div>
                        <div className="col-6 col-sm-3">
                            <h4><strong>90.000</strong></h4>
                        </div>
                    </div>
                </div>
                <div className="bcc-total-delivery">
                    <div className="form-group row">
                        <label htmlFor="feeDelivery" className="col-sm-4 col-form-label">Phí Vận Chuyển</label>
                        <div className="col-sm-8">
                            <input className="form-control" value="30.000" id="feeDelivery" disabled></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="totalPayment" className="col-sm-4 col-form-label">
                            <h4>Tổng tiền</h4>
                        </label>
                        <div className="col-sm-8">
                            <input className="form-control" value="120.000" id="totalPayment" disabled></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CartTotal;
