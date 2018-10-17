import React, { Component } from 'react';
import Item from './Item';

class ShowItem extends Component {
    render() {
        const show = [];
        const arr =this.props.list;
        arr.map((value, key) => {
            show.push(
                <Item
                    image={value.img}
                    id={value.id}
                    description={value.description}
                    name={value.name}
                    index={key}
                    key={key}
                />
            )
        });
        return (
            <div className="row">
                {show}
            </div>
        )
    }
}
export default ShowItem;
