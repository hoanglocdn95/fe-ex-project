import React, { Component } from 'react'

class CartProduct extends Component {
    delete = (index) => {
        const item = JSON.parse(localStorage.getItem(localStorage.userName));
        if (item.length === 1) {
            localStorage.removeItem(localStorage.userName);
            window.location.reload();
        } else {
            item.splice(index, 1);
            let itemStr = JSON.stringify(item);
            localStorage.setItem(localStorage.userName, itemStr);
            window.location.reload();
        }
    }
    render() {
        const item = JSON.parse(localStorage.getItem(localStorage.userName));
        if (item === null) {
            return (
                <div className="bcc-item">
                    <div className="w-100">
                        <h3 style={{ color: "lightgrey", textAlign: "center" }}>EMPTY</h3>
                    </div>
                </div>
            )
        } else {
            const show = [];
            item.map((value, key) => {
                var total = parseInt(value.quantityItem) * 90000;
                show.push(
                    <div className="bcc-item" key={key}>
                        <div className="bbc-item-del p-0 m-0">
                            <button type="button" className="btn-dark"
                                onClick={() => this.delete(key)}>
                                <i className="fa fa-remove" style={{ fontSize: '24px' }}></i>
                            </button>
                        </div>
                        <div className="row">
                            <div className="col-8 col-sm-3">
                                <img id="img" src={value.img} className="card-img" alt="product"></img>
                            </div>
                            <div className="col-4 col-sm-3">
                                <label htmlFor="quantity">Số Lượng</label>
                                <input id="quantity" value={value.quantityItem} className="w-100" type="number" name="quantity" min="1" max="100"
                                    // onChange={this.changeQuantity}
                                    disabled></input>
                                <hr></hr>
                                <label htmlFor="type">Loại Máy</label>
                                <input id="type" value={value.typeItem} className="w-100" type="text"
                                    // onChange={this.changeType}
                                    disabled></input>
                            </div>
                            <div className="col-12 col-sm-4">
                                <label htmlFor="comment">Yêu Cầu</label>
                                <input id="comment" value={value.comment} className="w-100" type="text" disabled></input>
                            </div>
                            <div className="col-12 col-sm-2">
                                <label htmlFor="price">Đơn Giá</label>
                                <input className="w-100" id="price" type="number" defaultValue="90.000" disabled></input>
                                <hr></hr>
                                <label htmlFor="total">Tổng</label>
                                <input className="w-100" id="total" value={total} type="number" disabled></input>
                            </div>
                        </div>
                    </div>
                )
            });
            return (
                <div>
                    {show}
                </div>
            )
        }


    }
}
export default CartProduct;
