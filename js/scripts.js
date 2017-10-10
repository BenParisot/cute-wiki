$(document).ready(function() {
  $('#kitten').click(function() {
    $('#flemmy').hide();
    $('#kinkajou').hide();
    $('#giraffe').hide();
    $('#kittie').show();
  });
  $('#gir').click(function() {
    $('#flemmy').hide();
    $('#kinkajou').hide();
    $('#kittie').hide();
    $('#giraffe').show();
  });
  $('#kinky').click(function(){
    $('#flemmy').hide();
    $('#kinkajou').show();
    $('#kittie').hide();
    $('#giraffe').hide();
  })
  $('#flem').click(function(){
    $('#flemmy').show();
    $('#kinkajou').hide();
    $('#kittie').hide();
    $('#giraffe').hide();
  })

});
