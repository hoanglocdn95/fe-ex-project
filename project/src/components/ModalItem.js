import React, { Component } from 'react';

class ModalItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantityItem: "",
            comment: "",
            typeItem: ""
        }
    }
    updateItem = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    addCart = () => {
        const user = localStorage.getItem('userName');
        if (user === null) {
            alert("bạn chưa đăng nhập");
        } else {
            const item = [
                {
                    id: this.props.id,
                    img: this.props.img,
                    comment: this.state.comment,
                    typeItem: this.state.typeItem,
                    quantityItem: this.state.quantityItem
                }
            ];
            const itemStr = JSON.stringify(item);
            if (localStorage.getItem(user) === null) {
                localStorage.setItem(user, itemStr);
                alert("Đã thêm vào giỏ hàng thành công");
                window.location.reload();
            } else {
                let str = localStorage.getItem(user);
                let itemArr = JSON.parse(str);
                let itemStr = JSON.stringify(item.concat(itemArr));
                localStorage.setItem(user, itemStr);
                alert("Đã thêm vào giỏ hàng thành công");
            }
        }
    }
    render() {
        return (
            <div className={`modal fade ${this.props.id}`} tab-index="-1" role="dialog" aria-labelledby={this.props.id} aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-item modal-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="modal-img col-12 col-xs-6 col-sm-6">
                                    <img src={this.props.img} alt="img-detail" width="100%" height="auto"></img>
                                </div>
                                <div className="modal-detail col-12 col-xs-6 col-sm-6">
                                    <h3>{this.props.name}</h3>
                                    <hr></hr>
                                    <p>{this.props.description}</p>
                                    <hr></hr>
                                    <label htmlFor="select">Loại máy :</label>
                                    <select name="typeItem" required
                                        onChange={this.updateItem}>
                                        <option value="">Khác(ghi tên máy ở Yêu Cầu)</option>
                                        <option value="Iphone">Iphone 4</option>
                                        <option value="Iphone 5">Iphone 5</option>
                                        <option value="Iphone 6">Iphone 6</option>
                                    </select>
                                    {/* <br></br> 
                                    <label htmlFor="kind-of-phone">Dòng máy: </label>
                                    <select name="kind" required id="kind-of-phone">
                                    </select> */}
                                    <hr></hr>
                                    <label htmlFor="select">Số Lượng: </label>
                                    <input type="number" required name="quantityItem"
                                        onChange={this.updateItem}></input>
                                    <hr></hr>
                                    <label htmlFor="comment">Yêu cầu: </label>
                                    <input name="comment"
                                        onChange={this.updateItem}></input>
                                    <hr></hr>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile"></input>
                                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                    </div>
                                    <hr></hr>
                                    <button className="close" data-dismiss="modal"
                                        onClick={this.addCart}
                                    >Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ModalItem;
