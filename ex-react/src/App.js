import React, { Component } from 'react';
import update from 'immutability-helper';
import math from 'mathjs';
import Screen from './Screen';
import ButtonBoard from './ButtonBoard';
import Button from './Button';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: []
    };
  }
  calculate = () => {
    let result = this.state.total.join('');
    console.log('result:  ' + result);
    if (result){
      result = math.eval(result);
      this.setState({total: [result]});
    }
  }
  handleClick = e => {
    const a = e.target.getAttribute('data-value');
    if (a === 'AC'){
      this.setState({
        total: []
      })
      console.log('in handleClick, total' + this.state.total);
    } else if (a === '='){
        this.calculate();
      } else {
        let newTotal = update( this.state.total, {$push: [a] });
        console.log('in handleClick, newTotal: ' + this.state.total);
        this.setState({total: newTotal});
        console.log('in handleClick, total: ' + this.state.total);
      }
  }
  render(){
    return(
      <div id='app'>
          <div id="Screen">
              <Screen display={this.state.total}/>
          </div>
          <ButtonBoard>
            <Button onClick={this.handleClick} value='AC' />
            <Button onClick={this.handleClick} value='+' />
            <Button onClick={this.handleClick} value='-' />
            <Button onClick={this.handleClick} value='*' />

            <Button onClick={this.handleClick} value='7' />
            <Button onClick={this.handleClick} value='8' />
            <Button onClick={this.handleClick} value='9' />
            <Button onClick={this.handleClick} value='/' />

            <Button onClick={this.handleClick} value='4' />
            <Button onClick={this.handleClick} value='5' />
            <Button onClick={this.handleClick} value='6' />
            <Button onClick={this.handleClick} value='=' />

            <Button onClick={this.handleClick} value='0' />
            <Button onClick={this.handleClick} value='1' />
            <Button onClick={this.handleClick} value='2' />
            <Button onClick={this.handleClick} value='3' />
          </ButtonBoard>
      </div>
    )
  }
}

export default App;
