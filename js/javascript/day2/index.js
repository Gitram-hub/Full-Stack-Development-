// const a=document.getElementById('main')
// console.log(a);
// const b=document.getElementsByClassName('container')
// console.log(b);


// b[0].innerHTML='<h2>Hey i am playing cricket </h2>';
// const h1=document.createElement('h1');
// h1.innerHTML="<h1>i am created child</h2>";
// h1.style.color='blue';
// console.log(b[0].innerHTML);

// b[0].appendChild(h1);
// const btn=document.getElementById('btn');
// function display() { 
//     document.getElementById('disp').innerHTML="</h2>Data is loading</h2>";
//     setTimeout(()=>
//     {
//         console.log("I am here");
//     const img = document.createElement('img');
//     img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_7m_9vBbVqpkuEpWKSTPp6py-Lzb__UBcQ&s';
//     b[0].appendChild(img);
//     },1000)
  
   
// }
// btn.addEventListener('click',display);

// const btn =document.getElementById('btn');
// function logndata()
// {
//      console.log("Start");
// for(let i=0;i<100000000;i++)
//     {
       
//      console.log(i);
   
//     }
//       console.log("end");

// }
// btn.addEventListener('click',logndata);
// function message()
// {
//    console.log("welcome to college"); 
// }

// console.log("start");
// setTimeout(message,1000);
// console.log("end");

// function msg(str)
// {
//     console.log("Hiihh welcomw to ABES engineeering college ghaziabad "+str);
// }

// function msgHandler(arg,clbk)
// {
//      console.log("Hello"+arg);
//      clbk(arg);
// }

// const  arr=["amit","nilesh","raj"];
// arr.forEach((element=>{
//     msgHandler(element,msg);
// }))

// msgHandler("Ram",msg);

// function firstCallback(cb) {
//     setTimeout(() => {
//         console.log("first message");
//        setTimeout(() => {
//         console.log("second message");
//         setTimeout(() => {
//         console.log(" message");
//     }, 1000);
//     }, 1000);
    
//     }, 1000);
// }

// function secondCallback() {
//     setTimeout(() => {
//         console.log("second message");
//     }, 1000);
// }

// firstCallback(secondCallback);


// const mypromise = new Promise((reject, solve) => {
//     const password = "ra4r1";
//     if (password.length > 10) {
//         solve("promise resolved");
//     } else {
//         reject("promise rejected");
//     }
// });

// mypromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });


async function fetchdata() {    
    console.log("Enter inside the function ");
    const response = await fetch("https://fakestoreapi.com/products");
    const jsn = await response.json();
    console.log(jsn[0]);
    const img = document.createElement('img');
    const title = document.createElement('h1');
    img.src = jsn[0].image;
    title.textContent = jsn[0].title;
    const container = document.getElementsByClassName('container');
    
    container[0].appendChild(img);
    container[0].appendChild(title);
    
}

const btn = document.getElementById("btn");
btn.addEventListener('click', fetchdata);



