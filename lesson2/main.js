const arrNum = [5, 3, 0, -1, 2, -5];
const Num= arrNum.filter(num => num >0);
// console.log(Num);
//cách 2
const positiveNum = arrNum.filter ((item)=>{
    if(item>0) {
        return true;
    }
    return false;
})
// console.log(positiveNum);
const products = [
	{id:1, name: 'Iphone 13', price: 1000, quantity: 10 },
	{id:2, name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{id:3,name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{id:4, name: 'Airpod 2', price: 100, quantity: 20 },
];
const name2 =[];
const soluong= products.filter((products)=> products.quantity >= 10);
// console.log(soluong)
const id = products.filter((products)=>products.id !==3).map((products)=>products.name)
// console.log(id)

const checkProduct = (productName) =>{
    const filterProducts= products.filter(product =>product.name === productName);
    if(filterProducts.length === 0){
        console.log('Khong ton tai');
    } else {
        console.log('ton tai');
    }
}
checkProduct('Iphone 13');

const checkProduct2= (productName) =>{
    const findProduct = products.find((product)=> product.name === productName);
    if( findProduct){
        console.log('tontai')

    }else {
        console.log('khong tontai')
    }
}
checkProduct2 ('Iphone 1');

const checkProduct3= (productName) =>{
    const productIndex = products.findIndex((product)=> product.name === productName);
    if(productIndex >-1){
        console.log('tontai');
    }else{
        console.log('khongtontai')
    }
}
checkProduct3 ('Iphone 1');