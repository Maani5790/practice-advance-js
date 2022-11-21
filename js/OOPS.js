/////////////////////////factory function//////////////
// function person(a, b, city) {
//   return {
//     weight: a,
//     height: b,
//     city: () => {
//       console.log(city);
//     },
//   };
// }
// const item = person(150,120,'karachi');
// const item1 = person(50,89,'lahore');
// console.log(item);
// console.log(item1);

////////////////new method/////////////

// function item1(color, name, age, gender) {
//   this.color = color;
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// const newItem = new item1('white','rehman',23,'male');
// // console.log(newItem);
// const arr = new Array(10,120);
// console.log(arr);
// console.log(arr.constructor);

// arr.sample = ("hello world");
// console.log(arr);

// newItem.city = "karachi";
// console.log(newItem.constructor);

// function Enemy(size,speed){
//     this.size = size,
//     this.speed = speed

// }

// const enemies = new Enemy(120,160);
// console.log(enemies);

// const newenemy = [];
// for(let i=0;i<100;++i){
//     newenemy.push(new Enemy(Math.random()*100,21))
// }

// console.log(newenemy);

// function hero(size, speed) {
//   (this.size = size), (this.speed = speed);
// }

// const batman = new hero(120, 160);
// const superman = batman;

// console.log(superman);

// console.log(batman);

// superman.size = 58;
// superman.weight = 45;
// console.log(superman);

// spread operator

// const arr = [1,2,3,4,5,6];
// const newArr = new Array(2,6,8,9);
// const arr1 = [...arr,4,89,67];
// console.log(arr1);

// console.log(newArr);
// console.log(arr);

// Classes & Inheritance

// function show(name="maani"){
//    setTimeout(() => {
//     for(let i = 0; i < 10; ++i){
//         console.log(`ur name is ${name} : ${i}`)
//        }

//    }, 4000);
// };

// show();
// setTimeout(() => {
//     alert("hello")
// }, 3000);

// console.log("hello dude");
function sum(a,b){
    return a + b;
}



function addNum (){
    const h1  =document.querySelector("h1");
    h1.innerText = sum(10,10);
}
addNum();
