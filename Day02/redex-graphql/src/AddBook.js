import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

class AddBook extends Component {
			
  render() {
    return (
      <div>
		<AddBook />
		<button onClick={this.addBooks.bind(this)}>Add Books</button>
      </div>
    );
  }
  addBooks(){
	this.props.addBooks()
  }
}

const box1 = (state) => {
	let newBook = state.newBook;
	console.log(newBook);
	// let li = []
	// books.forEach(function(book){
	// 	li.push(<li key={book.id}>{book.title} ({book.price})</li>)
	// })
	return {
		allBooks: newBook
	}
}
const box2 = (dispatch) => {
	return {
		addBooks:()=>{
			axios.post("http://localhost:4000/graphql",{
					mutation:`{
						addBook(title:"ww1",price:11.2){
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

export default connect(box1,box2)(AddBook);