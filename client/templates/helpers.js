


Template.registerHelper('format', function(date){
	return moment(date).format('DD-MM-YYYY  h:mm a');

});




Avatar.setOptions({
	fallbackType: "initials"
});



Template.map.helpers({
	mapOptions: function() {
		if (GoogleMaps.loaded()) {
			return {
				center: new google.maps.LatLng(52.2138619, -7.1203733),
				zoom: 11
			};
		}
	}
});






