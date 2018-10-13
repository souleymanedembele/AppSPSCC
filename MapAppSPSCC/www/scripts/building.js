var marker = [];
var map;

function building(id, name, location, image) {
    var marker;
    this.name = name;
    this.location = location;
    this.id = id;
    this.image = image;
    this.addMarker = function() {
        var image = this.image;
        marker = new google.maps.Marker({
            position: this.location,
            map: map,
            title: this.name,
            icon: image
        });
        marker.setMap(map);
        markers.push(marker);
    }
    this.deleteMarker = function () {
        marker.setMap(null);
        }
    this.visited = false;
    this.success = function () {
        var image = this.image;
        marker = new google.maps.Marker({
            position: this.location,
            map: map,
            title: this.name,
            icon: 'images/mapIcones/success.png'
        });
        marker.setMap(map);
        markers.push(marker);
    }
}

////////////////////////Instanciate buildings
let building_35 = new building(35, 'Building 35', { lat: 47.022119, lng: -122.935187 }, 'images/mapIcones/35.png');
let building_34 = new building(34, 'Building 34', { lat: 47.022089, lng: -122.932941 }, 'images/mapIcones/34.png');
let building_33 = new building(33, 'Building 33', { lat: 47.022062, lng: -122.933495 }, 'images/mapIcones/33.png');
let building_32 = new building(32, 'Building 32', { lat: 47.021846, lng: -122.934342 }, 'images/mapIcones/32.png');
let building_31 = new building(31, 'Building 31', { lat: 47.022373, lng: -122.934204 }, 'images/mapIcones/31.png');
let building_28 = new building(28, 'Building 28', { lat: 47.021719, lng: -122.930785 }, 'images/mapIcones/28.png');
let building_27 = new building(27, 'Building 27', { lat: 47.021949, lng: -122.930054 }, 'images/mapIcones/27.png');
let building_26 = new building(26, 'Building 26', { lat: 47.022847, lng: -122.929020 }, 'images/mapIcones/26.png');
let building_25 = new building(25, 'Building 25', { lat: 47.023717, lng: -122.929505 }, 'images/mapIcones/25.png');
let building_23 = new building(23, 'Building 23', { lat: 47.023760, lng: -122.930574 }, 'images/mapIcones/23.png');
let building_22 = new building(22, 'Building 22', { lat: 47.022954, lng: -122.930429 }, 'images/mapIcones/22.png');
let building_21 = new building(21, 'Building 21', { lat: 47.024103, lng: -122.929911 }, 'images/mapIcones/21.png');
let building_20 = new building(20, 'Building 20', { lat: 47.024257, lng: -122.928623 }, 'images/mapIcones/20.png');
let building_16 = new building(16, 'Building 16', { lat: 47.024180, lng: -122.925993 }, 'images/mapIcones/16.png');
let building_15 = new building(15, 'Building 15', { lat: 47.024391, lng: -122.926258 }, 'images/mapIcones/15.png');
let building_14 = new building(14, 'Building 14', { lat: 47.024598, lng: -122.926859 }, 'images/mapIcones/14.png');
let building_13 = new building(13, 'Building 34', { lat: 47.024291, lng: -122.926769 }, 'images/mapIcones/13.png');


///////////////////////////////////////////////////// Success
function success(name, position, im) {
    this.name = name;
    this.position = position;
    this.image = 'images/mapIcones/success.png';
}

let buildings = [
    building_35,
    building_34,
    building_32,
    building_31,
    building_28,
    building_27,
 //   building_26,
    building_25,
    building_23,
    building_22,
    building_21,
    building_20,
    building_16,
    building_15,
    building_14,
    building_13
]
