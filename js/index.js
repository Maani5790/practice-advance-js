// for (let i = 0; i < 10; i++){
//     console.log(Math.random());

// }

// let i = 0;
// while (i < 10) {
//   console.log("hello")
//   ++i
// }
// let i = 0;
// do{
//     console.log("hello")
//     ++i
// }while(i<10)

// function func (a,b,c){
//     return a+b+c
    
    
// }
// // a = func(10,10,10);
// // console.log(a);

// function intro (name=sample , age = 23  ){
//     console.log(
//         `hi my name is ${name} and age is${age}  `
//     );
//     console.log(`my income is ${func(10,10,10)}`)

// }

// intro("maani", 23);

// function arrayTotal (arr=[]){
    
//     let total = 0;
//     for(let i =0; i<arr.length;++i){
//         total = total + arr[i];
//     }
//     return total;



// }
// const arr = ([1,2,3,4,5,5]);

// console.log(arrayTotal(arr));

// const arr = [1,2,3,4,5,6,7];

// const myFunc= (value,index)=>{
//     if(value===9){
//         console.log("5 exist dude")
//     }

// }

//  arr.find(myFunc);
//  const result =  arr.every((value,index)=>{
//     if(value>0){
//         return value;
        
//     }

// });
// console.log(result);

// const result =  arr.some((value,index)=>{
//     if(value>5){
//         return value;
        
//     }

// });
// console.log(result);


// let newArray = ["maani","rehman","kashif","hammad","farhan"];
// let num = [1,2,3,4,5,6,7,8,9,10];
// for(let arr of num){
//     arr +=2;
//     console.log(arr);
// }
// console.log(num);
let arr = [9,2,3,4,5,6,7,8,9,10];

// let totalSum = 0;


// arr.forEach((value,index)=>{

//     totalSum += value; 
//     // console.log(value);
//     // console.log(index);

// })
// console.log(totalSum);

// const result = arr.forEach((value,index)=>{
//     return value;
// })
// console.log()

// const result = arr.map((value,index)=>{
//     return value;
// })
// console.log(result);

// const result = arr.reduce((total,value,index)=>{
//     return total + value;
// })
// console.log(result);

addEventListener("click", (e)=>{
    console.log(e.clientX);
    console.log(e.clientY);
})









