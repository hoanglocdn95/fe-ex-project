import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { addList } from '../actions';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add: 'inline-block',
            submit: 'none',
            value: 'none'
        };
        this.addList = this.addList.bind(this);
    };
    checkDisplay = () => {
        if (this.state.add === 'inline-block') {
            this.setState({
                add: 'none',
                submit: 'inline-block',
                value: 'inline-block'
            });
        } else {
            this.setState({
                add: 'inline-block',
                submit: 'none',
                value: 'none'
            });
        }
    };
    addList = (value) => {
        if (value !== null && value !== '') {
            this.props.add(value);
        }
    }
    render() {
        return (
            <form >
                <input id="add" type="button" value="New" style={{ display: this.state.add }}
                    onClick={this.checkDisplay} />
                <input id="value" style={{ display: this.state.value }} type="text" />
                <input id="submit" style={{ display: this.state.submit }} type="button" value="Create"
                    onClick={this.checkDisplay}
                    onClick={() => this.addList(document.getElementById('value').value)} />
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state
})
const mapDispatchToProps = (dispatch) => ({
    add: value => dispatch(addList(value)),
})

export default connect(mapStateToProps,
    mapDispatchToProps)(Create);
