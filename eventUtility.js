var eventUtility = {
    addEvent: function (el, type, fn) {
        if (typeof el.addEventListener === "function") {
            el.addEventListener(type, fn, false); // bubbling bo ie nie supportuje capture a kod ma bys cross browsers
        } else if (typeof el.attachEvent === "function") {
            el.attachEvent("on" + type, fn);
        } else {
            //el."on"+type zwróci błąd, [] używać
            el["on" + type] = fn; // dom level 0
        }
    },

    removeEvent: function (el, type, fn) {
        if (typeof el.removeEventListener === "functoin") {
            el.removeEventListener(type, fn, false); // bubbling bo ie nie supportuje capture a kod ma bys cross browsers
        } else if (typeof el.detachEvent === "function") {
            el.detachEvent("on" + type, fn);
        } else {
            el["on" + type] = null; // dom level 0
        }
    },

    getTarget: function (event) {
        if (typeof event.target !== "undefined") {
            return event.target;
        } else {
            return event.srcElement;
        }
    },

    preventDefault: function (event) {
        if (typeof event.preventDefault === "function") {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
};
