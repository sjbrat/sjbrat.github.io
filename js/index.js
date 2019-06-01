$(function () {
  $('.grid-item').click(function () {
    // console.log('item click')
  })
  $('.container-grid').masonry({
    itemSelector: '.grid-item',
    fitWidth: true
  })

  $('.card').click(flip)

  function flip () {
    $('.card').removeClass('flipped')
    $(this).toggleClass('flipped')
  }

  // Wrap every letter in a span
  $('.thankyou').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({loop: true})
    .add({
      targets: '.thankyou .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function(el, i) {
        return 500 + 30 * i;
      }
    }).add({
      targets: '.thankyou .letter',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: function(el, i) {
        return 100 + 30 * i;
      }
    });

// autosize



})
