let express = require('express')
let { graphql, buildSchema } = require("graphql")
let graphqlHTTP = require('express-graphql')
let cors = require("cors")

let schema = buildSchema(`
	type Book{
		id: ID,
		title: String,
		price: Float,
		inStock: Boolean
	}
	type Query{
		books: [Book]
		costlierBooks(price:Float): [Book]
		book(id:String): Book
	}
	type Mutation{
		deleteBook(title:String): Book
		addBook(title:String, price: Float): Book
	}
`)
	
let db = {
	books: [
			{ id:"b101", title:"ABC", price:22.34, inStock:false },
			{ id:"b102", title:"XYZ", price:12.5, inStock:true }
		]
}

let resolvers = {
	costlierBooks: ({price}) => {
		return db.books.filter(book => book.price > price)
	},
	book: ({id}) => {
		return db.books.find(book => book.id == id)
	},
	books: () => {
		return db.books
	},
	addBook:({title,price})=>{
		let book = {
			id:`b${new Date().getTime()}`,
			title,
			price,
			inStock:true
		}
		db.books.push(book);
		return book;
	},
	deleteBook:({title})=>{
		let bookObj = db.books.find(book => book.title == title)
		if(bookObj){
			book = db.books.filter(book=> book.title != title);
			// return bookObj
		}
		// let index = db.books.indexOf(bookObj);
		// db.books.splice(index,1);
		return bookObj;
	}

}

let app = express()
app.use('/graphql',cors(),graphqlHTTP({
	schema,
	rootValue: resolvers,
	graphiql: true
}))

app.listen(4000)
console.log("Running on 4000");