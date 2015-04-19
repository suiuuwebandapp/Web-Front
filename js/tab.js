// JavaScript Document
function tab(id){
	var oBox=document.getElementById(id);	
	var oUl =oBox.getElementsByTagName('ul')[0];
	var oBtn=oUl.getElementsByTagName('li');
	var oDiv=oBox.getElementsByTagName('div');
	
	for(var i=0;i<oBtn.length;i++){
		(function(index){
			oBtn[i].onmouseover=function(){
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

