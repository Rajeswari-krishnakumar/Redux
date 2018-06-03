import React, { Component } from 'react';
import {graphql, createFragmentContainer} from 'react-relay'

class BookLink extends Component{
	render(){
		let {item,title} = this.props
		console.log("from booklink",item)
		if(item.inStock)
			return <a href="https://amazon.com">Buy {title}</a>
		else{
			return (<h4>{title} is out of stock</h4>)	
		}	
	}
}


export default createFragmentContainer(BookLink,
	graphql`
		fragment BookLink_item on Book{
			inStock
		}
	`)
