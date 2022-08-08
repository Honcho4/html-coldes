alert("Hello I am an alert Box!");

let a=3;
console.log(a)



let y = "Tony";
console.log(y),

document.getElementById("demo").innerHTML = (5 + 6) * 10;

let b = 7+3
let p = b*3
 document.getElementById("demo2").innerHTML=p;


 document.getElementById("p1").innerHTML = "Weapon of Distruction";

//Date function
   function ding()
{
    document.getElementById("Date").innerHTML = Date();
    
} 


// form input

function validateForm(){
    let x = document.forms["myForms"]["fname"].value;
    if (x == ""){
        alert("Name must be filled out");
        return false;
    }
}
 
// DARKMODE Function
{
  function darkmode()
  {
   document.getElementById("body").style.backgroundColor = "black";
  }
}  



