import React, { Component } from 'react';
import {graphql, QueryRenderer} from 'react-relay'
import environment from './environment'
import Book from './Book'

//name of the query or mutation should be FileNameQuery or FileNameMutation
const BookListQuery = graphql `
	query BookListQuery($price:Float){
		books{
			... Book_book
		}
		costlierBooks(price:$price){
			... Book_book
		}
	}`

class BookList extends Component {
  render() {
    return (
      <div>
        	<h1>List of Books</h1>
		      <QueryRenderer
		        environment={environment}
		        variables={{price:10}}
		        query={BookListQuery}
		        render={({error, props}) => {
		          if (error) {
		            return <div>{error.message}</div>
		          } 
				  else if (props) {
				  	  let { books, costlierBooks } = props
				        return (<div>
				  		  <ul>
				  		  {
							  books.map(book => <Book book={book}/>)
				  		  }
				  		  </ul>
						  <h1>Costlier Books</h1>
				  		  <ul>
				  		  {
							  costlierBooks.map(book => <Book book={book}/>)
				  		  }
				  		  </ul>
				  	  </div>)
		          }
		          return <div>Loading</div>
		        }}
		      />
      </div>
    );
  }
}

export default BookList;
