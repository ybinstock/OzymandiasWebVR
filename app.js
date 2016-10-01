$(document).ready(function() {

  var trader = document.querySelector('#trader');
  var legs = document.querySelector('#legs');
  var head = document.querySelector('#head');
  var text = document.querySelector('#text');


  //to transition to end scene
  function activateScene2() {
    document.querySelector('#trader').emit('fade');
    document.querySelector('#legs').emit('fade');
  }

  setTimeout(activateScene2, 6000);

  function activateScene3() {
    document.querySelector('#head').emit('fade');
  }

  setTimeout(activateScene3, 11000);

  function activateScene4() {
    document.querySelector('#text').emit('fade');
  }

  setTimeout(activateScene4, 38000);

  function activateScene5() {
    document.querySelector('#legs').emit('fade');
    document.querySelector('#head').emit('fade');
    document.querySelector('#text').emit('fade');

  }

  setTimeout(activateScene5, 50000);



});
