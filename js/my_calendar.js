// JavaScript Document

function makeUpCalendar(){
	var oDiv = document.createElement('div');
	oDiv.className="my_calendar";
	oDiv.innerHTML='<a href="javascript:;" class="prev">&lt;</a>\
	<span>2014年12月30日</span>\
	<a href="javascript:;" class="next">&gt;</a>\
	<ol>\
		<li>一</li>\
		<li>二</li>\
		<li>三</li>\
		<li>四</li>\
		<li>五</li>\
		<li class="week_end">六</li>\
		<li class="week_end">日</li>\
	</ol>\
	<ul></ul>';
	document.body.appendChild(oDiv);
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var oS = oDiv.getElementsByTagName('span')[0];
	var aLi = oUl.children;
	var oPrev = oDiv.children[0];
	var oNext = oDiv.children[2];
	var now =0;
	function getCanlendar(){
		var oDate = new Date();
		oDate.setMonth(oDate.getMonth()+now);
		oS.innerHTML=oDate.getFullYear()+"年"+(oDate.getMonth()+1)+"月";
		oUl.innerHTML="";
		var oDate = new Date();
		oDate.setMonth(oDate.getMonth()+now);
		oDate.setDate(1);
		var w = oDate.getDay();
		if(w==0){
			w=7;
		}
		w--;
		for(var i=0;i<w;i++){
			var oLi = document.createElement('li');
			oUl.appendChild(oLi);
		}
		var oDate = new Date();
		oDate.setMonth(oDate.getMonth()+now);
		oDate.setMonth(oDate.getMonth()+1,0);
		var n = oDate.getDate();
		for(var i=0;i<n;i++){
			var oLi = document.createElement('li');
			oLi.innerHTML=i+1;
			oUl.appendChild(oLi);	
		}
		
		if(now<0){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='past';	
			}
		}else if(now==0){
			var oDate = new Date();
			oDate.setMonth(oDate.getMonth()+now);
			var today = oDate.getDate();
			for(var i=0;i<aLi.length;i++){
				var n = parseInt(aLi[i].innerHTML);
				if(n<today){
					aLi[i].className='past';
				}else if(n==today){
					aLi[i].className='today';
					aLi[i].innerHTML='今天';
				}
			}
		}
	}
	getCanlendar();
	oPrev.onclick=function(){
		now--;
		getCanlendar();
	};
	oNext.onclick=function(){
		now++;
		getCanlendar();
	};
	
};












