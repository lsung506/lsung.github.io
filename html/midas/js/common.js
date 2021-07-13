$(function(){

    $(".menu").on("click", function(){
        $("body").addClass("action");
        $('header nav .menuBox').show().animate({
            bottom:0
        },function(){
            $('.close').show();          
        });   
    }); 

    $('.close').on('click', function(){
        $("body").removeClass("action");
        $('header nav .menuBox,.close').hide();     
        $('header nav .menuBox').show().animate({
            bottom: '-' + 100 + '%'
        });  
    });

    $('.topBtn').bind('click', function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 1200, "easeOutExpo")
    });

    $(".topText").stop().animate({
        "bottom" : "0",
        "opacity" : "1"
    }, 300);
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 0) {
            $("main .content1 .formBox").stop().animate({
                "bottom" : "0",
                "opacity" : "1"
            }, 300);
        }
        if ($(this).scrollTop() >= Math.ceil($('.content2').offset().top - 700)) {
            $("main .content2 h4").stop().animate({
                "bottom" : "0",
                "opacity" : "1"
            }, 300, function() {
                $("main .content2 p.globalText").stop().animate({
                    "bottom" : "0",
                    "opacity" : "1"
                }, 500, function() {
                    $("main .content2 ul li").stop().animate({
                        "bottom" : "0",
                        "opacity" : "1"
                    }, 500)
                });                    
            });
        } if ($(this).scrollTop() >= Math.ceil($('main .content2 div:nth-child(2)').offset().top - 700)) {
            $("main .content2 div:nth-child(2) strong,main .content2 div:nth-child(2) a").stop().animate({
                "left" : "0",
                "opacity" : "1"
            }, 500)
        }
    });
   
    $(".select").each(function(i) {
		$(this).find(".s_default").click(function(e) {
			e.preventDefault();
			$(".select:not(:eq(" + i + "))").removeClass("show");
			$(this).parent().toggleClass("show");
		})
	});
	$(".select li a").click(function(e) {
		e.preventDefault();
		$(this).parents(".select").removeClass("show").find(".s_default").text($(this).text());
		
	}).focusin(function() {
		$(this).parents(".seelct").find(".s_default").text($(this).text());
	}).keydown(function(event) {
		if (event.keyCode == 9) {
			event.preventDefault();
			$(this).parents("ul").prev("a").focus();
			$(this).parents(".select").removeClass("show");
		}
	});

    $("label").on('click',function(){
        if($(this).prev("input").is(":checked")==true){     
            $(this).removeClass("action");  
         } else {        
            $(this).addClass("action");     
         }     
     });


    $(window).resize(function(){
        navMenu();
    });
     function navMenu(){
        if($(window).width() > 1279){
            $("body").removeClass("action");
            $('header nav .menuBox,.close').hide();     
            $('header nav .menuBox').show().animate({
                bottom: '-' + 100 + '%'
            });
        } 
    }
});