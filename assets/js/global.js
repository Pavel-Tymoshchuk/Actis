$().ready(function(){
    ininMainBanner();
    ininNewsSlider();
    showGallery();
    showVideo();
    
    $("body").on("click", ".js-drop > button", function(){
        $(this).closest(".js-drop").toggleClass("active");
        return false;
    });

    $(document).mouseup(function(e){
        $(".js-drop.active").each(function(){
            var el = $(this);
            if(!el.is(e.target) && el.has(e.target).length === 0){
                el.removeClass("active");
            }
        });
    });

    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $(".js-drop.active").removeClass("active");
        }
    });
});

function ininMainBanner() {
	$('.js-main-banner:not(.inited)').each(function(){
        var el = $(this);
        el.addClass("inited");
        
        var mySwiperMainBanner = new Swiper('.js-main-banner', {
            navigation: {
                nextEl: '.js-next',
                prevEl: '.js-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
		});
    });
}

function ininNewsSlider() {
	$('.js-news-slider:not(.inited)').each(function(){
        var el = $(this);
        el.addClass("inited");
        
        var mySwiperMainBanner = new Swiper('.js-news-slider', {
            slidesPerView: 3,
            spaceBetween: 60,
            navigation: {
                nextEl: '.js-next',
                prevEl: '.js-prev',
            },
            scrollbar: {
			    el: '.swiper-scrollbar',
			    draggable: true,
		  	},
		});
    });
}

function showGallery() {
	$.fancybox.defaults.hash = false;
    $('[data-fancybox="images"]').fancybox({
    	buttons: [
		    "close"
	  	],
	 //  	beforeShow: function() {
		// 	$("html").addClass('overflow');
		// },
		// beforeClose: function(){
		// 	$("html").removeClass('overflow');
		// },
	});
}

function showVideo() {
    $.fancybox.defaults.hash = false;
    var el = $('[data-fancybox="video"]').fancybox({
        arrows: false,
        infobar: false,
        touch: false,
        media : {
            youtube : {
                params : {
                    showinfo: 0,
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    loop: 0,
                    vq: "hd1080",
                    // listType: "user_uploads",
                    enablejsapi: 0,
                },
                url: "https://www.youtube.com/embed/$4",
            }
        },
        iframe : {
            preload : false,
            attr: {
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          }
        },
        buttons: [
            "close"
        ],
     	beforeShow: function() {
			$("html").addClass('overflow');
		},
		beforeClose: function(){
			$("html").removeClass('overflow');
		},
    });
}