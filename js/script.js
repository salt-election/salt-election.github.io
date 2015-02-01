// (function(window, google){ 
// // map options
// var options = testMap.MAP_OPTIONS,
// element = document.getElementById('map_canvass'),
// // map
// 	map = new google.maps.Map(element, options); 
// }( window, google , window.testMap || (window.testMap = {} )) );
// LIKELY #1f79ff 0bdb0b url--- http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-0bdb0b/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-iphone/letter_v.png 
// UNLIKELY #d92100 url---- http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-d92100/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-iphone/letter_v.png
// POTENTIAL #d9c700 url--- http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-d9c700/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-iphone/letter_v.png
// default 2727c4
( function(window,mapatrol){

	// map options
	var options = testMap.MAP_OPTIONS;
	var marker_id = 1;
   element = document.getElementById('map_canvass'),
	// map

	map = Mapatrol.create(element,options); 

	map._onMap('dblclick', function(e){
		var _lat = e.latLng.k, _lng = e.latLng.D;
		console.log("Pointed to : " +e.latLng.D +" "+ e.latLng.k );
		
		mamMarker = map.addMarker( {
			lat: _lat,
			lng: _lng,
			icon: 'img/map_icons/staff.png',
			draggable: false,
			id: marker_id,
			type: 'staff',
			content: '<div class="noscrollbar"><b>Staff</b> <br/>Staff leader </div>',
			event: {
				name: 'click', 
				callback: function(){ 
				}
			}
		});
		marker_id++;  
	}); 

	


	//map.addMarker(7.1325 ,125.6169  );
	
	//map = new google.maps.Map(element, options); 
}(window, window.Mapatrol  ));
	var toggled = false;
	function changeRoadmap(){
		if( typeof map != 'undefined'){ 
			map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
			 }
	}
	function changeHybrid(){
		if( typeof map != 'undefined'){ 
			 map.setMapTypeId(google.maps.MapTypeId.HYBRID); 
		}
	}
	function changeTerrain(){
		if( typeof map != 'undefined'){ 
			map.setMapTypeId(google.maps.MapTypeId.TERRAIN); 
		}
	}
	function zoomIn(){
			map._zoomIn();
	}  
	function zoomOut(){
			map._zoomOut();
	}
	function deleteMarker(){ 
		if(toggled === false){
			console.log("Deleting all items in array");
			console.log(map.markers);
			//map.markers._clearMarkers();
			map.markerClusterer.clearMarkers();
			toggled = true;
		}
		else{
			map.markerClusterer.setMap( map );
		}
		
	}
	function findId(){
		var id = document.getElementById('findInput').value; 
		var found = map.findBy(function (marker) {
			return marker.id === Number(id);
		});
		if(typeof found === 'undefined'){
			console.log('not found');
		}
		else{
			console.log('found : ' +id);
		}
	}
	function loadData(){
		var marker_id = 1;
		for(var i = 0; i < 500; i++){
		map.addMarker({
			id: marker_id,
			lat: 7.1324 + Math.random(),
			lng: 125.6169 + Math.random(), 
			 icon: 'img/map_icons/staff.png',
			content: '<div class="noscrollbar"><b>Staff</b> <br/>Staff leader </div>',
		});
		marker_id++;
		console.log(marker_id);
	}
	for(var i = 0; i < 500; i++){
		map.addMarker({
			id: marker_id,
			lat: 7.1324 + Math.random(),
			lng: 125.6169 + Math.random(), 
			 icon: 'img/map_icons/voter_default.png',
			content: '<div class="noscrollbar"><b>Voter</b> <br/>voter default </div>',
		});
		marker_id++;
		console.log(marker_id);
	}
	}
 