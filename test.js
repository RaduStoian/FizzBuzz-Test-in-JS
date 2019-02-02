/* FIZZ BUZZ TEST 
"Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number and 
for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”."*/

function fizz(){
    let i;

    for( i=1; i<=100 ; i++) 
    {

    // FIZZ BUZZ

        if(i % 3 == 0 && i % 5 == 0) 

        {
            console.log ('fizzbuzz')
        }


// FIZZ
        else if (i % 3 == 0 ) 

        { console.log('fizz')} 

    
// Buzz
    
        else if (i % 5 == 0) 

        {console.log('buzz')}


        else { console.log(i)};

      }  

}

    /*else {console.log(i)};*/

    







