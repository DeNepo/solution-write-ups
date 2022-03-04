// SOLUTION 1

//calculate the age of a person,birth date given (28-02-1992) 
//and output should be 27

function calculate_age(dob) {
    var diff = Date.now() - dob.getTime();
    var ageDate = new Date(diff);
    
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    A
    console.log(calculate_age(new Date(1992, 02, 28))); //28

    // SOLUTION 2

    //HOW TO calculate the are of a square
        function areaOfSquare(a,b ){
            var side1 = 'a'
            var side2 =  'b'
            var areaOfSquare = side1 * side2
            return  a * b

        }
        console.log(areaOfSquare);


       // SOLUTION 3
    // HOW TO WRITE THE TODAY DATE USING JS 

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);
    
