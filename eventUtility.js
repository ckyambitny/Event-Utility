var eventUtility={
	 addEvent:function(el,type,fn){
		if(typeof addEventListener!=="undefined"){
			el.addEventListener(type,fn,false); //bubbling bo ie nie supportuje capture a kod ma bys cross browsers
		}else if(typeof attachEvent!=="undefined"){
			el.attachEvent("on"+type,fn);
		}else{
			//el."on"+type zwróci błąd, [] uzywac 
			el["on"+type]=fn;//dom level 0
		}
	},
	 removeEvent:function(el,type,fn){
		if(typeof removeEventListener!=="undefined"){
			el.removeEventListener(type,fn,false); //bubbling bo ie nie supportuje capture a kod ma bys cross browsers
		}else if(typeof detachEvent!=="undefined"){
			el.detachEvent("on"+type,fn);
		}else{
			el["on"+type]=null;//dom level 0
		}
	},
	 getTarget:function(event){
		if (typeof event.target !=="undefined") {
			return event.target;
		}else{
			return event.srcElement;
		}
	},
	 preventDefault:function(event){
		if (typeof event.preventDefault !=="undefined") {
			event.preventDefault();
		}else{
			event.returnValue=false;
		}

	}
};


