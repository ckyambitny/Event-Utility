(function() {

var mouseHandler=function(evt){
  var target=eventUtility.getTarget(evt),
     
      classData=target.getAttribute("data-body-class");

  if (classData) {
    eventUtility.preventDefault(evt);
    if (evt.type==="click") {
      document.body.className="";  
    } else{
      document.body.className=classData;
    }
  }
};

eventUtility.addEvent(document,"click",mouseHandler);
eventUtility.addEvent(document,"mouseover",mouseHandler);











  /*
  var buttons = document.getElementsByTagName("button");
  var buttonClick = function(evt) {
    var target = eventUtility.getTarget(evt), 
    	className = target.innerHTML.toLowerCase();
    alert(className);

    document.body.className = className;
    eventUtility.preventDefault(evt);
  };

  for (var i = 0, len = buttons.length; i < len; i++) {
    eventUtility.addEvent(buttons[i], "click", buttonClick);
  }

  var links = document.getElementsByTagName("a");

  for (var i = 0, len = links.length; i < len; i++) {
    eventUtility.addEvent(links[i], "click", buttonClick);
  }
*/

})();
