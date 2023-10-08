// let name = { first: "ZEND", last: "VN" };
// const { first, last } = name;
// console.log(last + first);

// const displayFunc = () => ({
//    name: 'Tôi yêu Mindx'
// })
// console.log(name)

let array = [5, 4, 7, 2, 8, 12 ,0, 3];

array.sort(function(a, b) {
  return a - b;
});


n = 2
console.log("số lớn thứ "+n +"= ",array[array.length-n]);


fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
	console.log(data)
});



const arr = [1,2,3,4,5,6,7];
const result = arr.filter(num => num % 2);
console.log(result); 

