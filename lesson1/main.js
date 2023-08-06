function sum( a,b) {
    return a+b;
}


//arrow function
const sum1 = (a,b) => a*b;
console.log(sum1( 2, 3));
const logname = () => ({
    name: 'hiy'
})

//const
let name1 = "qunag";
const name2 = 'huu';
const arr1= [1, 2, 3, 4];


//spread opertator
const numberlist1 =[1, 2, 3, 4, 5, 6];
const numberlist2 = [ 7, 8, 9, 10];
const clonenumberlist = [...numberlist1, ...numberlist2];
console.log(clonenumberlist);

const student1= {
    name: 'huy',
    age:'100'
};
const student2={...student1}
student2.gender = 'male';
//map
const arrMap1 = [1, 2, 3, 4, 5]; // [2 ,4 ,6 , 8 , 10]
const arrMap2 = [];
arrMap1.forEach((item) => {
    arrMap2.push(item*2);
});
const arrMap3 = arrMap1.map((item)=> item * 5)

const arrMap4 =[
    { firstName: "Tran", lastname:"Quang"},
    {firstName:"Vu", lastname:"Anh"},
];
const arrMap5 = arrMap4.map((item)=> {
    return `${item.firstName} ${item.lastname}`
})

console.log(arrMap3);