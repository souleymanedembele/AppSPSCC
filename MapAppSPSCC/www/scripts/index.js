// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var map, infoWindow;
var markers = [];
var trackId;
var locations = [];
var gMarker = [];
var im = 'images/mapIcones/bluecircle.png';
var keepMarker = [];
var bermuda = [];
var point;
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
    }
    

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
            gestureHandling: 'greedy',
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

      
        infoWindow = new google.maps.InfoWindow;


/*        var bl = document.querySelector('#bl');
        for (i = 0; i < visitedBuildings.length; i++) {
            bl.innerHTML += '<ul>' + '<li>' + visitedLocations[i] + '</li>' + '</ul>';
        }*/

    });

}
google.maps.event.addDomListener(window, 'load', initMap);
function showArrays(event) {
    // Since this polygon has only one path, we can call getPath() to return the
    // MVCArray of LatLngs.
    var vertices = this.getPath();
    var contentString = '<b>Building 22</b><br>' +
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
  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('mode').value;
    directionsService.route({
        origin: { lat: 47.023760, lng: -122.930574 },  // Haight.
        destination: { lat: 47.022954, lng: -122.930429 },  // Ocean Beach.
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode]
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
 
////////////////////////////Take Foto
let app = {
    init: function () {
        document.getElementById('btnSelfie').addEventListener('click', app.takephoto);
    },
    takephoto: function () {
        let opts = {
            quality: 80,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
/*            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,*/
            mediaType: Camera.MediaType.PICTURE,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection: Camera.Direction.BACK,
            targetWidth: 360,
            targetHeight: 640,
/*            allowEdit: true,*/
            correctOrientation: true 
        };

        navigator.camera.getPicture(app.ftw, app.wtf, opts);
    },
    ftw: function (imgURI) {

        var image = document.getElementById('photo');
        image.src =  imgURI;
        document.getElementById('msg').textContent = imgURI;
    },
    wtf: function (msg) {
        document.getElementById('msg').textContent = msg;
    }
};

document.addEventListener('deviceready', app.init);
///////////////////////////////////////////////
var mcount = document.getElementById("m");
var gcount = document.getElementById("g");
function displayLocation(position) {
    var pVisited = document.getElementById("visited");
    var mVisited = document.getElementById("visite");
    for (var i = 0; i < visitedBuildings.length; i++) {
       /* pVisited.innerHTML += '<ul>' + '<li>' + visitedBuildings[i] + '</li>' + '</ul>';*/
    }
    mcount.innerHTML = i;
    gcount.innerHTML = i;
    if (i === 7) {
        $('#00').modal('show');
    }

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
    for (i = 0; i < gMarker.length - 1; i++) {
        gMarker[i].setMap(null);
        
    }

    for ( i = 0; i < bounderies.length; i++) {
        for (var j = 0; j < bounderies.length; j++) {
            i = new google.maps.Polygon({
                paths: bounderies[j]
            });
            bermuda.push(i);
            
        }
    }

    point = googleLoc;
    /*   map.panTo(point);*/


    for (i = 0; i < bounderies.length; i++) {
        
        for (j = 0; j < buildings.length; j++) {
            if (google.maps.geometry.poly.containsLocation(point, bermuda[i]) === true) {
                //building_35_success.deleteMarker();
                if (buildings[i].visited === false) {
                    buildings[i].deleteMarker();
                    let successMark = new success(buildings[i].name, buildings[i].location);
                    buildings[i].success();
                    buildings[i].visited = true;
                    visitedBuildings.push(buildings[i].name);
                    m++;
                    $(buildings[i].id).modal('show');
                    pVisited.innerHTML += '<li data-role=' + 'list-divider' + '><a><h2>' + buildings[i].name + '</h2></a></li>';
                    mVisited.innerHTML += '<li data-role=' + 'list-divider' + '><a><h2>' + buildings[i].name + '</h2></a></li>';
                    

               /*     function alertDismissed() {
                        // do something
                    }

                    navigator.notification.alert(
                        'You are the winner!',  // message
                        alertDismissed,         // callback
                        'Game Over',            // title
                        'Ok'                  // buttonName
                    );
/*                    function openCamera(selection) {

                        var srcType = Camera.PictureSourceType.CAMERA;
                        var options = setOptions(srcType);
                        var func = createNewFileEntry;

                        navigator.camera.getPicture(function cameraSuccess(imageUri) {

                            displayImage(imageUri);
                            // You may choose to copy the picture, save it somewhere, or upload.
                            func(imageUri);

                        }, function cameraError(error) {
                            console.debug("Unable to obtain picture: " + error, "app");

                        }, options);
                    }


/*
                    navigator.camera.getPicture(onSuccess, onFail,
                        {
                            destinationType: Camera.DestinationType.FILE_URI,
                            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                            popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
                        });

                    // Reposition the popover if the orientation changes.
                    window.onorientationchange = function () {
                        var cameraPopoverHandle = new CameraPopoverHandle();
                        var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
                        cameraPopoverHandle.setPosition(cameraPopoverOptions);
                    };


                    function onSuccess(imageURI) {
                        var image = document.getElementById('myImage');
                        image.src = imageURI;
                    }

                    function onFail(message) {
                        alert('Failed because: ' + message);
                    }
                    function cameraCallback(imageData) {
                        var image = document.getElementById('myImage');
                        image.src = "data:image/jpeg;base64," + imageData;
                    }
*/

                    //building_35_success.addMarker();
                    //let visited_35 = new visitedBuilding('Building 35', point);
                    //buildings_visited.push(visited_35.name);
                    //navigator.vibrate(1000);
                } else if (buildings[i].visited === true) {
                    ////
                }
                

            }
        }
    }
 /**
  *    var pLocation = document.getElementById("location");
    pLocation.innerHTML = latitude + ", " + longitude + "<br>";

  */

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
/*$(function () {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })*/