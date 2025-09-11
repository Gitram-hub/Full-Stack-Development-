console.log("hello world");

const element = document.getElementById("hello");
element.style.backgroundColor = "red";
console.log(b);

const a =function(name,age,branch) {
   return "my name is "+name+" age "+age+" branch "+branch;
}

// console.log(info("adi",12,"cse"));
console.log(a("adi",12,"cse"));


Array function

const a=(name,age,branch)=>{
    return "my name is "+name+" age "+age+" branch "+branch;
}
console.log(a("adi",12,"cse"));

function info(str="Hii")
{
    console.log("hello "+str);
    
}
info("How are you");

Iife

(function(){
    console.log("hii i am inside the function");
    
})();

setTimeout(function() {console.log("hiiii")},1000
)


function lan(str)
{
    let data;
    if(str=="java")
    {
       function javacomplier()
       {
        return "java compiler";
       }
       data=javacomplier();
        
    }
     if(str=="c")
    {
       function Ccomplier()
       {
        return "c compiler";
       }
       data=Ccomplier();
        
    }
    else
    {
        data="not appropraite"
    }
    return data;

}
console.log(lan(" "));


let x = 10;

if (true) {
  let x = 20;
  console.log(x); 
}
function ram()
{
    let x=90;
    console.log(x);
    
}
ram();
console.log(x);




