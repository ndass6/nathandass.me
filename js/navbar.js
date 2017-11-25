jQuery(document).ready(function($) {
  var scrolling = false;
  var blur = true;
  var prev;
  var contentSections = $('.cd-section'),
    navigation = $('.cd-stretchy-nav'),
    navigationItems = navigation.find('a'),
    navTrigger = $('.cd-nav-trigger');
  updateSections();

  if (navigation.length > 0) {
    navigation.each(function() {
      var stretchyNav = $(this);
      
      navTrigger.on('click', function(event){
        event.preventDefault();
        stretchyNav.toggleClass('nav-is-visible');
      });
    });

    $(document).on('click', function(event) {
      if ( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) {
        navigation.removeClass('nav-is-visible');
        $('.cd-content').removeClass("blur");
        blur = true;
      }
    });
  }

  $(window).on('scroll', checkScroll);
  
  navigationItems.on('click', function(event){
    event.preventDefault();
    if (blur) {
      $('.cd-content').addClass("blur");
    }
    else {
      $('.cd-content').removeClass("blur");
    }
    blur = !blur;
    navClick = true;
  });

  function checkScroll() {
    if( !scrolling ) {
      scrolling = true;
      (!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
    }
  }

  function updateSections() {
    var halfWindowHeight = $(window).height()/2,
      scrollTop = $(window).scrollTop();
    var other = false;
    contentSections.each(function() {
      var section = $(this),
        sectionId = section.attr('id'),
        navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
      if( (section.offset().top - halfWindowHeight < scrollTop )
          && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
      {
        navigationItem.addClass('active');
        prev = sectionId;
        other = true;
      }
      else {
        navigationItem.removeClass('active');
      }
    });
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      navigationItems.filter('[href^="#volunteer"]').removeClass('active');
      navigationItems.filter('[href^="#contact"]').addClass('active');
      prev = "contact"
      other = true;
    }
    if ($(window).scrollTop() == 0) {
      navigationItems.filter('[href^="#name"]').addClass('active');
      prev = "name";
      other = true;
    }
    if (!other) {
      navigationItems.filter('[href^="#' + prev + '"]').addClass('active');
    }
    scrolling = false;
  }
});