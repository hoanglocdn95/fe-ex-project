import React, { Component } from 'react';
import './Button.css';
class Button extends Component{
    render (){
        return(
            <div className="button" 
                onClick={this.props.onClick}
                data-value = {this.props.value}>
                {this.props.value}                
            </div>
        )
    }
}
export default Button;
