module.exports = {
 countGs: function(str) {

   var letter_count = 0;
   var i = 0;

   while (i < str.length)
   {
     if (str[i] == 'G')
      letter_count++;
      i++;
   }
    console.log(letter_count);
    return letter_count;
 }
}
