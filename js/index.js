var logoEl = document.querySelector('.logo-animation');
var pathEls = document.querySelectorAll('.logo-animation path:not(.icon-curve)');
var innerWidth = window.innerWidth;
var maxWidth = 740;
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
    { value: -600, duration: 520, delay: 200, easing: 'easeInQuart' }
  ],
  scale: [
    { value: [0, 1], duration: 200, easing: 'easeOutBack' },
    { value: 0, duration: 20, delay: 500, easing: 'easeInQuart' }
  ],
  offset: 0
})
  .add({
  targets: '.fill.in',
  strokeDashoffset: {
    value: [anime.setDashoffset, 0],
    duration: 600,
    delay: function(el, i, t) { return 700 + ( i * 100 ); },
    easing: 'easeOutQuart'
  },
  stroke: {
    value: ['#FFF', function(el) { return anime.getValue(el.parentNode, 'stroke') } ],
    duration: 500,
    delay: 500,
    easing: 'easeInQuad'
  },
  opacity: {
    value: 0,
    duration: 0,
    delay: function(el, i, t) { return 1900 + ( i * 80 ); },
  },
  offset: 0
});