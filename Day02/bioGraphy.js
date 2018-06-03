let {graphql, buildSchema} = require("graphql")

let schema = buildSchema(`
	type Book{
		id:ID,
		title:String,
		author:String
	}
	type Person{
		id:ID,
		name:String,
		email:String,
		blog:String,
		facebook:String,
		books:[Book]
	}
	type Query{
		person:Person
	}`
)

let server = {
	person:()=>{
		return {
				id: "I101", 
				name: "Prabhu", 
				email: "prabhu@durasoftindia.com",
				blog: "http://healthycoder.in", 
				facebook: "i.prabhu.sunderaraman",
				books: [
					{ id:"b103", title:"Spring 3.0 Black Book", price:22.34, inStock:false },
					{ id:"b104", title:"Practical ExtJS4", price:12.5, inStock:true }
				]	
			}
	}
}

let query = `{
	person{
		name,
		email,
		blog,
		facebook,
		books {
			title
		}
	}
}`

graphql(schema,query,server).then(response=>{
	console.log(response.data)
})