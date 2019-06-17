$(document).ready(function(){
  $("#promo-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navContainerClass: 'promo-nav',
    responsive:{
      320:{
          nav: false,
          dots: true
      },
  }
  });

  $("#discount-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoHeight:true,
    navContainerClass: 'promo-nav',
    // dotsClass: 'discount-panel',
    // dotClass: 'discount-btn',
  });

  $("#stage-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 6000,
    navContainerClass: 'stage-nav',
  });

  $("#resources-slider").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 6000,
    navContainerClass: 'stage-nav',
    responsive:{
      320:{
        items: 1,
      },
      620:{
        items: 2,
      },
      820:{
        items: 4,
      },
  }
  });

  $("#feedback-slider").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 6000,
    navContainerClass: 'stage-nav',
    responsive:{
      320:{
        items: 2,
      },
      820:{
        items: 4,
      },
  }
  });

  $("#comments-carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 9000,
    // navContainerClass: 'stage-nav',
    responsive:{
      320:{
        items: 1,
        nav: false,
      },
      820:{
        nav: true,
        items: 3,
        navContainerClass: 'stage-nav',
      },
  }
  });

  $("#certificates-carousel").owlCarousel({
    items: 4 ,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 9000,
    navContainerClass: 'stage-nav',
    responsive:{
      320:{
        items: 1,
      },
      820:{
        items: 4,
      },
  }
  });

  $("#partners-slider").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000,
    navContainerClass: 'stage-nav',
    responsive:{
      320:{
        items: 3,
        center: true,
        nav: false,
        margin: 50,
      },
      820:{
        margin: 150,
        items: 5,
        navContainerClass: 'stage-nav'
      },
  }
  });

  // resizebale init
  $(".resizable").simplebox();

  // instafeed init
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'awesome',
    clientId: 'YOUR_CLIENT_ID'
});
feed.run();
});

  // burger setup
  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });

$(function() {

  // the input field
  var $input = $("input[type='search']"),
    // clear button
    $clearBtn = $("button[data-search='clear']"),
    // prev button
    $prevBtn = $("button[data-search='prev']"),
    // next button
    $nextBtn = $("button[data-search='next']"),
    // the context where to search
    $content = $(".app-wrapper"),
    // jQuery object to save <mark> elements
    $results,
    // the class that will be appended to the current
    // focused element
    currentClass = "current",
    // top offset for the jump (the search bar)
    offsetTop = 50,
    // the current index of the focused element
    currentIndex = 0;

  /**
   * Jumps to the element matching the currentIndex
   */
  function jumpTo() {
    if ($results.length) {
      var position,
        $current = $results.eq(currentIndex);
      $results.removeClass(currentClass);
      if ($current.length) {
        $current.addClass(currentClass);
        position = $current.offset().top - offsetTop;
        window.scrollTo(0, position);
      }
    }
  }

  /**
   * Searches for the entered keyword in the
   * specified context on input
   */
  $input.on("input", function() {
  	var searchVal = this.value;
    $content.unmark({
      done: function() {
        $content.mark(searchVal, {
          separateWordSearch: true,
          done: function() {
            $results = $content.find("mark");
            currentIndex = 0;
            jumpTo();
          }
        });
      }
    });
  });

  /**
   * Clears the search
   */
  $clearBtn.on("click", function() {
    $content.unmark();
    $input.val("").focus();
  });

  /**
   * Next and previous search jump to
   */
  $nextBtn.add($prevBtn).on("click", function() {
    if ($results.length) {
      currentIndex += $(this).is($prevBtn) ? -1 : 1;
      if (currentIndex < 0) {
        currentIndex = $results.length - 1;
      }
      if (currentIndex > $results.length - 1) {
        currentIndex = 0;
      }
      jumpTo();
    }
  });
});

