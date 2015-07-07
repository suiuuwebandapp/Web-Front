// JavaScript Document


/*-----------随-游-订单---------------*/

$(function(){
	$('.sy_order .box .pay').click(function(e) {
        $('.order_pay').animate({height:'6.5rem'},500);
    });
	$('.order_pay .btn').click(function(e) {
        $('.order_pay').animate({height:'0'},500);
    });

})

/*-----------浮层--------------*/
$(function(){
	var h=$(window).height();
	var w=$(window).width();
	$('.mask').height(h).width(w);
})


/*-----------w_suiyou 随游---------------*/

$(function(){
	$('.w_suiyou .selects .a1').click(function(e) {
        $('.syprop01').css('display','block');
        $('.syprop02,.syprop03').css('display','none');
    });
	$('.w_suiyou .selects .a2').click(function(e) {
        $('.syprop02').css('display','block');
        $('.syprop01,.syprop03').css('display','none');
    });
	$('.w_suiyou .selects .a3').click(function(e) {
        $('.syprop03').css('display','block');
        $('.syprop01,.syprop02').css('display','none');
    });

})



















