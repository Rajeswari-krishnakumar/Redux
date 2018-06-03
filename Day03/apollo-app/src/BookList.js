import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

class BookList extends Component{
	render(){
		if(this.props.booklistquery && this.props.booklistquery.books){
		let {books} = this.props.booklistquery;
		return books.map(book => <p key={book.id}>{book.title}</p>)

	}else{
		return <h1>hi</h1>
	}
	}
}
const GET_ALL_BOOKS = gql`
query booklistquery{
	books{
		id
		title
		price
	}
}`

export default graphql(GET_ALL_BOOKS,{name:"booklistquery",variables:{}})(BookList)