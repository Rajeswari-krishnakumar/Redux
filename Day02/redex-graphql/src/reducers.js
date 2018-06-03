const initialState = {
	books: [],
	newBook:{}
}
const reducer = (state=initialState,action) => {
	switch (action.type) {
	case "GET_BOOKS": {
		let books = action.payload.data
		// console.log("from reducer")
		// console.log(books);
		// let li=[]
		// books.forEach((book)=> li.push(book.title))
		return Object.assign({},state,{books});
	}
	case "ADD_BOOK": {
		let newBook = action.payload.data
		// console.log("from reducer")
		// console.log(books);
		// let li=[]
		// books.forEach((book)=> li.push(book.title))
		return Object.assign({},state,{newBook});
	}
	default:
			return state	
	}
}
export default reducer