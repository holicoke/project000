$(function(){

//퀵버튼, 스크롤 리셋버튼,
	$("#quick").hide();

	$(window).scroll(function(){
		if($(this).scrollTop() > 100) {
			$("#quick").show();
		}
		else{
			$("#quick").hide();
		}
	})
	$("#quick .quick_icon").click(function(){
		$(window).css({"top" : 0});
	})


//메뉴
	$(".tab").click(function(){
		$("#gnb").addClass("active");
	})
	$(".close").click(function(){
		$("#gnb").removeClass("active");
	})

	$("#gnb > ul > li").click(function(e){
		e.preventDefault()
		$("#gnb > ul > li").removeClass("active");
		$(this).addClass("active");
		$(".desc").removeClass("active"); // 2019-10-31
		$(this).find(".desc").addClass("active"); // 2019-10-31
	})
	$("#gnb > ul > li > a").click(function(){
		$("#gnb > ul > li > a").removeClass("active");
		$(this).addClass("active");
	})



//키비주얼
	var n=0;
	$("#start .keyvisual li").eq(n).addClass("active");
	setInterval(function(){
		if(n < 4) {
			n=n+1;
		}
		else {
			n=0;
		}
		$("#start .keyvisual li").removeClass("active");
		$("#start .keyvisual li").eq(n).addClass("active");
	}, 4000)

//footer 비주얼
	var x=0;
	var y=0;
	var id=setInterval(function(){
		moving()
	},6000)

	function moving(){
		x++;
		y=-1*$(window).width()*x;
		$("#photo ul").animate({left:y}, 400, function(){
			if(x == 2){
				x=0
				y=0
				$("#photo ul").animate({left:y},0)
			}
		})
	}

	$(window).resize(function(){
		$("#photo").css({"height" : $(window).height()})
	})

})
