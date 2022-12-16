// #### `arrayReverse`
// Given an array of numbers, reverse the order of the numbers in the array.


let NewArray = [1,2,3,4,5,6]


// console.log(NewArray.reverse())

// ...........................................


// #### `inBothArrays`
// Given 2 arrays of numbers, return an array that includes all numbers that appear in both arrays.


let numberArray = [1,2,3,4,5,6,10];
let numberArray2 = [6,7,8,9,10];
let newEmpty


// console.log(numberArray.concat(numberArray2));

// #### `characterCount`
// Given a string and then a single character `c`, write a function that will return a count equal to the number of occurences of the character `c` inside the string.


let string = 'cnsbcdscbscscbcbscb'
b=0
for (let i = 0; i < string.length; i++) {
   
    if (string[i] === 'c'){
        b++
    }
    
    
}
// console.log(b);


// #### `numberSwap`
// Given two number variables, `a` and `b`, swap the values of those two variables.  Try using only 2 variables!

a= 1;
b= 2;

function numberSwap(a,b){
    [a,b] = [b,a]
    console.log(a,b)
}
// numberSwap(a,b);

// #### `palindrome`
// Given a string, check to see if that string is a palindrome.  A palindrome is a string that is spelled the same both frontwards and backwards (ie, `racecar`)

let palindrome = 'racecar'


function checkPalindrome(){
   
    string = ''
    string2 = ''
    for (let i = 0; i < palindrome.length; i++) {
            string += palindrome[i]
     };
     let x = palindrome.length-1;
    for (let b = x; b >-1; b --) {
            string2 += palindrome[b]
              
    };
    if(string === string2){
    console.log (string,string2)
    };

}

// checkPalindrome();

// #### `targetSum`
// Given an array of unique numbers and a target number, find all pairs of integers that can be summed in that array that will give the target number.  If there are none return `undefined`.  Return the pairs as an array of arrays.  Note: [a,b] and [b,a] can be treated as the same thing.  

 let newarrray = [5,1,6,8,3,9]
function targetSum(array){
    let newEmpty=[]
    for (let i = 0; i < array.length; i++) {
        for (let a = i; a < array.length; a++) {
            if(array[i]+ array[a]=== 14){
                newEmpty.push(array[i],array[a])
                console.log(newEmpty)
            } 
        }
        
    }

}
// targetSum(newarrray);


// #### `isPrime`
// Given an input number `n`, check if n is a prime number.  A prime number is only divisible by 1 and itself. If the number is prime, return true and if not return false.

function isPrime(number){
    prime = true;
    for(i=2;i<number;i++){
        if(number%i===0){
            prime = false;
           
            break;
        
        }
    }console.log(prime)

}
// isPrime(7);



// #### `secondLargest`
// Given an unsorted array of numbers, find the second largest number in that array.  
let secondlarge = [12,8,3,4,5,6,7]

function sortArray(array){
   let newarr = array.sort((a,b)=> a-b)
   console.log(newarr)
    console.log(newarr[newarr.length-2])
};
sortArray(secondlarge)