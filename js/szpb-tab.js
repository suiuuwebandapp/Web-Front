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
function tab(id,className){
	var oBox=document.getElementById(id);	
	var oUl =oBox.getElementsByTagName('ul')[0];
	var oBtn=oUl.getElementsByTagName('li');
	var oDiv=getByClass(oBox,className);
	
	for(var i=0;i<oBtn.length;i++){
		(function(index){
			oBtn[i].onclick=function(){
				for(var i=0;i<oBtn.length;i++){
				
					oBtn[i].className='';
					oDiv[i].style.display='none';	
				}	
				this.className='active';
				oDiv[index].style.display='block';
			}	
		})(i);
	}	
};