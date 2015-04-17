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

function syddtab(id,sClass){
	var oTab=document.getElementById(id);
	var oUl =oTab.getElementsByTagName('ul')[0];
	var oBtn=oUl.getElementsByTagName('li');
	var oDiv=getByClass(oTab,sClass);
	
	for(var i=0;i<oBtn.length;i++){
		oBtn[i].index=i;
		oBtn[i].onclick=function(){
			for(var i=0;i<oBtn.length;i++){
				oBtn[i].className="";
				oDiv[i].style.display="none";	
			}	
			
			this.className="active-sydd";
			oDiv[this.index].style.display="block";
		}	
	}
};