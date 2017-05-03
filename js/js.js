//Map
function mapLoc() {
var samco = {lat: 48.438367, lng: -123.370304}; 
    var map = new google.maps.Map(document.getElementById("map"), {
       zoom: 15,
        center: samco
    });
    var marker = new google.maps.Marker({
        position: samco,
        map: map
    });
}


//Scroll
$(document).on('click', 'a', function(event){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

