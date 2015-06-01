// JavaScript Document




/*-----checkUI-----*/

$(function(){
		//$('input[type=checkbox]').prop('checked','')
		$('input[type=checkbox]').click(function(e) {
			if( $(this).prop("checked")){
				$(this).next('label').css('background-position','0 -157px')
				
			}else{
				$(this).next('label').css('background-position','0 -102px')
			}
			
        });
})


/*-----Radio--UI-----*/

$(function(){
		//$('input[type=radio]').prop('checked','')
		$('input[type=radio]').click(function(e) {
			if( $(this).prop("checked")){
				$(this).next('label').css('background-position','0 -47px').siblings('label').css('background-position','0 10px')
				
			}else{
				$(this).next('label').css('background-position','0 10px')
			}
			
        });
})


/*----导航效果----*/


$(function(){
	$(window).scroll(function(e) {
		var h1=$(window).scrollTop();
		if(h1>10){
			$('.nav-out,.header').css('box-shadow','1px 3px 5px rgba(0,0,0,0.6)')
		}else{
			$('.nav-out,.header').css('box-shadow','none')
		}
        
    });

})

/*----nav-index登录、注册弹框-----*/

$(function(){
	$('.nav-out .nav-right ol .zhuces #zhuce').click(function(e) {
        $('.myLogins .a1').addClass('active');
        $('.myLogins .a2,.myLogins .a3').removeClass('active');
        $('.mask,.myLogins').toggle();
        $('.myLogins .box1').css('display','block').siblings().css('display','none');
		
    });
	$('.nav-out .nav-right ol .logins #denglu').click(function(e) {
        $('.myLogins .a2').addClass('active');
        $('.myLogins .a1,.myLogins .a3').removeClass('active');
        $('.mask,.myLogins').toggle();
        $('.myLogins .box2').css('display','block').siblings().css('display','none');
    });

})


/*---header--top 搜索-----*/
$(function(){
	$('.header-right .search-btn').click(function(e) {
		if($('.header-right .search').width()==0){
			$('.header-right .search input.text-xqy').animate({width:135},500);
			$('.header-right .search').animate({width:155},500);
        }else{
			$('.header-right .search,.header-right .search input.text-xqy').animate({width:0},500);
        }
    });



})
/*---nav-top 搜索-----*/
$(function(){
	$('.nav-right .search-btn').click(function(e) {
		if($('.nav-right .search').width()==0){
			$('.nav-right .search input.text-xqy').animate({width:135},500);
			$('.nav-right .search').animate({width:155},500);
        }else{
			$('.nav-right .search,.nav-right .search input.text-xqy').animate({width:0},500);
        }
    });



})

/*-----header弹框效果-----*/
$(function(){
	$('.header-right .xitong>a').click(function(e) {
        $('.xit-sz').toggle();
        $('.header-right .name').children('.my-suiuu').css('display','none');
    });

	$('.header-right .name>a').click(function(e) {
        $('.my-suiuu').toggle();
        $('.header-right .xitong').children('.xit-sz').css('display','none');
    });



})

/*-----随游详情页banner轮播----*/
$(function(){
	var num=0;
	var timer=null;
	var maxnum=$('.web-banner #banner li').size()-1;

	function fn(){
		
		num++;
		if(num>maxnum){num=0}
		$('.web-banner ul').stop().animate({left:num*-830},1000)
		$('.web-banner ol').stop().animate({left:num*-195},1000)
	}
	timer=setInterval(fn,2000)
	$('.web-banner ul li,.web-banner ol li').hover(function(e) {
        clearInterval(timer)
		
    },function(){
		clearInterval(timer)
    	timer=setInterval(fn,2000)
    
    });
	
	$('.web-banner .nex').click(function(e) {
        num++;
		if(num>maxnum){num=0}
		$('.web-banner ul').stop().animate({left:num*-830},500)
		$('.web-banner ol').stop().animate({left:num*-195},500)

    });
	$('.web-banner .pre').click(function(e) {
        num--;
		if(num<0){num=maxnum}
		$('.web-banner ul').stop().animate({left:num*-830},500)
		$('.web-banner ol').stop().animate({left:num*-195},500)
    });
	$('.web-banner .nex,.web-banner .pre').hover(function(e) {
		clearInterval(timer)
    });
	
	$('.web-banner .prev,.web-banner .next').hover(function(e) {
        clearInterval(timer)
    },function(){
		clearInterval(timer)
		timer=setInterval(fn,2000)
	});
	
	
	
})



/*-----专栏qq分享-----*/
$(function(){
	$('#fenxiang').click(function(e) {
        $('#other-line').toggle()
    });

})




/*-----随友个人中心私信对话框-----*/
$(function(){
	$('.sycon .myEmail .emailCon .left ul li').click(function(e) {
        $('.sycon .myEmail .emailCon .right').toggle();
    });

})


/*-----随游-类型选择----*/
/*$(function(){
	$('.sylx .sylx-xiangxi .p2 span').click(function(e) {
		if($(this).hasClass('active')){
			 $(this).removeClass('active');
			}else{
			 $(this).addClass('active');
		}
		
    });

})
*/

/*-----完成页满屏显示----*/
$(function(){
	var h1=$(window).height();
	var h3=$('#footer-out').height();
	var myh=h1-h3-40-110;
	$('#finish').outerHeight(myh+'px')
	$('.forgotPaw').outerHeight(myh+'px')
	$('.syRegisterT').outerHeight(myh+'px')
	
	
})
/*-----关闭浮层---*/
$(function(){
	var h=$(window).height();
	var w=$(window).width();
	$('.mask').height(h).width(w);
	$('.mask').click(function(e) {
        $(this).css('display','none')
        $('.screens').css('display','none')
    });
	

})

/*-----弹出浮层-----*/
/*$(function(){ 
	$('.tanchuBtn,.tanchu-list ul li').click(function(e) {
        $('.mask,.tanchu-main').css('display','block')
    });

})

*/










