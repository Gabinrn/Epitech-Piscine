module.exports = {
 arraysAreEqual: function(arr1, arr2) {

   if(JSON.stringify(arr1) === JSON.stringify(arr2)){
     return console.log(True);
   }
       return console.log(False);
     }
}
