////////////////////////////////////////////////////////////////////////////////
//      Sticky microsite nav
////////////////////////////////////////////////////////////////////////////////

var stickyNav = function(){
  // elements and classes
  var stickyNavClass     = '.js-sticky-nav';
  var stickyNavContainer = '.js-sticky-nav-wrap';
  var stickyNavModifier  = 'is-stuck';
  var scrollTop = $(document).scrollTop();
  var nav       = $(stickyNavClass);
  var navHeight = nav.outerHeight();
  var distance  = $(stickyNavContainer).offset().top;
  // give height to the nav container to keep page length
  $(stickyNavContainer).css('height', navHeight);
  // is nav above or below wrap
  if( scrollTop > distance ){
    nav.addClass(stickyNavModifier);
  }else{
    nav.removeClass(stickyNavModifier);
  }
};

if ($('.js-sticky-nav').length > 0) {
  // runs on page load and scroll
  stickyNav();
  $(document).scroll(function() {
    stickyNav();
  });
}




////////////////////////////////////////////////////////////////////////////////
//    Current section nav highlight
////////////////////////////////////////////////////////////////////////////////

$('.js-nav-section').waypoint(function(direction) {

  // classes
  var navClass       = 'page-nav__link';
  var activeNavClass = 'is-current';

  // swaps the active class between nav elements
  function swapClasses(sectionId) {
    $('.' + navClass + '.' + activeNavClass).removeClass(activeNavClass);
    $('.' + navClass + '--' + sectionId).addClass(activeNavClass);
  }

  if (direction === 'up') {
    // highlight previous region
    var previousSectionId = $('#' + this.element.id).prev().attr('id');
    swapClasses(previousSectionId);
  } else if (direction === 'down') {
    // highlight current section
    var currentSectionId = this.element.id;
    swapClasses(currentSectionId);
  }

});