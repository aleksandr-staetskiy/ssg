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

  // logic for discount switcher
  $('.b3 .right-flex .item').on('click', function(e){
		if ($(this).hasClass('active')) {
			e.preventDefault();
		}
		else {
			$('.b3 .right-flex .item').removeClass('active');
			$(this).addClass('active');
			$('.b3 .gradient .row .left .left-title').text($(this).attr('data-name'));
			$('.b3 .gradient .row .left .after-title').text($(this).attr('data-text'));
			$('.b3 .gradient .row .left .text-content').html($(this).attr('data-content'));
			var new_bg = './img/akcia/' + $(this).attr("data-bg") + '.jpg';
			$('.b3').css('background-image', 'url(' + new_bg + ')');
			$('.b3 .gradient .row .left .white').text($(this).attr('data-old'));
	        $('.b3 .gradient .row .left .yellow').text($(this).attr('data-new'));
		}
	});
	$('.b3 .select-block .select .title .arrow').on('click', function(){
	   $(this).closest('.select').toggleClass('active');
	});
	$('.b3 .select-block .select .list .list-item').on('click', function(){
	   $(this).closest('.select').toggleClass('active');
	   $(this).closest('.select').find('.name').text($(this).text());
	   $('.b3 .gradient .row .left .left-title').text($(this).attr('data-name'));
	   $('.b3 .gradient .row .left .after-title').text($(this).attr('data-text'));
	   $('.b3 .gradient .row .left .text-content').html($(this).attr('data-content'));
	   var new_bg = './img/akcia/' + $(this).attr("data-bg") + '.jpg';
	   $('.b3').css('background-image', 'url(' + new_bg + ')');
	   $('.b3 .gradient .row .left .white').text($(this).attr('data-old'));
	   $('.b3 .gradient .row .left .yellow').text($(this).attr('data-new'));
	});

  $("#discount-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 6000,
    navContainerClass: 'promo-nav',
  });

  $("#stage-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive:{
      320:{
        nav: false,
      },
      620:{
        nav: true,
        navContainerClass: 'stage-nav',
      },
  }
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
    // autoplay: true,
    autoplayTimeout: 6000,
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
    navContainerClass: 'certificates-nav',
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
    navContainerClass: 'partners-nav',
    responsive:{
      320:{
        items: 1,
        nav: false,
        margin: 50,
      },
      820:{
        margin: 150,
        items: 5,
        // navContainerClass: 'stage-nav'
      },
  }
  });

  // resizebale init
  $(".resizable").simplebox();

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


ymaps.ready(init);
    function init(){ 
      //   // Создание карты.    
      //   var myMap = new ymaps.Map("map", {
      //       // Координаты центра карты.
      //       // Порядок по умолчанию: «широта, долгота».
      //       // Чтобы не определять координаты центра карты вручную,
      //       // воспользуйтесь инструментом Определение координат.
      //       center: [59.95409813, 30.29329758],
      //       // Уровень масштабирования. Допустимые значения:
      //       // от 0 (весь мир) до 19.
      //       zoom: 13,
      //       behaviors: ['drag']
            
      //   });

      //   // var placemark = new ymaps.Placemark( [55.75399400, 37.62209300], {
      //   //   balloonContent: 'evtrr'
      //   // });

      //   // map.geoObjects.add(placemark);

      //   var myGeoObject = new ymaps.GeoObject({
      //     geometry: {
      //         type: "Point", // тип геометрии - точка
      //         coordinates: [55.75399400, 37.62209300] // координаты точки
      //     }
      // });

      var myMap = new ymaps.Map("map", {
        center: [59.95432075, 30.28974095],
        zoom: 12,
        behaviors: ['drag']
    });
    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [59.95414856, 30.29351750] // координаты точки
        },
        hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map_metka.png',
      iconImageSize: [40, 60],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      // iconImageOffset: [-5, -38]
        
    });
    
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject); 
    }


