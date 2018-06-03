alert("hi");
var arr=[1,2,3,4,5,6,7,8]
// arr.map((number)=>{
// 	if(number%2 ===0){
// 		console.log(number);
// 	}
// });

var evenNumber = arr.filter(num => num%2 === 0);
console.log(evenNumber);