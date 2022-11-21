/////////////////////// map data structure/////////

// const person = new Map();
// person.set("name" , "rehman");
// person.set("age" , 23);
// person.set(1 , "one");
// console.log(person.get("name"));
// console.log(person.get(1));
// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key);

// };

// for(let [key,value] of person){
//     console.log(key,value);

// };


// const person = new Map([['name', 'rehman'],['age', 23]]);
// console.log(person);

const person1 = {
    id : 1,
    firstName : "rehman"
}

const person2 = {
    id : 1,
    firstName : "maani"
}



const userInfo = new Map();
userInfo.set(person1,{age:8,gender:'male'});
userInfo.set(person2,{age:12,gender:'female'});
// console.log(userInfo);
console.log(person1.id);
console.log(userInfo.get(person2).gender);
