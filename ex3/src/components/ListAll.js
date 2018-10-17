import React, { Component } from 'react';
import List from './List'
import { connect } from 'react-redux'

import './style.css';
import { deleteList, saveList, editList } from '../actions';

class ListAll extends Component{
    constructor(props){
        super(props);
        this.state = [];
        this.deleteList=this.deleteList.bind(this);
        this.saveList=this.saveList.bind(this);
        this.editList=this.editList.bind(this);
    };
    deleteList=(id)=>{
        this.props.delete(id);
    }
    saveList=(index,value)=>{
        this.props.save(index, value)
    }
    editList=(index,display)=>{
        this.props.edit(index,display);
    }
    render(){
        const showList=[];
        this.props.list.map((value,key) =>{
            showList.push(
                <List 
                    dataList={value.value} 
                    display={value.displayList}
                    onClickEdit={()=>this.editList(key,value.displayList)} 
                    onClickDel={()=>this.deleteList(key)}
                    onClickSave={()=>this.saveList(key,
                        document.getElementsByClassName('input-edit')[key].value)}
                    indexList={value.id}
                    key={key}
                />);
        });
        return(
            <div id='list-all'>
                {showList}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state
})
const mapDispatchToProps = (dispatch) => ({
    delete: id => dispatch(deleteList(id)),
    save: (id,value) => dispatch(saveList(id, value)),
    edit: (id,display) => dispatch(editList(id,display))
})

export default connect(mapStateToProps,
                    mapDispatchToProps)(ListAll);
