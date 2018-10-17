import React, { Component } from 'react';

import './ButtonBoard.css';

class ButtonBoard extends Component{
    render(){
        return (
        <div id='board'>
            {this.props.children}
        </div>
        )
    }
}

export default ButtonBoard;