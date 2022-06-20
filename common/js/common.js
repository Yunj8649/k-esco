////// viewport ////////////////////////////////////////////////////////////
function setViewPort() {
	var viewPortName = document.getElementById("viewPort");
	var viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	/* if(1024 >= viewPortWidth && viewPortWidth >= 769){
	viewPortName.setAttribute("content","width=1024, initial-scale=1.0, minimum-scale=1.0, target-densitydpi=medium-dpi");
	}else if(768 >= viewPortWidth && viewPortWidth >= 641){
	viewPortName.setAttribute("content","width=768, initial-scale=1.0, minimum-scale=1.0, target-densitydpi=medium-dpi");
	}else if(640 >= viewPortWidth && viewPortWidth >= 320){ */
	if (640 >= viewPortWidth && viewPortWidth >= 0) {
		viewPortName.setAttribute("content","width=640, target-densitydpi=medium-dpi, shrink-to-fit=no");
	//viewPortName.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi");
	}else {
		viewPortName.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi");
	//viewPortName.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi");
	}
	return false;
}setViewPort();

$(document).ready(function() {
////// 리사이징 ////////////////////////////////////////////////////////////
	$(window).resize(function() {
		//fn_layout(); //common layout
		fn_userNav();
	});

////// common layout ////////////////////////////////////////////////////////////
	// function fn_layout(){
	// 	var winWidth = $( window ).width();
	// 	var winHeight = $( window ).height();
	// 	var h_Height = $('#header').outerHeight();
	// 	var f_Height = $('#footer').outerHeight();
	// 	$('#container').css({'margin':'-' + h_Height + 'px 0 -' + f_Height + 'px'});
	// 	$('#container #contents').css({'padding':h_Height + 'px 0 ' + f_Height + 'px'});
	// 	return false;
	// }fn_layout();

////// function ////////////////////////////////////////////////////////////
	// header
	// $('.depth1>li').on('mouseenter touchstart',function(){
	// 	$(this).find('.depth2').stop().fadeIn();
	// });
	// $('.depth1>li').on('mouseleave touchend',function(){
	// 	$(this).find('.depth2').stop().fadeOut();
	// });

	// gnb ////////////////////////////////////////////////////////////
	$('#gnb .hamburger').click(function() {
		$('#gnb').toggleClass('active');
		$(this).toggleClass('active');
		$('#gnb .gnb_bar').slideToggle();
	});
	$('#gnb .util_bar li.account .ico-account').on('mouseenter touchstart',function() {
		$('#gnb .util_bar li.account .user.desktop').stop().slideDown();
	});
	$('#gnb .util_bar li.account .user.desktop').on('mouseleave touchend',function() {
		$(this).stop().slideUp();
	});
	function fn_userNav() {
		// pc
		if ($(window).outerWidth() > 768) {
			// gnb 높이설정
			$('#gnb .gnb_bar').css({'display':'block','height':'auto'});

			// 레몬 아이콘에 홈 링크 해제
			//if( $('#userNav .userName a').length !== 0 ){
			//	$('#userNav .userName .ico-lemon').unwrap();
			//}
		}else if ($(window).outerWidth() <= 768) {
			$('#gnb, #gnb .hamburger').removeClass('active');
			// gnb 높이설정
			var gnbBar_height = ($(window).height() - 100) * 0.7;
			$('#gnb .gnb_bar').css({'display':'none','max-height': gnbBar_height + 'px'});

			// 레몬 아이콘에 홈 링크걸기
			//if ( $('#userNav .userName a').length == 0) {
			//	$('#userNav .userName .ico-lemon').wrap('<a href="index.html" />');
			//}
		}
	}fn_userNav();

	// iCheck ////////////////////////////////////////////////////////////
	// checkbox
	$('.inp_chk, .inp_rad').iCheck({
		checkboxClass: 'icheckbox_dft',
		radioClass: 'iradio_dft'
	});
	$('.inp_chk.big').iCheck({
		checkboxClass: 'icheckbox_dft big'
	});
	$('.inp_chk.y').iCheck({
		checkboxClass: 'icheckbox_dft y'
	});
	// radio 여 or 남
	$('.inp_rad_fm').iCheck({
		radioClass: 'inp_rad_fm'
	});
	$('.inp_rad_f').iCheck({
		radioClass: 'inp_rad_f'
	});
	$('.inp_rad_fm').prepend('<span>여</span>');
	$('.inp_rad_f').prepend('<span>남</span>');

	// selectric ////////////////////////////////////////////////////////////
	$('.sel').selectric();

	// accordian ////////////////////////////////////////////////////////////
	$('.accordion .acc_con .tit').click(function() {
		// if (!$(this).closest('.acc_con').hasClass('on')) { // 닫혀있는 요소 선택하면
		// 	$(this).closest('.accordion').find('.acc_con.on .con').stop().slideUp();
		// 	$(this).closest('.acc_con').siblings().removeClass('on');
		// 	$(this).closest('.acc_con').addClass('on');
		// 	$(this).closest('.acc_con.on').find('.con').stop().slideToggle();
		// }else if ($(this).closest('.acc_con').hasClass('on')) { // 이미 열려있으면
		// 	$(this).closest('.acc_con').removeClass('on');
		// 	$(this).closest('.acc_con').find('.con').stop().slideToggle();
		// }
		if (!$(this).closest('.acc_con').hasClass('on')) { // 닫혀있는 요소 선택하면
			$(this).closest('.acc_con').addClass('on');
			$(this).closest('.acc_con').find('.con').stop().slideDown();
		}else if ($(this).closest('.acc_con').hasClass('on')) { // 이미 열려있으면
			$(this).closest('.acc_con').removeClass('on');
			$(this).closest('.acc_con').find('.con').stop().slideUp();
		}
	});

	//a tag double tap issue on ios
	// $("#userNav a, #footer a, .main .products .lst_prd a, .login .box1 .btn_wrap a, .prd_all .lst_prd a").on("click touchend", function(e) {
	$("#userNav a, #footer a, .login .box1 .btn_wrap a, .mypage #aside .lst_menu>li>a").on("click touchend", function(e) {
		var el = $(this);
		var link = el.attr("href");
		window.location = link;
	});
	
	// 팝업 버튼 호버시 라인효과
	$('.bPop.type01 .bot .btn').on('mouseenter touchstart', function(){
		$(this).parent().prev().addClass('active');
	});
	$('.bPop.type01 .bot .btn').on('mouseleave touchend', function(){
		$(this).parent().prev().removeClass('active');
	});

	// 버튼 호버효과
	$('[class^="btn"]').on('mouseenter touchstart', function() {
		$(this).addClass('hover');
	});
	$('[class^="btn"]').on('mouseleave touchend', function() {
		$(this).removeClass('hover');
	});
});


// tab ////////////////////////////////////////////////////////////
function fn_tab(e,tabNum) {
	$(e).siblings().removeClass('on')
	$(e).addClass('on');
	$(e).closest('.tab_wrap').find('.tab_con>div').removeClass('on');
	$(e).closest('.tab_wrap').find('.tab_con .'+tabNum).addClass('on');
	return false;
}

// scroll top ////////////////////////////////////////////////////////////
function fn_scrollTop() {
	$('html, body').stop().animate({ scrollTop : 0 }, 800 );
	return false;
}