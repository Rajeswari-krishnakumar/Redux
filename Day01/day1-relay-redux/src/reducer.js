const initialState = {
				number:"",
				result:"",
				resultCollection:[],
				history:[]
			}
const reducer = (state=initialState,action)=>{
	let number, result,resultCollection, history
	switch(action.type){
		case "SQUARE":
			number = action.payload.number
			let square = number * number
			result = `Square ${square}`
			resultCollection = [...state.resultCollection,result]
			return {number, result,resultCollection}
		case "HISTORY":
			resultCollection = state.resultCollection;
			console.log(resultCollection);
			return Object.assign({},state,{resultCollection});
		case "CLEAR":
			history = [];
			resultCollection=[]
			return {number, result,resultCollection,history}
		default:
			return state

	}
}

export default reducer;