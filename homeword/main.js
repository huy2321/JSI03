//b1
//chữa
const arr1 = [1, 'a', 5, '2', true];
// In ra những phần tử là number trong arr1 [1, 5]
// Gợi ý: sử dụng forEach hoặc filter (tự tìm hiểu trước)
const arr2 = [];
arr1.forEach((item)=>{
	if(typeof item === 'number'){
		arr2.push(item)
		}
})

console.log(arr2);
//b2
let totalBill = 0;
const products = [
	{ name: 'Iphone 13', price: 1000, quantity: 10 },
	{ name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ name: 'Airpod 2', price: 100, quantity: 20 },
];
products.forEach((products)=>{
	console.log(`${products.quantity} chiếc ${products.name} giá ${products.price}$`);
	totalBill += products.price*products.quantity
});
console.log(`Tổng hóa đơn ${totalBill}$`)
//b3
let students = [
	{ name: 'Alex', score: 6 },
	{ name: 'John', score: 8 },
	{ name: 'Peter', score: 4 },
];
let highestScore = 0;
let highestName = '';
students.forEach((student)=>{
	if(student.score > highestScore){
		highestScore = student.score;
		highestName = student.name;
	}
})
console.log(highestName)