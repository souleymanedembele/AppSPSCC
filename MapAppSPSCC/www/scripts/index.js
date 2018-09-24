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
var b35 = false;
var b22 = false;
var b27 = false;
var b25 = false;
var b22 = false;
var b21 = false;
var keepMarker = [];
var firstImage = '';

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        
        initMap();
        
        
        
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

var map;
function initMap() {

    function alertDismissed() {
        // do something
        
    }
    navigator.vibrate(3000);
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: 18
        });

        var building35 = {
            image: 'images/mapIcones/35.png',
    position: { lat: 47.022119, lng: -122.935187 },
    name: 'Building 35'
};
        
        var building351 = addMarker(building35.image, building35.position, building35.name);
        var building34 = addMarker("images/mapIcones/34.png", { lat: 47.022089, lng: -122.932941 }, 'Building 34 - Technical Education Center /Nursing/ Dental Clinic');
        var building33 = addMarker("images/mapIcones/33.png", { lat: 47.022062, lng: -122.933495 }, 'Building 33 - Developmental Education Center');
        var building32 = addMarker("images/mapIcones/32.png", { lat: 47.021846, lng: -122.934342 }, 'Building 32 Horticulture');
        var building31 = addMarker("images/mapIcones/31.png", { lat: 47.022373, lng: -122.934204 }, 'Building 31 - Gymnasium');
        var building28 = addMarker('images/mapIcones/28.png', { lat: 47.021719, lng: -122.930785 }, 'Building 28 - Library / Media Center');
        var building27 = addMarker('images/mapIcones/27.png', { lat: 47.021949, lng: -122.930054 }, 'Bldg 27 - Culinary Arts Center / Student Union');
        var building26 = addMarker('images/mapIcones/26.png', { lat: 47.022847, lng: -122.929020 }, 'Bldg 26 - Lecture Hall');
        var building25 = addMarker('images/mapIcones/25.png', { lat: 47.023717, lng: -122.929505 }, 'Bldg 25 - Administration');
        var building23 = addMarker('images/mapIcones/23.png', { lat: 47.023760, lng: -122.930574 }, 'Building 23 - Anthropology, CAD & Geomatics');
        var building22 = addMarker('images/mapIcones/22.png', { lat: 47.022954, lng: -122.930429 }, 'Center for Student Success, Library, Student Services, Coffee');
        var building21 = addMarker('images/mapIcones/21.png', { lat: 47.024103, lng: -122.929911 }, 'Building 21 - Kenneth J. Minnaert Center for the Arts');
        var building20 = addMarker('images/mapIcones/20.png', { lat: 47.024257, lng: -122.928623 }, 'Building 20 - Family Education Center / Child Care');
        var building16 = addMarker('images/mapIcones/16.png', { lat: 47.024180, lng: -122.925993 }, 'Building 16');
        var building15 = addMarker('images/mapIcones/15.png', { lat: 47.024391, lng: -122.926258 }, 'Bldg 15 - Campus Warehouse');
        var building14 = addMarker('images/mapIcones/14.png', { lat: 47.024598, lng: -122.926859 }, 'Bldg 14 - Building Maintenance');
        var building13 = addMarker('images/mapIcones/13.png', { lat: 47.024291, lng: -122.926769 }, 'Bldg 13 - Grounds Maintenance');

        var triangleCoords = [
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
            paths: triangleCoords,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        bermudaTriangle.setMap(map);
        // Add a listener for the click event.
        bermudaTriangle.addListener('click', showArrays);

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

        infoWindow = new google.maps.InfoWindow;


        var bl = document.querySelector('#bl');
        for (i = 0; i < visitedLocations.length; i++) {
            bl.innerHTML += '<ul>' + '<li>' + visitedLocations[i] + '</li>' + '</ul>';
        }

    });

    //showMarkers();
    showM1();
    visitedFunction();
    checkDisplacement();
}
google.maps.event.addDomListener(window, 'load', initMap);


function addMarker(source, location, tile) {
    var image = source;
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: tile,
        icon: image
    });
    markers.push(marker);
}

// Sets the map on all markers in the array.

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}


function setM1(map) {
    markers[0].setMap(map);
}

function clearM1() {
    setM1(null);
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}
function showM1() {
    setM1(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

// Sets the map on all markers in the array.
/**
 * function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}

function deleteMarkers() {
    clearMarkers();
    markers = [];
}
 */


/*function buildingsMarkers() {




}
*/

/*
 *  function removeArrayelement(array, element) {
     const index = array.indexOf(element);
     if (index !== -1) {
         array.splice(index, 1);
     }
 }

 
 */




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
    var triangleCoords = [
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

    var point = googleLoc;
    map.panTo(point);
    if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle) === true) {
        firstImage = 'images/mapIcones/35v.png';
       // addMarker('images/mapIcones/35v.png', { lat: 47.022118, lng: -122.935187 }, 'Building 35 ');


        
        //showMarkers();
        deleteMarkers();

        var building35 = {
            image: firstImage,
            position: { lat: 47.022119, lng: -122.935187 },
            name: 'Building 35'
        };

        var building351 = addMarker(building35.image, building35.position, building35.name);
        var building34 = addMarker("images/mapIcones/34.png", { lat: 47.022089, lng: -122.932941 }, 'Building 34 - Technical Education Center /Nursing/ Dental Clinic');
        var building33 = addMarker("images/mapIcones/33.png", { lat: 47.022062, lng: -122.933495 }, 'Building 33 - Developmental Education Center');
        var building32 = addMarker("images/mapIcones/32.png", { lat: 47.021846, lng: -122.934342 }, 'Building 32 Horticulture');
        var building31 = addMarker("images/mapIcones/31.png", { lat: 47.022373, lng: -122.934204 }, 'Building 31 - Gymnasium');
        var building28 = addMarker('images/mapIcones/28.png', { lat: 47.021719, lng: -122.930785 }, 'Building 28 - Library / Media Center');
        var building27 = addMarker('images/mapIcones/27.png', { lat: 47.021949, lng: -122.930054 }, 'Bldg 27 - Culinary Arts Center / Student Union');
        var building26 = addMarker('images/mapIcones/26.png', { lat: 47.022847, lng: -122.929020 }, 'Bldg 26 - Lecture Hall');
        var building25 = addMarker('images/mapIcones/25.png', { lat: 47.023717, lng: -122.929505 }, 'Bldg 25 - Administration');
        var building23 = addMarker('images/mapIcones/23.png', { lat: 47.023760, lng: -122.930574 }, 'Building 23 - Anthropology, CAD & Geomatics');
        var building22 = addMarker('images/mapIcones/22.png', { lat: 47.022954, lng: -122.930429 }, 'Center for Student Success, Library, Student Services, Coffee');
        var building21 = addMarker('images/mapIcones/21.png', { lat: 47.024103, lng: -122.929911 }, 'Building 21 - Kenneth J. Minnaert Center for the Arts');
        var building20 = addMarker('images/mapIcones/20.png', { lat: 47.024257, lng: -122.928623 }, 'Building 20 - Family Education Center / Child Care');
        var building16 = addMarker('images/mapIcones/16.png', { lat: 47.024180, lng: -122.925993 }, 'Building 16');
        var building15 = addMarker('images/mapIcones/15.png', { lat: 47.024391, lng: -122.926258 }, 'Bldg 15 - Campus Warehouse');
        var building14 = addMarker('images/mapIcones/14.png', { lat: 47.024598, lng: -122.926859 }, 'Bldg 14 - Building Maintenance');
        var building13 = addMarker('images/mapIcones/13.png', { lat: 47.024291, lng: -122.926769 }, 'Bldg 13 - Grounds Maintenance');

        visitedLocations.push('building 35');
        navigator.vibrate(3000);

        function alertDismissed() {
            // do something
        }

        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );

    }
    else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle22) === true) {
        addMarker('images/mapIcones/checked.png', { lat: 47.022942, lng: -122.930479 }, 'Building 35 '); // 47.022942, -122.930479
        visitedLocations.push('building 22');
        navigator.vibrate(3000);
        function alertDismissed() {
            // do something
        }

        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );

    } else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle25) === true) {
        addMarker('images/mapIcones/checked.png', { lat: 47.023714, lng: -122.929550 }, 'Building 35 '); // 47.023714, -122.929550
        visitedLocations.push('building 25');
        navigator.vibrate(3000);

        function alertDismissed() {
            // do something
        }

        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );

    } else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle27) === true) {
        addMarker('images/mapIcones/checked.png', { lat: 47.021966, lng: -122.930044 }, 'Building 35 '); // 47.021966, -122.930044
        visitedLocations.push('building 27');
        navigator.vibrate(3000);

        function alertDismissed() {
            // do something
        }

        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );

    } else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle21) === true) {
        addMarker('images/mapIcones/checked.png', { lat: 47.024314, lng: -122.929776 }, 'Building 35 '); // 47.024314, -122.929776
        visitedLocations.push('building 21');
        navigator.vibrate(3000);

        function alertDismissed() {
            // do something
        }

        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );

    }

    var pLocation = document.getElementById("location");
    pLocation.innerHTML += latitude + ", " + longitude + "<br>";

    var pVisited = document.getElementById("visited");
    for (i = 0; i < visitedLocations.length; i++) {
        pVisited.innerHTML += visitedLocations[i] + "<br>";
    }

    /* var point = googleLoc;
 
     if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle) === true) {
         b35 = true;
     }
 
     else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle22) === true) {
         b22 = true;
     } else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle25) === true) {
         b25 = true;
     } else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle27) === true) {
         b27 = true;
     } else if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle21) === true) {
         b21 = true;
     }
 
     if (b35 === true) {
         var bb1 = addMarker('images/mapIcones/checked.png', { lat: 47.022118, lng: -122.935187 }, 'Building 35 ');
         visitedLocations.push('building 35');
         keepMarker.push(bb1);
     } else if (b22 === true) {
         var bb2 = addMarker('images/mapIcones/checked.png', { lat: 47.022942, lng: -122.930479 }, 'Building 35 '); // 47.022942, -122.930479
         visitedLocations.push('building 22');
         keepMarker.push(bb2);
     } else if (b25 === true) {
         var bb3 =  addMarker('images/mapIcones/checked.png', { lat: 47.023714, lng: -122.929550 }, 'Building 35 '); // 47.023714, -122.929550
         visitedLocations.push('building 25');
         keepMarker.push(bb3);
     } else if (b27 === true) {
         var bb4 = addMarker('images/mapIcones/checked.png', { lat: 47.021966, lng: -122.930044 }, 'Building 35 '); // 47.021966, -122.930044
         visitedLocations.push('building 27');
         keepMarker.push(bb4);
     } else if (b21 === true) {
         var bb5 = addMarker('images/mapIcones/checked.png', { lat: 47.024314, lng: -122.929776 }, 'Building 35 '); // 47.024314, -122.929776
         visitedLocations.push('building 21');
         keepMarker.push(bb5);
     }
     for ( i = 0; i < keepMarker.length; i++) {
         keepMarker.shift();
     }*/




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

function setCss(elm, prop, val) {
    var node = document.getElementById(elm).style;
    node.setProperty(prop, val);
    //setCss('map', 'visibility', 'visible');
}
function visitedFunction() {
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