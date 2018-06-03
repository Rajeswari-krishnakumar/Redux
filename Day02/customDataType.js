let {graphql, buildSchema} = require("graphql")

let schema = buildSchema(`
	type Book{
		id:ID,
		title:String,
		price:Float,
		inStock:Boolean
	}
	type Query{
		books:[Book]
	}`
)

let server = {
	books:()=>{
		return [
		{id:1,"title":"hi","price":12,"inStock":true}]
	}
}

let query = `{
	books{
		id
		title
	}
}`

graphql(schema,query,server).then(response=>{
	console.log(response.data)
})