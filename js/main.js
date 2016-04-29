var $bubbleburp = $('.bubbleburp');

var $howmany = $('.howmany');
var $fooditems = $('.fooditems');

$bubbleburp.waypoint(function (){
  $bubbleburp.addClass('js-bubble-animate');
}, { offset: '-5%' });

$howmany.on('click', function () {
  $fooditems.toggleClass('showbox');
});



