module.exports = {
range:function(start, end, step) {

  let i = 0;
  var array = [];

  if (typeof step == 'undefined'){
    var step = 1;
  }

    var finish = end - start;
    var tab = finish / step;

  while( i <= tab){
  array[i] = start ;
  start = start + step ;
  i++ ;
  }

console.log(array);

 }
}
