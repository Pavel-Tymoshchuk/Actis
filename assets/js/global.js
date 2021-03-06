$().ready(function(){
    ininMainBanner();
    ininNewsSlider();
    
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