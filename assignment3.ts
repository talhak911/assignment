// - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
let array8 : number[] = [1,2,3,4,5,6,7]
function addElement (arr:number [] , index: number, value: number )
{
    arr.splice(index,0,value)
    return arr;

}

console.log("Orignal Array = ",array8);
console.log("Element added Modified Array = " ,addElement(array8,0,0))

console.log("new program start");
console.log("");
 //- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
let cart :any[]=[];
function addEle(add:any)
    {
        cart.splice(cart.length,0,add)
        console.log("Added item ",cart);
        
    } 
   
 addEle("apple")
 addEle("mango")
 addEle("peach")

 function removeEle(index:number,remo:number)
    {
        if(index<cart.length){
        cart.splice(index,remo)
        console.log("Removed item ",cart);  }
    } 
removeEle(1,1)

    function updateEle(index:number,upd:any)
    {
        cart.splice(index,1,upd)
        console.log("Updated item ",cart);  
    } 
updateEle(1,"banana")
console.log("new program start");
console.log("");
// Write a program that uses a while loop to print the first 25 integers.
 let i: number=1;
 while (i<=25){
console.log(i," ");
i++;
 }  
 
 console.log("new program start");
 console.log("");
 // Write a program that uses a while loop to print the first 10 even numbers.
let j:number=1;
while (j<=10)
{
    console.log(j*2);
    j++
}
console.log("new program start");
 console.log("");

 //- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
 let numb:number=5;
 let factorial:number=1;
 let fac = (numb:number)=>{
    if (numb>0)
    {
        let i:number=1;
        while(i<=numb)
        {
            factorial=factorial*i
            i++;
        }
        console.log(`Factorial of ${numb} is ${factorial}`);
        

    }
    else 
    {console.log("Number is negative or zero");
    }
 }
 fac(numb)

 console.log("new program start");

 console.log("");
 //Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let array9 : number[]=[-1,-2,1,2,3,4,-5,6,7,-8]
console.log("Orignal Array ", array9);

for (let i=0 ; i<=array9.length; i++)
{
if (array9[i]<0){
array9.splice(i,1)
i--
}
else {i++}
}
console.log("After removing negative numbers ", array9);


console.log("new program start");
console.log("");
 //Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
let array10:number[]=[1,2,3,4,5,-5]
 function sumOfall(arr:number[])
{
    let sum:number=0
    let i :number=0;
    while (i<arr.length) {
        sum=sum+arr[i];
        i++
    }
    return sum;
}
console.log("Array = " , array10);
console.log("Sum of all elements in array ",sumOfall(array10));

 
 console.log("new program start");
 console.log("");


 // Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
let cTemp:number[]=[0,10,20,30]
let fahrenheitTemp:number[]=[];
let k:number=0;
while (k<cTemp.length)
{
fahrenheitTemp.push((cTemp[k] * 9/5) + 32);
k++
}
console.log("temperatures in celcius ", cTemp);

console.log("Temperatures in fahrenheit ", fahrenheitTemp);
