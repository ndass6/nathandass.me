var logoEl = document.querySelector('.name-animation');
var pathEls = document.querySelectorAll('.name-animation path');
var innerWidth = window.innerWidth;
var maxWidth = 1082;
var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
var logoTimeline = anime.timeline();

logoEl.style.transform = 'translateY(50px) scale('+logoScale+')';

for (var i = 0; i < pathEls.length; i++) {
  var el = pathEls[i];
  el.setAttribute('stroke-dashoffset', anime.setDashoffset(el));
}

logoTimeline
  .add({
  targets: '.dot-e',
  translateX: [
    { value: -1000, duration: 820, delay: 200, easing: 'easeInQuart' }
  ],
  scale: [
    { value: [0, 1], duration: 200, easing: 'easeOutBack' },
    { value: 0, duration: 20, delay: 800, easing: 'easeInQuart' }
  ],
  offset: 0
})
  .add({
  targets: '.fill.in.first',
  strokeDashoffset: {
    value: [anime.setDashoffset, 0],
    duration: 600,
    delay: function(el, i, t) { return 1000 + ( i * 150 ); },
    easing: 'easeOutQuart'
  },
  stroke: {
    value: ['#FFF', function(el) { return anime.getValue(el.parentNode, 'stroke') } ],
    duration: 500,
    delay: 500,
    easing: 'easeInQuad'
  },
  offset: 0
})
  .add({
  targets: '.fill.in.last',
  strokeDashoffset: {
    value: [anime.setDashoffset, 0],
    duration: 600,
    delay: function(el, i, t) { return 1000 + document.querySelectorAll('.fill.in.first').length * 150 + ( i * 300 ); },
    easing: 'easeOutQuart'
  },
  stroke: {
    value: ['#FFF', function(el) { return anime.getValue(el.parentNode, 'stroke') } ],
    duration: 500,
    delay: 500,
    easing: 'easeInQuad'
  },
  offset: 0
});