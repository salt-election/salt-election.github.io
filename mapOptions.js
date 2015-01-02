(function (window, google, testMap) {

	testMap.MAP_OPTIONS = {
	center: {
		lat: 7.1324,
		lng : 125.6169,
	},
	zoom: 10,
	disableDefaultUI: true,   
	 
	disableDoubleClickZoom: true,
	mapTypeId: google.maps.MapTypeId.HYBRID,
	zoomContolOptions : {
		position: google.maps.ControlPosition.RIGHT_TOP,
		style: google.maps.ZoomControlStyle.DEFAULT
	},
	panControlOptions: {
		position: google.maps.ControlPosition.RIGHT_TOP
	}

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