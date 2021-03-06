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
( function(window,$){
 
	var geocoder = new google.maps.Geocoder();

	 $map = $('#map_canvass').mapatrol(testMap.MAP_OPTIONS);
	 $map.mapatrol('addMarker', {
			id: 1,
			lat: 7.132453 + Math.random(),
			lng: 125.616953 + Math.random(), 
			 icon: 'img/map_icons/staff.png',
			content: '<div class="noscrollbar"><b>Staff</b> <br/>Staff leader </div>',
	});
	//map.addMarker(7.1325 ,125.6169  );
	
	//map = new google.maps.Map(element, options); 
	function geocode(opts){
		geocoder.geocode({
			address: opts.address
		}, function(results,status){
			if(status === google.maps.GeocoderStatus.OK){
				console.log(results); 
			}
			else{
				console.error(status);
			}
		});
	}
	geocode({
		address: 'Davao City',
		success: function(results){
				console.log("\n"+results[0]);
		},
		error: function(status){
			console.error(status);
		}
	})

}(window, jQuery   ));
	var toggled = false;
	function changeRoadmap(){
		if( typeof map != 'undefined'){ 
			$map.mapatrol.setMapTypeId(google.maps.MapTypeId.ROADMAP);
			 }
	}
	function changeHybrid(){
		if( typeof map != 'undefined'){ 
			$map.mapatrol.setMapTypeId(google.maps.MapTypeId.HYBRID); 
		}
	}
	function changeTerrain(){
		if( typeof map != 'undefined'){ 
			$map.mapatrol.setMapTypeId(google.maps.MapTypeId.TERRAIN); 
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
		var found = $map.mapatrol('findMarkers', function(marker){
			return marker.id === Number(id);
		});
		if(typeof found === 'undefined'){
			console.log('not found');
		}
		else{
			console.log('has results : ' + found.length);
			$map.mapatrol.Mapatrol.gMap.setCenter( { 	lat: 7.1324, lng : 125.6169,} );
		}
	}
	function loadData(){
		var marker_id = 1;
		var length_value = $('#length').html();
		for(var i = 0; i < 500; i++){
		  $map.mapatrol('addMarker', {
			id: marker_id,
			lat: 7.1324 + Math.random(),
			lng: 125.6169 + Math.random(), 
			 icon: 'img/map_icons/staff.png',
			content: '<div class="noscrollbar"><b>Staff</b> <br/>Staff leader </div>',
	 });
		marker_id++;
		console.log(marker_id);
	}
	/*for(var i = 0; i < 500; i++){
	  $map.mapatrol('addMarker', {
			id: marker_id,
			lat: 7.1324 + Math.random(),
			lng: 125.6169 + Math.random(), 
			 icon: 'img/map_icons/voter_default.png',
			content: '<div class="noscrollbar"><b>Voter</b> <br/>voter default </div>',
		});
		marker_id++;
		console.log(marker_id);
	}*/
	//console.log( $map.mapatrol('myMarkers') );

	$('#length').html( $map.mapatrol('myMarkers').length );
}
 