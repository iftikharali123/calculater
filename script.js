let screen=document.getElementById("screen"),
buttons=document.querySelectorAll("button");
let screenValue="";



for(let item of buttons){
item.addEventListener('click',(e)=>{
      let ButtonText=e.target.innerText;
    console.log(ButtonText)
console.log('Button text is ', ButtonText)
if(ButtonText=='X'){
    ButtonText='*';
    screenValue+=ButtonText;
    screen.value=screenValue;
}
else if(ButtonText=='C'){
    screenValue=" ";
    screen.value=screenValue;
}
else if (ButtonText=="="){
screen.value=eval(screenValue);

}

else{

screenValue+=ButtonText;
screen.value=screenValue;


}

})
}






// let theNumber = Number(prompt("Pick a number"));
// console.log("YNour number is the square root of " +
// theNumber * theumber);
// console.log(theNumber);
// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
// console.log("Your number is the square root of " +
// theNumber * theNumber);
// }

// let theNumber = Number(prompt("Pick a number"));

// if (!Number.isNaN(theNumber)) {
// console.log("Your number is the square root of " +
// theNumber * theNumber);
// } else {
// console.log("Hey. Why didn't you give me a number?");
// }
// let num=Number(prompt("Pick a number"));
// if(num<10){
//     console.log("small");

// }
// else if(num < 100)
// {
// console.log("large");
// }
// else{
//     console.log("largest")
// }
// let num=0;
// while(num<1000){
//     console.log()
// }
