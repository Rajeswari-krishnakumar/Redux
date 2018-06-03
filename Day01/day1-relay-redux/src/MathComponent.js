import React, { Component } from 'react';
import {connect} from 'react-redux';

class MathComponent extends Component{

	getSquare(){
		// console.log(store);
		let number = this.inputButton.value;
		this.props.calculateSquare(number)
	}
	render(){

		return(
			<div>
				<input type="text" placeholder="number"  ref={ip => this.inputButton = ip} />
				<button id="squareButton" onClick={this.getSquare.bind(this)}>Square</button>
				<h1>
				{this.props.message}
				</h1>
			</div>

		)
	}
}
const box1 = (state)=>{
	return{
		message:state.result
	}
}
const box2 = (dispatch)=>{
	return{
		calculateSquare:(number)=>{
			dispatch({type:"SQUARE",payload:{number}})
		}
	}
}

export default connect(box1,box2)(MathComponent);