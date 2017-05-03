//Map
function mapLoc() {
    var mapOptions = {
        center: new google.maps.LatLng(48.439093, -123.370151),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

//Scroll
$(document).on('click', 'a', function(event){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});