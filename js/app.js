// // const a = new Date();
// // const b = new Date(2022,11,12);
// // const c =  new getFullyear();
// // const d =  getFullyear();
// // console.log(c);
// // console.log(a.getFullYear());
// // document.writeln(a.getMinutes());

// const input = document.getElementById("myInput");
// const btn = document.getElementById("myBtn");
// const delete_btn = document.getElementById("myBtn1");

// // btn.addEventListener("click" , func=()=>{

// //     sessionStorage.setItem("key1", input.value)

// // prompt("enter question");
// // document.body.style.backgroundColor = "black";
// // })

// // alert(sessionStorage.getItem("key1"))

// const btnClick = () => {
// //   sessionStorage.setItem("key1", input.value);
//   localStorage.setItem("key1", input.value);
// };
// btn.addEventListener("click", btnClick);

// delete_btn.addEventListener("click", ()=>{
//     // sessionStorage.removeItem("key1");
//     // sessionStorage.clear();
//     localStorage.clear();
// });

// if (sessionStorage.getItem("key1")) {
// //   alert(sessionStorage.getItem("key1"));
//   alert(localStorage.getItem("key1"));
//   // sessionStorage.key(0);
//   // sessionStorage.removeItem();
// }

// // btn1.addEventListener("click" , func=()=>{
// //     // prompt("enter question");
// //     sessionStorage.setItem("key1", input.value)
// //     document.body.style.backgroundColor = "white";
// // })

////////////////////////////set interval////////





// const btn = document.querySelector("btn");
// const printName = (name,male) => {

    // const income = Math.floor(Math.random()* 1000)



//   let gender = male;
//   if (gender) {
//     gender = "Male";
//   } else {
//     gender = "female";
//   }
//   console.log(
//     `welcome dude your name is ${name} and ur income is $${income} and ur gender is ${gender} `
//   );
// };

//  const costum =  setTimeout(printName,4000, "rehman",3000,true);
//  const id =  setInterval(printName,1000, "rehman",3000,true);

//  btn.addEventListener("click", () =>{
//     clearTimeout(costum);
//  })

//  btn.addEventListener("click", function myfunc(){
//     clearInterval(id);
//  })

//  myfunc();