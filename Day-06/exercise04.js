module.exports = {
 fizzBuzz:function(num) {

   var output = "";
   let i = 1;

  while(i <= num) {

    if (i % 5 === 0 && i % 3 !== 0) {
     output += 'Buzz';
    }

    else if (i % 3 === 0 && i % 5 !== 0) {
     output += 'Fizz';
    }

    else if (i % 5 === 0 && i % 3 === 0) {
     output += 'FizzBuzz';
    }

    else {
      output += i ;
    }

    if (i != num ){
     output += ', ';
    }

     i++;
   }
     console.log(output);
 }
}
