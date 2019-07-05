/*document.oncontextmenu = function (){return false};
document.ondragstart = noselect; 
    // запрет на перетаскивание 
    document.onselectstart = noselect; 
    // запрет на выделение элементов страницы 
    document.oncontextmenu = noselect; 
    // запрет на выведение контекстного меню 
    function noselect() {return false;} */
	/*
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
*/
$(document).ready(function(){
    /*function change_slide() {$('.b1 .owl-nav .owl-next').click();}
    setInterval(change_slide, 5000);*/

    // if(screen.width < 768){
    // 	$(document).find('.b15.clients .clients-items').slick({
	// 		dots: true,
	// 		infinite: false,
	// 		arrows: true,
	// 		rows: 3,
	// 		slidesPerRow: 1
	// 	});
	// 	$(document).find('.new-b3-wrap').slick({
	// 		dots: true,
	// 		infinite: true,
	// 		arrows: true,
	// 		autoplay: true,
	// 		autoplaySpeed: 3000,
	// 		adaptiveHeight: true,
	// 	});
    // }

	
	// $("#jquery_jplayer_1").jPlayer({
    //     ready: function (event) {
    //         $(this).jPlayer("setMedia", {
    //             title: "Радио России, рубрика «СОВЕТ ДНЯ», эфир 08.12.2017г.",
    //             mp3: "http://test.stroysnabgaz.ru/wp-content/themes/ssg/audio/audio.mp3"
    //         });
    //     },
    //     swfPath: "../../dist/jplayer",
    //     supplied: "mp3",
    //     wmode: "window",
    //     useStateClassSkin: true,
    //     autoBlur: false,
    //     smoothPlayBar: true,
    //     keyEnabled: true,
    //     remainingDuration: true,
    //     toggleDuration: true
    // });
	var owl = $(".owl-carousel-1");
	owl.owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: true,
		animateOut: 'slideOutDown',
		animateIn: 'slideInDown'
	});
	var owl = $(".owl-carousel-2");
	owl.owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: true
	});
	var owl = $(".owl-carousel-3, .owl-carousel-4, .owl-carousel-5");
	owl.owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: true
	});
	var slide_6;
	if ($(window).width() >= 1200) {slide_6 = 4;}
	if ($(window).width() < 767) {slide_6 = 1;}
	var owl = $(".owl-carousel-6");
	owl.owlCarousel({
		items: slide_6,
		margin: 0,
		loop: true,
		nav: true
	});
	var slide_7;
	if ($(window).width() >= 1200) {slide_7 = 5;}
	if (($(window).width() >= 768) && ($(window).width() < 1200)) {slide_7 = 3;}
	if ($(window).width() < 767) {slide_7 = 1;}
	var owl = $(".owl-carousel-7");
	owl.owlCarousel({
		items: slide_7,
		margin: 0,
		loop: true,
		nav: true
	});
	var slide_8;
	if ($(window).width() >= 1200) {slide_8 = 3;}
	if (($(window).width() >= 768) && ($(window).width() < 1200)) {slide_8 = 2;}
	if ($(window).width() < 767) {slide_8 = 1;}
	var owl = $(".owl-carousel-8");
	owl.owlCarousel({
		items: slide_8,
		margin: 0,
		loop: true,
		nav: true
	});
	var slide_9;
	if ($(window).width() >= 1200) {slide_9 = 4;}
	if (($(window).width() >= 768) && ($(window).width() < 1200)) {slide_9 = 2;}
	if ($(window).width() < 767) {slide_9 = 1;}
	var owl = $(".owl-carousel-9");
	owl.owlCarousel({
		items: slide_9,
		margin: 45,
		autoWidth:true,
		loop: true,
		nav: true
	});
	$('.b3 .right-flex .item').on('click', function(e){
		if ($(this).hasClass('active')) {
			e.preventDefault();
		}
		else {
			$('.b3 .right-flex .item').removeClass('active');
			$(this).addClass('active');
			/*
			var new_title = $(this).find('.item-title').text();
			var new_text = $(this).find('.item-text').text();
			var white_price = $(this).find('.left-price').text();
			var yellow_price = $(this).find('.right-price').text();
			
			$('.b3 .left .left-title').text($(this).find('.item-title').text());
			$('.b3 .left .after-title').text($(this).find('.item-text').text());
			$('.b3 .left .white').text($(this).find('.left-price').text());
			$('.b3 .left .yellow').text($(this).find('.right-price').text());
			
			*/
			//console.log(new_title,new_text,white_price,yellow_price);
			
			$('.b3 .gradient .row .left .left-title').text($(this).attr('data-name'));
			$('.b3 .gradient .row .left .after-title').text($(this).attr('data-text'));
			$('.b3 .gradient .row .left .text-content').html($(this).attr('data-content'));
			var new_bg = document.location.origin + '/wp-content/themes/ssg/img/akcia/' + $(this).attr("data-bg") + '.jpg';
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
	   var new_bg = document.location.origin + '/wp-content/themes/ssg/img/akcia/' + $(this).attr("data-bg") + '.jpg';
	   $('.b3').css('background-image', 'url(' + new_bg + ')');
	   $('.b3 .gradient .row .left .white').text($(this).attr('data-old'));
	   $('.b3 .gradient .row .left .yellow').text($(this).attr('data-new'));
	});
	$('.b5 .buttons .button').on('click', function(e){
		if ($(this).hasClass('active')) {
			e.preventDefault();
		}
		else {
			$('.b5 .buttons .button').removeClass('active');
			$(this).addClass('active');
			$('.b5 .owl-dots button:nth-child('+ $(this).attr("data-number") +')').click();
		}
	});
	$('.b6 .buttons .button').on('click', function(e){
		if ($(this).hasClass('active')) {
			e.preventDefault();
		}
		else {
			$('.b6 .buttons .button').removeClass('active');
			$(this).addClass('active');
			$('.b6 .owl-dots button:nth-child('+ $(this).attr("data-number") +')').click();
		}
	});
	$('.b7 .buttons .button').on('click', function(e){
		if ($(this).hasClass('active')) {
			e.preventDefault();
		}
		else {
			$('.b7 .buttons .button').removeClass('active');
			$(this).addClass('active');
			$('.b7 .owl-dots button:nth-child('+ $(this).attr("data-number") +')').click();
		}
	});
	$('.toogle-mobile').on('click', function(){
	    if ($('.toogle-mobile').hasClass('active')) {
	        $('.toogle-mobile').removeClass('active');
	        $('header .header-menu .links').css('display', 'none');
	    }
	    else {
	        $('.toogle-mobile').addClass('active');
	        $('header .header-menu .links').css('display', 'flex');
	    }
	});
	$('.file-box').on('change', function(e) {
    	if(e.target.className === 'filestyle') {
      	var files = e.target.files.length;
        var text = files ? 'Файлов: ' +files : 'Загрузить';
      	$(this).find('label').text(text);
      }
    });
    $('.file-form').submit(function(event){
        event.preventDefault();    
        var formData = new FormData($(this)[0]);    
        $.ajax({
                type: "POST",
                url: "/mail.php",
                processData: false,
                contentType: false,
                data: formData
            }).success(function() {
                $('#order-modal .close').click();
                $('.open-tnx').click();
            });
    });
    $('.question-form').submit(function(event){
        event.preventDefault();    
        var formData = new FormData($(this)[0]);    
        $.ajax({
                type: "POST",
                url: "/mail-2.php",
                processData: false,
                contentType: false,
                data: formData
            }).success(function() {
                
                $('.open-tnx').click();
            });
    });
    $('.price-form').submit(function(event){
        event.preventDefault();    
        var formData = new FormData($(this)[0]);    
        $.ajax({
                type: "POST",
                url: "/mail-3.php",
                processData: false,
                contentType: false,
                data: formData
            }).success(function() {
                $('.open-tnx').click();
            });
    });
    $(".phone").mask("+9 (999) 999-99-99");
    for (var suka =  15; suka < 40; suka++) {
        $('.b15 .clients-items div:nth-child('+suka+')').css('display', 'none');
    }
    for (var suka_2 =  11; suka_2 < 17; suka_2++) {
        $('.b15 .clients-items div:nth-child('+suka_2+')').css('border-bottom', 'none');
    }
    $('.b15 .button-block .modal-btn').on('click', function(){
        /*
       $('.b15 .clients-items').css('height', '100%');
       */
       for (var suka1 =  15; suka1 < 40; suka1++) {
        $('.b15 .clients-items div:nth-child('+suka1+')').css('display', 'block');
        }
        for (var suka_22 =  11; suka_22 < 17; suka_22++) {
            $('.b15 .clients-items div:nth-child('+suka_22+')').css('border-bottom', '1px solid #CCDFF0');
        }
       $('.b15 .button-block .modal-btn').css('display', 'block');
       $('.b15 .button-block .modal-btn.show-more').css('display', 'none');
    });
    $('.modal-uslugi .button-block .modal-btn').on('click', function(){
        $('.modal-uslugi .close').click();
    })
});
/*
$(function(){$('[data-toggle="tooltip"]').tooltip();$('[data-toggle="popover"]').popover();});*/

    //   button to top
	$(function () {

		$(window).scroll(function () {
	  
			if ($(this).scrollTop() != 0) {
	  
				$('#toTop').fadeIn();
	  
			} else {
	  
				$('#toTop').fadeOut();
	  
			}
	  
		});
	  
		$('#toTop').click(function () {
	  
			$('body,html').animate({ scrollTop: 0 }, 800);
	  
		});
	  
	  });


	  $(document).ready(function() {

		//E-mail Ajax Send
		$("#form-modal").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function() {
				alert("Спасибо за отправку формы!");
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});
	
	});
