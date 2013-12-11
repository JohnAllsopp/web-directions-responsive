/* Venue map initialisation */
var map;
var conference = new google.maps.LatLng(-33.8784597, 151.1991758);
var workshops = new google.maps.LatLng(-33.8784597, 151.1991758);
var party1 = new google.maps.LatLng(-33.877581, 151.202378);
var party2 = new google.maps.LatLng(-33.877581, 151.202378);

function initialise() {
    var x = [{
        stylers: [{
            saturation: -100
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            hue: "#ac090a"
        }, {
            saturation: 50
        }, {
            lightness: 0
        }, {
            visibility: "on"
        }]
    }, {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{
            weight: 0
        }, {
            lightness: 10
        }]
    }, {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [{
            weight: 0
        }, {
            lightness: 80
        }]
    }];
    var D = {
        zoom: 14,
        center: conference,
        mapTypeControl: false,
        disableDefaultUI: true,
        scrollwheel: false,
    };
    map = new google.maps.Map(document.getElementById("venue-map"), D);
    var A = "ffffff";
    var v = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + A, new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34));
    var C = "bbbbbb";
    var u = "ab8080";
    var t = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + u, new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34));
    var s = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=x|" + u, new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34));
    var B = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow", new google.maps.Size(40, 37), new google.maps.Point(0, 0), new google.maps.Point(12, 35));
    var E = new google.maps.Marker({
        position: conference,
        map: map,
        title: "Powerhouse Museum - Conference Venue",
        icon: v,
        shadow: B
    });
    var r = new google.maps.Marker({
        position: party1,
        map: map,
        title: "Pumphouse - Reception Venue",
        icon: t,
        shadow: B
    });
    // var q = new google.maps.Marker({
    //      position: party2,
    //      map: map,
    //      title: "Baroq - Closing Night Party Venue",
    //      icon: s,
    //      shadow: B
    //  });
     var z = {
        map: map,
        name: "Venue Map",
        minZoom: 5,
    };
    var y = new google.maps.StyledMapType(x, z);
    map.mapTypes.set("Venue Map", y);
    map.setMapTypeId("Venue Map")
}
initialise();