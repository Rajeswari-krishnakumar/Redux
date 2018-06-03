import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

class Books extends Component {
			
  render() {
    return (
      <div>
		<button onClick={this.getBooks.bind(this)}>Fetch Books</button>
		<ul>{this.props.allBooks}</ul>
		<hr />
		<button onClick={this.addBooks.bind(this)}>Add Books</button>
      </div>
    );
  }
  getBooks(){
	this.props.getBooks()
  }
  addBooks(){
  	this.props.addBooks()
  }
}

const box1 = (state) => {
	let books = state.books;
	let li = []
	books.forEach(function(book){
		li.push(<li key={book.id}>{book.title} ({book.price})</li>)
	})
	return {
		allBooks: li
	}
}
const box2 = (dispatch) => {
	return {
		getBooks: () => {
			axios.post("http://localhost:4000/graphql",{
					query: `{
						books{
							id
							title
							price
						}
					}`
				})
			.then(res => dispatch({type:"GET_BOOKS",payload:{data:res.data.data.books}}))
		},
		addBooks:()=>{
			axios.post("http://localhost:4000/graphql",{
					mutation:`{
							addBook(title:"ww",price:11.2){
						    id
							title
						    price
						    inStock
						}
					}`
				})
			.then(res => dispatch({type:"ADD_BOOK",payload:{data:res.data.data.books}}))
		}
	}
}

export default connect(box1,box2)(Books);








