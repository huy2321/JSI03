const arr1 = [1, 'a', 5, '2', true];
// In ra những phần tử là number trong arr1 [1, 5]
// Gợi ý: sử dụng forEach hoặc filter (tự tìm hiểu trước)
// arr1.forEach((Number)=> console.log(`${Number} `));

const products = [
	{ name: 'Iphone 13', price: 1000, quantity: 10 },
	{ name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ name: 'Airpod 2', price: 100, quantity: 20 },
]
/* console.log ra màn hình theo định dạng như sau:
	1000 chiếc Iphone 13 giá 10000$
	...
	100 Airpod 2 giá 2000$
	=> Tổng hoá đơn: Tổng_tiền_4_sản_phẩm
*/
const products1 = products.map((item)=>{
    return ` ${item.price} ${item.name} ${item.quantity}`
})
console.log(products1);
