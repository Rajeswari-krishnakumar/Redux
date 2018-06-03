let {graphql, buildSchema} = require("graphql")

let schema = buildSchema(`
	type Query{
		now:String,
		temperature:Float
	}`
)

let server = {
	now:()=>{
		return new Date().toString()
	},
	temperature:()=>{
		return Math.random() * 100
	}
}

let query = `{
	now
	temperature
}`

graphql(schema,query,server).then(response=>{
	console.log(response)
})