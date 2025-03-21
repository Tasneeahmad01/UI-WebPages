// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector("button").addEventListener("click", async () => {
//         try {
//             let res = await axios("https://api.thecatapi.com/v1/images/search");
//             document.querySelector("#result").src = res.data[0].url;
//         } catch (e) {
//             console.log(e);
//         }
//     });
// });

 

// const { requirePropFactory } = require("@material-ui/core");

function myfun() {
    let buttons = document.getElementsByClassName("follow-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#222222";
    }
}
function Myfun() {
    let button = document.getElementsByClassName("message-btn")[0];
    button.addEventListener("click", function() {
        window.open("https://example.com/message", "_blank");
    });
}

// Randomly API 
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

btn.addEventListener("click", () => {
    fetch(url)
    .then(res => res.json())
    .then(data => jokeContainer.textContent = data.joke)
    .catch(() => jokeContainer.textContent = "Couldn't fetch a joke.");
});


// Show form in 
const input = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pass");

document.getElementById("btnn").addEventListener("click", () => {
    // Get values from the input fields
    const nameValue = input.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    // Display the values in the h2 element
    document.getElementById("ans").innerHTML = `
        Name: ${nameValue} <br>
        Email: ${emailValue} <br>
        Password: ${passwordValue}
    `;

    // After 5 seconds, hide the displayed values
    setTimeout(() => {
        // Clear the content
        document.getElementById("ans").innerHTML = "";

        document.getElementById("submit").innerHTML = `
            <h3>Your Form Finaly submitted </h3>
            
        `;
    }, 5000); 
});

// const arrNumber = [1,2,3,5,8,2,9,12,9,8,11,9,2];
// const duplicate = arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index);
// console.log(duplicate);

// const arrNumber = [1,3,5,7,9,8,10,150,15,80];
// const maxNumber = Math.max(...arrNumber);
// const minNumber = Math.min(...arrNumber);
// console.log(maxNumber);
// // console.log(minNumber);

// const arrNumber = [1,2,4,5,6,9,6,23,54];
// const maxNumber = (arr)=>{
//     return arr.reduce(function(pre,cur){
//         return pre<cur?pre:cur;
//     });
// } 
// console.log(maxNumber(arrNumber));

// const empArr = [
//     { name: "Tarun", age: 32 },
//     { name: "Taniya", age: 62 },
//     { name: "Tanisha", age: 22 },
//     { name: "Taruna", age: 28 },
//     { name: "Zalim", age: 21 },
//     { name: "Tariun", age: 39 }
// ];

// const filteredNames = empArr.filter((item) => item.age < 30);

// document.body.innerHTML = filteredNames.map(item=>`${item.name} (${item.age})`); 

// const arrNumber = [1, 2, 4, 5, 6, 9, 10, 13, 16];
// const missNumber = [];

// for (let i = 1; i < arrNumber.length; i++) {
//     for (let j = arrNumber[i - 1] + 1; j < arrNumber[i]; j++) {
//         missNumber.push(j);
//     }
// }

// console.log(missNumber);

// const ArrNumber = [1,2,4,5,1,2,4,6,7,9,8,1];
// const duplicates = ArrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!=index);
// console.log(duplicates);

// const arrNumber = [1, 2, 4, 5, 6, 9, 10, 13, 16];
// arrNumber.filter(arrNumber=>{
// if(arrNumber%2==0){
//     console.log(arrNumber);
// }
// });

// const inputNum = prompt("Enter a number:");
// let fact = 1;

// if (inputNum >= 0) {
//   for (let i = 1; i <= inputNum; i++) fact *= i;
//   console.log(`Factorial of ${inputNum} is ${fact}`);
// } else {
//   console.log("Factorial of a negative number is not possible.");
// }

// PRIME NUMBER
// const number = [1,2,3,5,4,6,7,8,9,11,23];
// const isPrime = num=>{
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0)return false;
//     }
//     return num>1;
// }
// console.log(number.filter(isPrime));

// let string = prompt("Enter the Alphabet");
// string = string.toLocaleLowerCase();

// if (string === 'a' || string === 'e' || string === 'i' || string === 'o' || string === 'u') {
//     console.log(`${string} is a vowel`);
// } else {
//     console.log(`${string} is not a vowel`);
// }

// const string = 'Trend';
// const reversedString = string.split('').reverse().join('');
// console.log(string.reverse());  // Output: "dnerT"


// let string = prompt("Enter String Value :");   
// string = string.toLocaleLowerCase();  

// const palindrome = (str) => {
//     const reverseStr = str.split('').reverse().join('');
//     return reverseStr === str;
// };

// console.log(palindrome(string));   

// const arrNumber = [2, 3, 4,6, 7, 8, 9, 34];
// const missNumber = [];
// for (let i = 1; i < arrNumber.length; i++) {
//     for (let j = arrNumber[i - 1] + 1; j < arrNumber[i]; j++) {
//         missNumber.push(j);
//     }
// }

// console.log(missNumber);

// let string = prompt("Enter the number:");
// string = string.toLocaleLowerCase();

// const palindrome = (str) => {
//     const reverseStr = str.split('').reverse().join('');   
//     return reverseStr === str;
// }

// console.log(palindrome(string));  // Displaying the result

// MERGE Array FOR 2
// const arr1 = ['1','3','4','6','7','21'];
// const arr2 = ['11','13','41','26','72','211'];
// const result = [...arr1,...arr2];
// console.log(result);

// const num = prompt("Please enter positive number :");
// console.log(`factor of ${num}`);
// for(let i=0;i<=num;i++){
//     if(num%i==0){
//         console.log(i);
        
//     }
// }


// const operator = prompt("Please select operator + - / *");
// const num1 = parseFloat(prompt("enter number 1"));
// const num2 = parseFloat(prompt("enter num 2"));
// if(operator=='+'){
//     result = num1+num2;
// }
// console.log(result);

// const string = 'aa';
// const newstring = string.length;  
// console.log(newstring); 
// const userInput = prompt("Enter the distance in kilometers:");  // Get user input
// const factor = 0.621371;   
// const kiloMeterToMiles = userInput * factor;   
// console.log(`${userInput} kilometers is equal to ${kiloMeterToMiles} miles.`);

// first letter uppercase
// const inputStr = prompt("Enter the string :");

// const firstLetterCapital = (str) => {
//     const arrayStr = str.split(" "); 
//    const newArr = arrayStr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     return newArr.join(" ");
// };

// console.log(firstLetterCapital(inputStr));

// FIBONACHI value

// var a = 0;
// var b = 1;
// for (let i = 1; i <= 15; i++) {
//     let temp = a + b;
//     console.log(temp);
//     a = b;  // Move `b` to `a`
//     b = temp;  // Update `b` to the new sum
// }

// for(let i=1; i<=6; i++) {
//     // Print leading spaces
//     for(let j=1; j<=6-i; j++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     // Print stars
//     for(let k=1; k<=i; k++) {
//         document.write("*" + "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// for(let i=1; i<=5; i++) {
//     // Print leading spaces
//     for(let j=1; j<=i; j++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     // Print stars
//     for(let k=1; k<=6-i; k++) {
//         document.write("*" + "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// var string = prompt("Enter the string");
// var letter = prompt("Enter the letter to count");
// let Stren = string.length;
// let counter = 0;

// for (let i = 0; i < Stren; i++) {
//     if (string[i] == letter) {
//         counter++;  // Increment counter if the letter matches
//     }
// }

// console.log(`The letter '${letter}' appears ${counter} times in the string.`);


// const number = prompt("Enter a number:");  
// const strNum = number.toString(); 
// let sum = 0; 
// for (let i = 0; i < strNum.length; i++) {
//     const digit = parseInt(strNum[i]); 
//     sum += Math.pow(digit, 3);
// }

// Output the result
// console.log(`The sum of the cubes of the digits of ${number} is: ${sum}`);



// const arrNum = [2, 6, 5, 3, 8, 13, 18, 21, 25, 14, 10, 9];
// arrNum.so t((a, b) => a + b);
// console.log(arrNum);

// const userAlphabet = prompt("Enter the alphabet").toLocaleLowerCase(); 
// const alphabetNumber = userAlphabet.charCodeAt(0) - 96;  

// if (alphabetNumber >= 1 && alphabetNumber <= 26) {
//     console.log(`The position of '${userAlphabet}' in the alphabet is: ${alphabetNumber}`); // Position print karein
// } else {
//     console.log("Please enter a valid alphabet letter (a-z)."); 
// }


// const arrNum = [2, 4, 7, 8, 4, 7, 8, 9, 35, 2, 3, 5, 8, 9];
// const duplicate = arrNum.filter((ele, index, arr) => arr.indexOf(ele) !== index);

// console.log(duplicate); // This will output the duplicates

// const arrNum = [1, 3, 4, 5, 6, 7, 8, 9];
// const sum = arrNum.reduce((sum, value) => {
//     return sum + value;
// }, 0);

// console.log(sum); // Output: 43

 const string = prompt("Enter the vowel");
 string.toLocaleLowerCase();
 if (string === 'a' || string === 'e' || string === 'i' || string === 'o' || string === 'u') {
console.log(`${string } is Vowel`);
}else{
    console.log(`${string} is not Vowel`);
    
}

const inputString = prompt("Enter the number");

const palindromeFind = (str) => {
    const reverseStr = str.split("").reverse().join("");
    if (reverseStr === str) {
        return true;
    }
    return false;  
};

const isPalindrome = palindromeFind(inputString);
console.log(isPalindrome ? "It's a palindrome!" : "It's not a palindrome.");

const array= [1,2,8,2,9,8,11];
const duplicate = array.filter((ele,index,arr)=>arr.indexOf(ele)!==index);
console.log(duplicate);
 
 
 
const Users = [
    { id: 1, name: "Tarun mavi", isActive: true, age: 11 },
    { id: 2, name: "Mahur den", isActive: false, age: 14 },
    { id: 3, name: "Faraz", isActive: true, age: 15 },
    { id: 4, name: "Trend den", isActive: false, age: 16 }
  ];
//   Users.sort((user1,user2)=>user1.age<users2.age?-1:1);

  const names = []; 
  
  for (let i = 0; i < Users.length; i++) {
    names.push(Users[i].name); 
  }
  
  console.log(names); 
  
const a = {};
const b={key:"b"};
const c ={key :"c"};
a[b]=123;
a[c]=456;
console.log(a[b]);
 
const users = {
name :"Piyush",
age:34,
};
const strObj = JSON.stringify(users);
console.log(JSON.parse(strObj));

const d= [1,3,4,6,7,4,7,9,10];
const result = d.reduce((accumelator,d)=>{
 return accumelator+d;   
},0);

console.log(result);

const arr = [2, 3, 2, 4, 5, 3, 6, 2, 4, 3, 10];
const duplicated = arr.filter((ele, index, array) => array.indexOf(ele) !== index);
console.log(duplicated);

function bun(){
   
   const h1 = document.getElementById("fruite");
    h1.innerHTML="Trendging fruite Lists"

    h1.style.backgroundColor="#fff333";
    h1.style.color= "red";
    h1.style.fontFamily="Verdhana,sans serif"
    h1.style.cursor="pointer"
   
}
 function multpleByLength(arr){
    let len = arr.length;
    for(i=0;i<len;i++){
        arr[i]=arr[i]*len;
    }
    return arr;
 }
 console.log(multpleByLength([4,1,2,3]));
 
 

