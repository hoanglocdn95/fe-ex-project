import React, { Component } from 'react';
import './Screen.css';
class Screen extends Component {
    render() {
        const displayValue = this.props.display.join('');
        return (
            <div id="screenValue">
                {displayValue}
            </div>
        );
    }
}
export default Screen;
