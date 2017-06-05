jQuery(document).ready(function($) {
  var scrolling = false;
  var prev;
  var contentSections = $('.cd-section'),
    verticalNavigation = $('.cd-vertical-nav'),
    navigationItems = verticalNavigation.find('a'),
    navTrigger = $('.cd-nav-trigger'),
    scrollArrow = $('.cd-scroll-down');
  updateSections();

  $(window).on('scroll', checkScroll);

  //smooth scroll to the selected section
  verticalNavigation.on('click', 'a', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
        verticalNavigation.removeClass('open');
    });

    //smooth scroll to the second section
    scrollArrow.on('click', function(event){
      event.preventDefault();
        smoothScroll($(this.hash));
    });

  // open navigation if user clicks the .cd-nav-trigger - small devices only
    navTrigger.on('click', function(event){
      event.preventDefault();
      verticalNavigation.toggleClass('open');
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

  function smoothScroll(target) {
        $('body,html').animate(
          {'scrollTop':target.offset().top},
          300
        );
  }
});