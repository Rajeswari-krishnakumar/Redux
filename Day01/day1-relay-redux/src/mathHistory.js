import React, { Component } from 'react';
import {connect} from 'react-redux';

class MathHistory extends Component{
	showHistory(){
		this.props.showHistory()	
	}
	clearHistory(){
		this.props.clearHistory()
	}
	render(){
		console.log("render of history called");
		return (
			<div>
				<button onClick={this.showHistory.bind(this)}>History</button>
				<button onClick={this.clearHistory.bind(this)}>Clear</button>
				<h1>{this.props.history}</h1>
			</div>
		)
			
	}

}
const box1 = (state)=>{
	return{
		history:state.resultCollection
	}
}
const box2 = (dispatch)=>{
	return{
		showHistory:()=>{
			dispatch({type:"HISTORY",payload:{}})
		},
		clearHistory:()=>{
			dispatch({type:"CLEAR",payload:{}})
		}
	}
}

export default connect(box1,box2)(MathHistory);