### SOLUTIONS OF CHALLENGES IN JAVASCRIPTS
----------------------------------------------------------------
1.  finding a lenght of  string in an array**:The length property sets or returns the number of elements in an array.
* examples:
* const animals = ['cat', 'goats',"sheep",'cow','monkey']
* let length = animals.length

2. minimum and maximum values in arrays:
3. // Getting min value
var arr = [5,1,9,5,7];
var min = Math.min(...arr);
console.log(min); // 1

// Getting max value
var arr = [5,1,9,5,7];
var min = Math.max(...arr);
console.log(min); // 9
 
4. find the smallest number in an array:
5. const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = Math.min(...arr)
console.log(min)
 
6. finding the smallest number in arrays using a for loops:
7. var arr = [5,1,9,5,7];
var smallest = arr[0];

for(var i=1; i<arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i];   
    }
}

console.log(smallest);
