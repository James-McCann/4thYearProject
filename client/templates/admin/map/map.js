/**
 * Created by User on 05/02/2016.
 */



Template.map.onCreated(function() {

    GoogleMaps.ready('map', function(map) {

        if(Markers.find().count()){

            var allMarkers = Markers.find();

            allMarkers.forEach(function (marker){

                var marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(marker.lat, marker.lng),
                    map: map.instance
                });

            });

        }

    });
});








Template.add_marker.onCreated(function() {
    GoogleMaps.ready('map', function(map) {
        google.maps.event.addListener(map.instance, 'click', function(event) {

            var lat = event.latLng.lat();
            var lng = event.latLng.lng();
            Meteor.call('addMarker', lat, lng);
        });

       var markers = {};

        Markers.find().observe({
            added: function(document) {

                var marker = new google.maps.Marker({
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(document.lat, document.lng),
                    map: map.instance,
                    // We store the document _id on the marker in order
                    // to update the document within the 'dragend' event below.
                    id: document._id,
                    title: null
                });

                // This listener lets us drag markers on the map and update their corresponding document.
                google.maps.event.addListener(marker, 'dragend', function(event) {
                    var lat = event.latLng.lat();
                    var lng = event.latLng.lng();
                    var id = marker.id;
                    Meteor.call('updateMarker', id, lat, lng);
                });

                //Delete marker
                google.maps.event.addListener(marker, 'dblclick', function(e){
                    var id = marker.id;
                    Meteor.call('removeMarker', id);

                });

                //google.maps.event.addListener(marker, 'click', function(event){
                //    if(Markers.findOne({_id: marker.id}).title === null) {
                //        var text = prompt("text here");
                //        marker.title = text;
                //        Markers.update({_id: marker.id}, {$set: { "title": text }});
                //    } else {
                //        alert(Markers.findOne({_id: marker.id}).title);
                //    }
                //});




                // Store this marker instance within the markers object.
                markers[document._id] = marker;
            },
            changed: function(newDocument, oldDocument) {
                markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
            },
            removed: function(oldDocument) {
                // Remove the marker from the map
                markers[oldDocument._id].setMap(null);

                // Clear the event listener
                google.maps.event.clearInstanceListeners(
                    markers[oldDocument._id]);

                // Remove the reference to this marker instance
                delete markers[oldDocument._id];
            }
        });
    });
});




