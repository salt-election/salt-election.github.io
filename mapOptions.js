(function (window, google, testMap) {

   var stylez =  [{"featureType":"water","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"color":"#f2f2f2"}]},{"featureType":"road","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]}];


	testMap.MAP_OPTIONS = {
	center: {
		lat: 7.1324,
		lng : 125.6169,
	},
	zoom: 8,
	disableDefaultUI: false,   
	minZoom: 8,

	disableDoubleClickZoom: true,
	//styles: stylez,
	mapTypeId: google.maps.MapTypeId.HYBRID,
	zoomContolOptions : {
		position: google.maps.ControlPosition.RIGHT_TOP,
		style: google.maps.ZoomControlStyle.DEFAULT
	},
	panControlOptions: {
		position: google.maps.ControlPosition.RIGHT_TOP
	},
	cluster: false,/*{
		options: {
			styles: [{
				url: 'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/people55.png',
				height: 56,
				width: 56,
				textColor: '#FFFFFF',
				
			}]
		}
	}*/
	

}; 

	testMap.MAP_OPTIONS_2_TOGGLE = {
		center: {
			lat: 7.1324,
			lng : 125.6169,
		},
		zoom: 10,
		disableDefaultUI: true,   
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};




}( window, google, window.testMap || (window.testMap = {})  ));