var $bubbleburp = $('.bubbleburp');

$bubbleburp.waypoint(function (){
  $bubbleburp.addClass('js-bubble-animate');
}, { offset: '-5%' });
