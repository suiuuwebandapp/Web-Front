// JavaScript Document
(function(){
var added=false;

window.makeUpSelect = function (name){
	var oSel=document.getElementsByName(name)[0];
	var oDiv = document.createElement('div');
	oDiv.className='my_select';
	var oS = document.createElement('span');
	oS.innerHTML=oSel.options[oSel.selectedIndex].text;
	oDiv.appendChild(oS);
	var oUl=document.createElement('ul');
	oDiv.appendChild(oUl);
	for(var i=0;i<oSel.options.length;i++){
		var oLi = document.createElement('li');
		oLi.innerHTML=oSel.options[i].text;
		oUl.appendChild(oLi);
		(function(index){
			oLi.onclick=function(){
				oS.innerHTML=this.innerHTML;
				oSel.selectedIndex=index;
				oUl.style.display="none";
			};
		})(i);
	}
	oSel.parentNode.insertBefore(oDiv,oSel);
	oS.onclick=function(){
		oUl.style.display="block";
		oUl.style.zIndex=5;
	};
	oSel.style.display='none';
	
	if(added==true)return;
	added=true;
	
	var oL = document.createElement('link');
	oL.rel="stylesheet";
	oL.href="style/my_select.css";
	var oH = document.getElementsByTagName('head')[0];
	oH.appendChild(oL);
	
};
})();





