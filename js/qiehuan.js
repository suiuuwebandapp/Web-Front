//function findInArr(arr,n){
//	
//	for(var i = 0; i < arr.length; i++){
//		
//		if(arr[i] == n){
//			return true;
//		}
//		
//	}
//	return false;	
//}
//
//function getByClass(oParent,sClass){
//	
//	var aEle = oParent.getElementsByTagName("*");
//	
//	var ret = [];
//	for(var i = 0; i < aEle.length; i++){
//
//		var aTmp = aEle[i].className.split(" ");//["box","fl"]
//		if(findInArr(aTmp,sClass) ){
//			ret.push(aEle[i]);
//		}
//	}
//	
//	return ret;
//}
//function tab(id,className){
//	var oBox=document.getElementById(id);	
//	var oUl =oBox.getElementsByTagName('ul')[0];
//	var oBtn=oUl.getElementsByTagName('li');
//	var oDiv=getByClass(oBox,className);
//	
//	for(var i=0;i<oBtn.length;i++){
//		(function(index){
//			oBtn[i].onmouseover=function(){
//				for(var i=0;i<oBtn.length;i++){
//				
//					oBtn[i].className='';
//					oDiv[i].style.display='none';	
//				}	
//				this.className='active';
//				oDiv[index].style.display='block';
//			}	
//		})(i);
//	}	
//};
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
function xcbjtab(id){
	var xcbj=document.getElementById(id);
	var oUl=document.getElementById('xcbj-btn');
	var oBtn=oUl.children;
	var oDiv=getByClass(bj,'w660');
	var oPrev=document.getElementById('xcbj-prev');
	var oNext=document.getElementById('xcbj-next');
//	
//	for(var i=0;i<oBtn.length;i++){
//		oBtn[i].index=i;
//		oBtn[i].onclick=function(){
//			for(var i=0;i<oBtn.length;i++){
//				oBtn[i].className="";
//				oDiv[i].style.display="";
//			};	
//				this.className="active1";
//				oDiv[this.index].style.display="block";
//		};	
//	};
	var iNow=0;
	var left=0;
	xcbj.style.width=oDiv[0].offsetWidth*oDiv.length+"px";
	
	for(var i=0;i<oBtn.length;i++){
		oBtn[i].index=i;
		oBtn[i].onmouseover=function(){
			iNow=this.index;
			tab();
			if(iNow>0){
				move(oPrev,{opacity:1})
				move(oNext,{opacity:1});	
			}else{
				move(oPrev,{opacity:0});	
			}
			if(iNow==oBtn.length-1){
				move(oNext,{opacity:0});	
				move(oPrev,{opacity:1});	
			}
		}	
	}
	function tab(){
		for(var i=0;i<oBtn.length;i++){
			oBtn[i].className='';	
		}	
		oBtn[iNow].className='active1';
		move(xcbj,{left:-oDiv[0].offsetWidth*iNow});
	};
	oPrev.onclick=function(){
		if(iNow>0){
			iNow--;	
		}else{
			iNow=oBtn.length-1;
		}
		tab();
		if(iNow>0){
			move(oPrev,{opacity:1});
		}else{
			move(oPrev,{opacity:0});	
		}
		if(iNow==0){
			move(oNext,{opacity:1});	
		}
	};
	oNext.onclick=next;
	function next(){
		iNow++;
		if(iNow==oBtn.length){
			iNow=0;
		}
		tab();
		if(iNow>0){
			move(oPrev,{opacity:1});
		}else if(iNow==oBtn.length-1){
			move(oNext,{opacity:0});
		}
	}

};