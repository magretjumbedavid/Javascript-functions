// Given an array of strings, use a function to reverse all the elements in the string in 
// ascending order and the specific elements in descending order
function stringReverse(){
    let str= " World";
    let stri=str.split(" ")
    let str1=stri.reverse() +str.slice(1);
    let str2=str1.slicce(1).sort();
    return str2
    console .log(stri);
}
stringReverse();

// Using JS functions and an array of numbers, return positive if an element w
// ithin the array is positive, negative if an element is negative, else zero
function numbers(){
    let num=[-4,-5,-12];
    if(num < 0){
        return "negative"
    }
    else{
        return "postive"
    }
    console.log("numbers");
}
numbers();
// Given an array of objects, where each object represents an employee with an id, name, 
// and salary property, write a function that returns a new array of employee objects 
// sorted by their salary in ascending order.
const workers=[{id:1,mane:"Magret David" ,salary:$1258 ,id:2,name:"Mirrium Chawawa",salary:$2500}]

