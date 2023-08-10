// function cubeNumber(number) {
    
//     if (typeof number !== 'number') {
//         return "Input is not a number. Pleace input a number";
//     } else if(number < 0 ){
//         return "Pleace input a positive number"
//     }
    
//     const result = Math.pow(number, 3);
//     return result;

// }
// // 2

// function matchFinder(string1, string2) {
//     if (typeof string1 !== 'string' || typeof string2 !== 'string'  ) {
//         return "Input is not a string. Pleace input a string";
//     }
//     if(string1.includes(string2)){
//         return true
//     }else{
//         return false
//     }
// }



// function sortMaker(arr) {
//      if (arr.length !== 2) {
//         return "Array must have two element .";
//       }
//       else if (arr[0] < 0 || arr[1] < 0){
//         return "Invalid Input"
//     }
//     else if (arr[0] === arr[1]){
//         return "equal"
//     }
//     const max = Math.max(arr[0], arr[1]);
//     const min = Math.min(arr[0], arr[1]);

//     return [arr[0], arr[1]] = [max, min];
    
// }

// // const cheek = sortMaker([1]) 
// // console.log(cheek);

 
// // 4

// function findAddress(obj) {
//     const street = obj.street || "__";
//     const house = obj.house || "__";
//     const society = obj.society || "__";

//     return street+","+house+","+society;
// }

// const obj = {
 
    
     

// }

// const result = findAddress(obj)
// console.log(result);
function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string'  ) {
        return "Input is not a string. Pleace input a string";
    }
    if(string1.includes(string2)){
        return true
    }else{
        return false
    }
}


 
const num1 = "John Deo";
const num2 = "joh";
const result = matchFinder(num1, num2)
console.log(result);
