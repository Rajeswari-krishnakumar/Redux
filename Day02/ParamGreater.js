let {graphql,buildSchema} = require("graphql")

let db = {
	books: [
			{ id:"b101", title:"ABC", price:22.34, inStock:false },
			{ id:"b102", title:"XYZ", price:12.5, inStock:true }
		]
}

let schema = buildSchema(`
	type Book{
		id: ID,
		title: String,
		price: Float,
		inStock: Boolean
	}
	
	type Query{
		books: [Book]
		book(title:String): Book
	}
`)
	
let server = {
	book: ({price}) => {
		console.log(price);
		return db.books.find(book => book.price > price)
	},
	books: () => {
		return db.books
	}
}	


// let query = `{
// 	book(title:"ABC"){
// 		title
// 		price
// 	}
// }`

let query = `{
	book(price:12.0){
		title
		price
	}
}`

graphql(schema,query,server)
	.then(response => console.log(response.data))