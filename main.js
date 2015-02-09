$(document).ready(function (){

  // create a LatLng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(47.614848,-122.3359059);

  // prepare the map properties
  var options = {
    zoom: 13,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);

  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });

  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>The Emerald City</strong><br><br>Motto:The City of Goodwill<br>Incorporated: December 2, 1869<br>Average Rainfall: 40.3 inches<br></div>'
  });  
});