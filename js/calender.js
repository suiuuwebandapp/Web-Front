
(function(){
window.myCalender = function(name){
	var oText = document.getElementsByName(name)[0];
	
	oText.onfocus = function(){
		oDiv.style.display = "block";
		oDiv.style.left = oText.offsetLeft + "px";
		oDiv.style.top  = oText.offsetTop + oText.offsetHeight + "px";
	};

	var oDiv = document.createElement("div");
	oDiv.className = "calender";
	document.body.appendChild(oDiv);
	
	var oBtnPrev = document.createElement("a");
	oBtnPrev.className = "prev";
	oBtnPrev.href = "javascript:;";
	oBtnPrev.innerHTML = "&lt;&lt;";
	oDiv.appendChild(oBtnPrev);
	
	var oBtnNext = document.createElement("a");
	oBtnNext.className = "next";
	oBtnNext.href = "javascript:;";
	oBtnNext.innerHTML = "&gt;&gt;";
	oDiv.appendChild(oBtnNext);
	
	var oSpan = document.createElement("span");
	oDiv.appendChild(oSpan);
	
	
	var oOl   = document.createElement("ol");
	oOl.innerHTML = '<li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li class="week_end">六</li><li class="week_end">日</li>';
	oDiv.appendChild(oOl);
	
	var oUl   = document.createElement("ul");
	oDiv.appendChild(oUl);

	var iNow = 0;
	oBtnPrev.onclick = function(){
		iNow--;
		refresh();
			
	};
	
	oBtnNext.onclick = function(){
		iNow++;
		refresh();
			
	};
	
	refresh();
	function refresh(){
		oUl.innerHTML = "";
		var oDate = new Date();
		oDate.setMonth(oDate.getMonth() + iNow);
		oSpan.innerHTML = oDate.getFullYear()+"年"+(oDate.getMonth()+1)+"月";
		
		//补空格
		var oDate = new Date();
		oDate.setMonth(oDate.getMonth() + iNow);
		oDate.setDate(1);
		var day = oDate.getDay();
		if(day == 0){
			day = 7;
		}
		day--;
		for(var i = 1; i <= day; i++){
			var oLi = document.createElement("li");
			oUl.appendChild(oLi);
		}

		//创建li
		var oDate = new Date();
		oDate.setMonth(oDate.getMonth() + iNow);
		oDate.setDate(1);
		oDate.setMonth(oDate.getMonth() + 1);
		oDate.setDate(0);
		var n = oDate.getDate();
		
		var oDate = new Date();
		oDate.setMonth(oDate.getMonth() + iNow);
		var today = oDate.getDate();
		
		
		for(var i = 1; i <= n; i++){
			var oLi = document.createElement("li");
			oLi.innerHTML = i;
			oUl.appendChild(oLi);
			
			if(iNow < 0){
				oLi.className = "past";
			} else if(iNow == 0){
				if(i < today){
					oLi.className = "past";
				} else if(i == today){
					oLi.className = "today";
				}
			}
			oLi.onclick = function(){
				
				var oDate = new Date();
				oDate.setMonth(oDate.getMonth() + iNow);

				oText.value = oDate.getFullYear()+"-"+(oDate.getMonth()+1)+"-" + this.innerHTML;
				oDiv.style.display = "none";
			};
		}
		
		
		//变红
		for(var i = 0; i < oUl.children.length; i++){
			
			if(oUl.children[i].className == ""){
	
				if(i%7 == 5 || i%7 == 6){
					oUl.children[i].className = "week_end";
				}
			}
		}
	
	}
	
}

})();