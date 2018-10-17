import React, { Component } from 'react';
import './style.css';

class List extends Component{
    render(){
        return(
            <div className='list' >
                <div className='input-list'
                    style={{display: this.props.display ? 'inline-block' : 'none'}}
                >{this.props.dataList}</div>
                <input className='input-edit' 
                    style={{display: this.props.display ? 'none' : 'inline-block'}}/>
                <button className='button' 
                    onClick={()=>this.props.onClickEdit(this.props.indexList)}
                    style={{display: this.props.display ? 'inline-block' : 'none'}}
                    >edit</button>
                <button className='button' 
                    onClick={()=>this.props.onClickDel(this.props.indexList)}
                    >delete</button>
                <button className='button-save' 
                    style={{display: this.props.display ? 'none' : 'inline-block'}} 
                    onClick={()=>this.props.onClickSave(this.props.indexList)}>save</button>
            </div>
        )
    }
}

export default List;
