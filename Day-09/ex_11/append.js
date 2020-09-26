$('.btn').click(function(){
  const list = $('<div />').text($('#listItem').val());
  $('#listReceive').append(list);
});
