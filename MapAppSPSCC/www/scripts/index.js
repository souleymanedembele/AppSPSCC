// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var map, infoWindow;
var flag = false;
var markers = [];
var trackId;
var locations = [];
var visitedLocations = [];
var gMarker = [];
var im = 'images/mapIcones/bluecircle.png';
var keepMarker = [];
var firstImage = '';
var buildings_visited = [];
var bermuda = [];

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        
        initMap();
        trackMe();
        
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        /*
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');*/
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();


/*
function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: { lat: 37.77, lng: -122.447 }
    });
    directionsDisplay.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsDisplay);
    document.getElementById('mode').addEventListener('change', function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('mode').value;
    directionsService.route({
        origin: { lat: 37.77, lng: -122.447 },  // Haight.
        destination: { lat: 37.768, lng: -122.511 },  // Ocean Beach.
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode]
    }, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}*/

function initMap() {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: 18,
            styles: [
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#7bbfa4"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "stylers": [
                        {
                            "color": "#7bbfa4"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7bbfa4"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "stylers": [
                        {
                            "color": "#7bbfa4"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#7bbfa4"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#7195ca"
                        }
                    ]
                },
                {
                    "featureType": "poi.school",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#55e693"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#87a3b4"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#599de1"
                        }
                    ]
                }
            ]
        });
        for (var i = 0; i < buildings.length; i++) {
            buildings[i].addMarker();
        }


        for (i = 0; i < bounderies.length; i++) {
            // Construct the polygon.
            for (var j = 0; j < bounderies.length; j++) {
                j = new google.maps.Polygon({
                    paths: bounderies[i],
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 3,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35
                });
                j.setMap(map);
                // Add a listener for the click event.
                j.addListener('click', showArrays);
            }
        };

/*

                // Construct the polygon 22.
        var bermudaTriangle22 = new google.maps.Polygon({
            paths: triangleCoords22,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        bermudaTriangle22.setMap(map);
        // Add a listener for the click event.
        bermudaTriangle22.addListener('click', showArrays);

        // Construct the polygon 27.
        var bermudaTriangle27 = new google.maps.Polygon({
            paths: triangleCoords27,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        bermudaTriangle27.setMap(map);
        // Add a listener for the click event.
        bermudaTriangle27.addListener('click', showArrays);

        // Construct the polygon.
        var bermudaTriangle25 = new google.maps.Polygon({
            paths: triangleCoords25,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        bermudaTriangle25.setMap(map);
        // Add a listener for the click event.
        bermudaTriangle25.addListener('click', showArrays);

        // Construct the polygon.
        var bermudaTriangle21 = new google.maps.Polygon({
            paths: triangleCoords21,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        bermudaTriangle21.setMap(map);
        // Add a listener for the click event.
        bermudaTriangle21.addListener('click', showArrays);
*/
        infoWindow = new google.maps.InfoWindow;


        var bl = document.querySelector('#bl');
        for (i = 0; i < visitedLocations.length; i++) {
            bl.innerHTML += '<ul>' + '<li>' + visitedLocations[i] + '</li>' + '</ul>';
        }

    });

}
google.maps.event.addDomListener(window, 'load', initMap);

function showArrays(event) {
    // Since this polygon has only one path, we can call getPath() to return the
    // MVCArray of LatLngs.
    var vertices = this.getPath();
    var contentString = '<b>Bermuda Triangle polygon</b><br>' +
        'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
        '<br>';
    // Iterate over the vertices.
    for (var i = 0; i < vertices.getLength(); i++) {
        var xy = vertices.getAt(i);
        contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
            xy.lng();
    }
    // Replace the info window's content and position.
    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(map);
}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    googleLoc = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude);
    locations.push(googleLoc);

    var userMarker = new google.maps.Marker({
        position: googleLoc,
        map: map,
        icon: im
    });
    gMarker.push(userMarker);
    for (var i = 0; i < gMarker.length - 1; i++) {
        gMarker[i].setMap(null);
    }
/*    var triangleCoords = [
        { lat: 47.021892, lng: -122.935498 },
        { lat: 47.022411, lng: -122.935249 },
        { lat: 47.022356, lng: -122.934618 },
        { lat: 47.022121, lng: -122.934659 },
        { lat: 47.022134, lng: -122.934972 },
        { lat: 47.021783, lng: -122.935148 }
    ];

    var triangleCoords22 = [
        { lat: 47.022341, lng: -122.930434 },
        { lat: 47.022696, lng: -122.931292 },
        { lat: 47.023182, lng: -122.930841 },
        { lat: 47.023314, lng: -122.930546 },
        { lat: 47.023530, lng: -122.930230 },
        { lat: 47.023380, lng: -122.929811 },
        { lat: 47.023230, lng: -122.929597 }
    ];

    var triangleCoords25 = [
        { lat: 47.023663, lng: -122.929943 },
        { lat: 47.023972, lng: -122.929671 },
        { lat: 47.023777, lng: -122.929173 },
        { lat: 47.023471, lng: -122.929404 }
    ];

    var triangleCoords27 = [
        { lat: 47.021501, lng: -122.930317 },
        { lat: 47.021603, lng: -122.929773 },
        { lat: 47.021981, lng: -122.929385 },
        { lat: 47.022298, lng: -122.930043 },
        { lat: 47.021897, lng: -122.930493 }
    ];

    var triangleCoords21 = [
        { lat: 47.023908, lng: -122.929792 },
        { lat: 47.024131, lng: -122.930211 },
        { lat: 47.024625, lng: -122.930645 },
        { lat: 47.024980, lng: -122.929766 },
        { lat: 47.024501, lng: -122.929199 }
    ];

    // Construct the polygon.
    var bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords
    });

    // Construct the polygon 22.
    var bermudaTriangle22 = new google.maps.Polygon({
        paths: triangleCoords22
    });
    // Construct the polygon 27.
    var bermudaTriangle27 = new google.maps.Polygon({
        paths: triangleCoords27
    });

    // Construct the polygon.
    var bermudaTriangle25 = new google.maps.Polygon({
        paths: triangleCoords25
    });

    // Construct the polygon.
    var bermudaTriangle21 = new google.maps.Polygon({
        paths: triangleCoords21
    });
*/

    for ( i = 0; i < bounderies.length; i++) {
        for (var j = 0; j < bounderies.length; j++) {
            i = new google.maps.Polygon({
                paths: bounderies[j]
            });
            bermuda.push(i);
        }
    }

    var point = googleLoc;
    map.panTo(point);
    for (i = 0; i < bounderies.length; i++) {
        for (j = 0; j < buildings.length; j++) {
            if (google.maps.geometry.poly.containsLocation(point, bermuda[i]) === true) {
                buildings[i].deleteMarker();
                //building_35_success.deleteMarker();

                if (buildings[i].visited === true) {

                }
                else {
                    let successMark = new success(buildings[i].name, buildings[i].location);
                    buildings[i].success();
                    //building_35_success.addMarker();
                    //let visited_35 = new visitedBuilding('Building 35', point);
                    //buildings_visited.push(visited_35.name);
                    navigator.vibrate(1000);
                }
                building_35.visited = true;

            }
        }
    }
/**

    /*      visitedLocations.push('building 35');
        navigator.vibrate(3000);

        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );*/

 /* else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle22) === true) {
        addMarker('images/mapIcones/checked.png', { lat: 47.022942, lng: -122.930479 }, 'Building 35 '); // 47.022942, -122.930479
        visitedLocations.push('building 22');
        navigator.vibrate(3000);
/*        function alertDismissed() {
            // do something
        }
    navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );

    }
    */

        

/*
 else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle25) === true) {
        addMarker('images/mapIcones/checked.png', { lat: 47.023714, lng: -122.929550 }, 'Building 35 '); // 47.023714, -122.929550
        visitedLocations.push('building 25');
        navigator.vibrate(3000);
function alertDismissed() {
            // do something
        }        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );

    }

        */



 /*

 else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle27) === true) {
        addMarker('images/mapIcones/checked.png', { lat: 47.021966, lng: -122.930044 }, 'Building 35 '); // 47.021966, -122.930044
        visitedLocations.push('building 27');
        navigator.vibrate(3000);function alertDismissed() {
            // do something
        }*/

       /* navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );

    } else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle21) === true) {
        addMarker('images/mapIcones/checked.png', { lat: 47.024314, lng: -122.929776 }, 'Building 35 '); // 47.024314, -122.929776
        visitedLocations.push('building 21');
        navigator.vibrate(3000);

/*
                function alertDismissed() {
            // do something
        }*/

      /*  navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );

    }
 */

    var pLocation = document.getElementById("location");
    pLocation.innerHTML += latitude + ", " + longitude + "<br>";

    var pVisited = document.getElementById("visited");
    for (i = 0; i < visitedLocations.length; i++) {
        pVisited.innerHTML += visitedLocations[i] + "<br>";
    }

}


function displayError(error) {
    var errors = ["Unknown error", "Permission denied by user", "Position not available", "Timeout error"];
    var message = errors[error.code];
    console.warn("Error in getting your location: " + message, error.message);
}

function trackMe() {
    trackId = navigator.geolocation.watchPosition(displayLocation, displayError, { enableHighAccuracy: true });
}

function clearTracking() {
    if (trackId) {
        navigator.geolocation.clearWatch(trackId);
        trackId = null;
    }
}



/**
 *

function computeTotalDistance() {

    var totalDistance = 0;

    if (locations.length > 1) {
        for (var i = 1; i < locations.length; i++) {
            totalDistance += google.maps.geometry.spherical.computeDistanceBetween(locations[i - 1], locations[i]);
        }
    }
    return totalDistance;
}
function checkDisplacement() {
    navigator.geolocation.getCurrentPosition(displayLocation, displayError, { enableHighAccuracy: true });
    var pDistance = document.querySelector("#distance");
    var trackButton = document.querySelector("#track");
    trackButton.onclick = function (e) {
        e.preventDefault();
        if (trackButton.innerHTML === "Start") {
            trackButton.innerHTML = "Stop";
            trackMe();
        } else {
            trackButton.innerHTML = "Start";
            clearTracking();
            var d = computeTotalDistance();
            if (d > 0) {
                d = Math.round(d * 1000) / 1000;
                var miles = d / 1.6;
                pDistance.innerHTML = "Total distance traveled: " + d + "km";
                pDistance.innerHTML += "<br>Total distance traveled: " + miles + "m";
            } else {
                pDistance.innerHTML = "You didn't travel anywhere at all.";
            }
        }
    };
}

 */
function setCss(elm, prop, val) {
    var node = document.getElementById(elm).style;
    node.setProperty(prop, val);
    //setCss('map', 'visibility', 'visible');
}
/**
/function visitedFunction() {
    var pVisited = document.querySelector('#visited');
    var pMap = document.querySelector('#map');
    var visitedButton = document.querySelector('#retrieve');
    visitedButton.onclick = function (e) {
        e.preventDefault();
        if (visitedButton.innerHTML === "Visited") {
            visitedButton.innerHTML = "Return";
            pVisited.setAttribute('style', 'visibility: visible;');
            //pMap.setAttribute('style', 'visibility:hidden;');
        } else {
            visitedButton.innerHTML = "Visited";
            pVisited.setAttribute('style', 'visibility: hidden;');
        }
    };
}

/*Show direction function*//*
function showDirection() {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var haight = new google.maps.LatLng(37.7699298, -122.4469157);
    var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
    var mapOptions = {
        zoom: 14,
        center: haight
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);
}

function calcRoute() {
    var selectedMode = document.getElementById('mode').value;
    var request = {
        origin: haight,
        destination: oceanBeach,
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode]
    };
    directionsService.route(request, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        }
    });
}*/