(function(){




var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
        BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
        iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
        Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
        Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
        any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var fullHeight = function() {
    //changes the height of the js-fullheight elements in the html
    //first section with computer background
    if ( !isMobile.any() ) {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });
    }
};

var LoaderPage = function(){
    $(".loading-gif").fadeOut(2000);
};

function notify(text) {
    //window.alert(text);
    document.getElementById('basic-waypoint').className="animate__animated animate__bounce";


  };

var testWaypoint = function(){
var waypoint = new Waypoint({
    element: document.getElementById('basic-waypoint'),
    handler: function(direction) {
    if(direction==='down'){notify('Basic waypoint triggered')}
      
    }
  })
};


$(function(){

    LoaderPage();
    fullHeight();
    testWaypoint();
});
}())
