// JavaScript Document
function findInArr(arr,n){
	
	for(var i = 0; i < arr.length; i++){
		
		if(arr[i] == n){
			return true;
		}
		
	}
	return false;	
}

function getByClass(oParent,sClass){
	
	var aEle = oParent.getElementsByTagName("*");
	
	var ret = [];
	for(var i = 0; i < aEle.length; i++){

		var aTmp = aEle[i].className.split(" ");//["box","fl"]
		if(findInArr(aTmp,sClass) ){
			ret.push(aEle[i]);
		}
	}
	
	return ret;
}


window.onload=function(){
	/*登录注册*/
	var zhuce=document.getElementById('zhuce');
	var denglu=document.getElementById('denglu');
	var zcmain=document.getElementById('zhuce-main');
	var dlmain=document.getElementById('denglu-main');
	var liji=document.getElementById('liji');
	var ljzc=document.getElementById('ljzc');
	
		zhuce.onclick=function(){
			$(dlmain).css('display','none')
			if(zcmain.style.display=="block"){
			   zcmain.style.display="none";	
			}else{
				zcmain.style.display="block";					
			}
		};
		denglu.onclick=function(){
			$(zcmain).css('display','none')

			if(dlmain.style.display=="block"){
			   dlmain.style.display="none";	
			}else{
				dlmain.style.display="block";					
			}
		};
		liji.onclick=function(){
			dlmain.style.display="none";		
		};
		ljzc.onclick=function(){
			zcmain.style.display="none";		
		};
	/*登录注册*/
	
	/*index list*/
	function hoverDir(obj,ev){
		var w=obj.offsetWidth;
		var h=obj.offsetHeight;
		
		var x=obj.offsetLeft+w/2-ev.clientX;
		var y=obj.offsetTop+h/2-ev.clientY;
		
		return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
	}
	var oUl=document.getElementById('ul1');
	var aLi=oUl.children;
	var aSpan=oUl.getElementsByTagName('span');
	
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(ev){
			var oEvent=ev || event;
			var n=hoverDir(this,oEvent);
			
			var from=oEvent.fromElement || oEvent.relatedTarget;
			if(this.contains(from))return;
			
			var oSpan=aSpan[this.index];
			
			switch(n){
				case 0:
					oSpan.style.left='284px';
					oSpan.style.top=0;
					break;
				case 1:
					oSpan.style.left=0;
					oSpan.style.top='340px';
					
					break;
				case 2:
					oSpan.style.left='-284px';
					oSpan.style.top=0;
					break;
				case 3:
					oSpan.style.left=0;
					oSpan.style.top='-340px';
					break;
			}
			move(oSpan,{left:0, top:0});
		};
		
		aLi[i].onmouseout=function(ev){
			var oEvent=ev || event;
			var n=hoverDir(this,oEvent);
			var to=oEvent.toElement || oEvent.relatedTarget;
			if(this.contains(to))return;
			
			var oSpan=aSpan[this.index];
			switch(n){
				case 0:
					move(oSpan,{left:284,top:0});
					break;
				case 1:
					move(oSpan,{left:0,top:340});
					alert(1);
					break;
				case 2:
					move(oSpan,{left:-284,top:0});
					break;
				case 3:
					move(oSpan,{left:0,top:-340});
					break;
			}
		};
	}
	/*list*/

		
};




