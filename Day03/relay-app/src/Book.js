import React, { Component } from 'react';
import {graphql, createFragmentContainer} from 'react-relay'
import BookLink from './BookLink'

class Book extends Component{
	render(){
		let {book} = this.props
		console.log(book);
		return (
			<p key={book.id}>
				{book.title}, ({book.price})
				<br/>
				<BookLink item={book} title={book.title}/>
			</p>
		)
	}
}

export default createFragmentContainer(Book,
	graphql`
		fragment Book_book on Book{
			id
			title
			price
			...BookLink_item
		}
	`)
//export default Book
