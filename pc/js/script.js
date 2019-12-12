$(function(){


//upper
	$(".upper_inner .location .page a").focusin(function(){
		$(this).parent().addClass("active")
	});
	$(".upper_inner .location .page a").focusout(function(){
		$(".upper_inner .location .page").removeClass("active");
	});



//메뉴바
	$("#gnb > ul > li").hover(
		function(){
			$("#header .menu").addClass("active")
		},
		function(){
			$("#header .menu").removeClass("active")
		}
	);
	$("#gnb > ul > li").focusin(function(){
		$("#header .menu").addClass("active")
		$(this).addClass("active")
	});
	$("#gnb > ul > li").focusout(function(){
		$("#header .menu").removeClass("active");
		$("#gnb > ul > li").removeClass("active")
	});


//키비주얼
	var n=0;
	var m=0;
	var id=setInterval(function(){
		moving();
	}, 6000);

	function moving(){
		n++;
		m=-1*$(window).width()*n;
		$(".visual").animate({left:m}, 400, function(){
			if(n == 5){
				n=0
				m=0
				$(".visual").animate({left : m},0)
			}

			$(".keyvisual .controlls li").removeClass("active");
			$(".keyvisual .controlls li").eq(n).addClass("active");
		});
	}
	$(".keyvisual .controlls li").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(function(){
				moving();
			}, 6000)
		}
	);
	$(".keyvisual .controlls li").click(function(e){
		e.preventDefault();
		$(".keyvisual .controlls li").removeClass("active");
		$(this).addClass("active");
		n=$(this).index();
		m=-1*$(window).width()*n;
		$(".visual").animate({left:m}, 400);
	});

//공지사항+이벤트
	$(".notice_title h3").find(".att").addClass("active")
	$("#content .table1 .notice .att_data").addClass("active")

	$(".notice_title h3 a").click(function(e){
		e.preventDefault()
		$(".notice_title h3 a").removeClass("active")
		$(this).addClass("active")


		if($(".notice_title .att").hasClass("active") == true){
			$("#content .table1 .notice .att_data").addClass("active")
			$("#content .table1 .notice .event_data").removeClass("active")
		}
		else{
			$("#content .table1 .notice .att_data").removeClass("active")
			$("#content .table1 .notice .event_data").addClass("active")
		}
	})


//main hover
	$("#content .table1 div[class^=main] a").focusin(function(){
		$(this).parent().addClass("active")
	});
	$("#content .table1 div[class^=main] a").focusout(function(){
		$("#content .table1 div[class^=main]").removeClass("active")
	});


//이벤트+후기
	var c=0;
	$(".main5_banner li").eq(0).animate({opacity:1},400)
	$(".main5_controlls li").click(function(e){
		e.preventDefault()
		c++
		if(c < 1){
			$(".main5_controlls li").removeClass("active")
			$(".main5_controlls li").eq(c).addClass("active")

			$(".main5_banner li").animate({opacity:0},0)
			$(".main5_banner li").eq(c).animate({opacity:1},400)
		}
		else if(c < 2){
			$(".main5_controlls li").removeClass("active")
			$(".main5_controlls li").eq(c).addClass("active")

			$(".main5_banner li").animate({opacity:0},0)
			$(".main5_banner li").eq(c).animate({opacity:1},400)
		}
		else if(c < 3){
			$(".main5_controlls li").removeClass("active")
			$(".main5_controlls li").eq(c).addClass("active")

			$(".main5_banner li").animate({opacity:0},0)
			$(".main5_banner li").eq(c).animate({opacity:1},400)
		}
		else{
			c=0
			$(".main5_controlls li").removeClass("active")
			$(".main5_controlls li").eq(c).addClass("active")

			$(".main5_banner li").animate({opacity:0},0)
			$(".main5_banner li").eq(c).animate({opacity:1},400)
		}
	})



//footer logo
	var w=200;
	var amount=0;

	$(".back").click(function(e){
		e.preventDefault();
		leftMoving();
	})
	$(".next").click(function(e){
		e.preventDefault();
		rightMoving();
	})

	function leftMoving(){
		amount-=w;
		$(".logo_list ul").animate({left:amount}, 400, function(){
			$(this).append($(".logo_list ul li:first-child"))
			amount+=w;
			$(this).css({left:amount})
		})
	}
	function rightMoving(){
		console.log("right moving!!");
		$(".logo_list ul").prepend($(".logo_list ul li:last-child"))
		amount-=w;
		$(".logo_list ul").css({left:amount})
		amount+=w;
		$(".logo_list ul").animate({left:amount}, 400); // 2019-12-06
	}
})
