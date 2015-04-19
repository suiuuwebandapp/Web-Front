function getByClass(oParent,sClass){
		if(oParent.getElementsByClassName){
			return oParent.getElementsByClassName(sClass);
		} else {
			var ret = [];
			var aEle = oParent.getElementsByTagName("*");  
			for(var i = 0; i < aEle.length; i++){			
				var _aTmp = aEle[i].className.split(" ");   
				if(findInArr(_aTmp,sClass)){	
					ret.push(aEle[i]);
				}
			}
			return ret;
		}
	};

