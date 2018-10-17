import React, { Component } from 'react';
import ModalItem from './ModalItem';
class Item extends Component {
    saveRecently = () => {
        const item = [{
            id: this.props.id,
            name: this.props.name,
            img: this.props.image,
            description: this.props.description
        }];
        const itemStr = JSON.stringify(item);
        if (localStorage.recently === undefined || localStorage.recently === "undefined") {
            localStorage.setItem("recently", itemStr);
            localStorage.setItem("countRec", 1);
        } else if (localStorage.countRec < 4) {
            let str = localStorage.recently;
            let itemArr = JSON.parse(str);
            let itemStr1 = JSON.stringify(item.concat(itemArr));
            localStorage.setItem("recently", itemStr1);
            let count = localStorage.countRec;
            count = parseInt(count) + 1;
            localStorage.setItem("countRec", count);
        } else if (localStorage.countRec >= 4) {
            let str = localStorage.recently;
            let itemArr = JSON.parse(str);
            itemArr.pop();
            let itemStr1 = JSON.stringify(item.concat(itemArr));
            localStorage.setItem("recently", itemStr1);
        }
    }
    render() {
        return (
            <div className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <ModalItem
                    img={this.props.image}
                    name={this.props.name}
                    description={this.props.description}
                    id={`item-${this.props.id}`}
                />
                <div className="body-banner-tag">
                    <img className="bbt-img card-img" src={this.props.image}
                        alt="" key={this.props.index}></img>
                    <div className="bbt-middle">
                        <button type="button" className="bbt-middle-btn"
                            data-toggle="modal" data-target={`.item-${this.props.id}`}
                            onClick={this.saveRecently}>
                            Detail
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Item;
