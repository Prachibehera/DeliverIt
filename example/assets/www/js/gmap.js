  var directionDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
$(document).on('pageinit', '#headline', function(){ 
    directionsDisplay = new google.maps.DirectionsRenderer({polylineOptions: { strokeColor: '#5cb85c',strokeOpacity: 0.7, strokeWeight: 5 } });
    var chicago = new google.maps.LatLng(41.850033, -87.6500523);
	
    var myOptions = {
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: chicago,
	  styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]
    }
    map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
    directionsDisplay.setMap(map);
    calcRoute();
  });
  
  function calcRoute() {

    var request = {
        // from: Blackpool to: Preston to: Blackburn
        origin: "214 North Craig Street Pittsburgh", 
        destination: "5000 Forbes Avenue Pittsburgh", 
        waypoints: [{
          location: "664 Summerlea St, Pittsburgh, PA 15232",
          stopover:true}],
        optimizeWaypoints: true,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        var route = response.routes[0];
        var summaryPanel = document.getElementById("directions_panel");
        summaryPanel.innerHTML = "";
        // For each route, display summary information.
        for (var i = 0; i < route.legs.length; i++) {
          var routeSegment = i + 1;
		  if ( i == 0) {
          summaryPanel.innerHTML += "<p>"+ "<b>Resturant: " + "restaurant_name here" +  "</b> </p>";
		  }
		  else {
			  summaryPanel.innerHTML += "<p>"+ "<b>Order: " + "#837489" +  "</b> </p>";
		  }
          summaryPanel.innerHTML += "<p>Location: " + route.legs[i].end_address + "</p>";
          summaryPanel.innerHTML += "<p>Distance: " + route.legs[i].distance.text + "</p><br /><br />";
        }
        computeTotalDistance(response);
      } else {
        alert("directions response "+status);
      }
    });
  }

      function computeTotalDistance(result) {
      var totalDist = 0;
      var totalTime = 0;
      var myroute = result.routes[0];
      for (i = 0; i < myroute.legs.length; i++) {
        totalDist += myroute.legs[i].distance.value;
        totalTime += myroute.legs[i].duration.value;      
      }
      totalDist = totalDist / 1000.
      document.getElementById("total").innerHTML = "total distance is: "+ totalDist + " km<br>total time is: " + (totalTime / 60).toFixed(2) + " minutes";
      }