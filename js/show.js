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
function show(id,className){
	var oBtn1=document.getElementById(id);
	var oDiv=oBtn1.getElementsByTagName('div')[0];
	
	var timer = null;
	oBtn1.onmouseover = function(){
		clearTimeout(timer);
		oDiv.style.display = "block";
		
	};
	
	oBtn1.onmouseout = function(){
		timer = setTimeout(function(){
			oDiv.style.display = "none";
		},300);
	};

		
};
