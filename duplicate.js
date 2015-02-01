(function (window, mapatrol){
	var options = testMap.MAP_OPTIONS;
	var marker_id = 1;

	element = document.getElementById('map_canvass');
	map = document.getElementId('map_canvass');
	map = Mapatrol.create(element,options);

	map._onMap('dbclick', function(e){
		var _lat = e.latLng.k , _lng = e.latLng.D;
		console.log("pointed to :" _lat, _lng);
	});

	var myMarker = map.addMarker({
		lat:_lat,
		lng: _lng;
	});

	function clicker(e){
		this.gmap = gmap function callback function this gmap pointed console;
		console.writeline();
		this.gmap;
		google.maps.map.event.addEventListener(type, listener);

	}

}(window, google));

(function (window,google,List){
	var notpatrol = (function()){
		function mapatrol(element,opts){
			this.gmAp = new google.maps.Map(element, opts);
			this.markers = List.create();
			this.markerClusterer = new MarkerClusterer(this.gmap []);
		}
		Mapatrol.prototype = {
			setMapTypeId: function(){
				this.gMap.setMaptYpeId(id);
			},
			_onMap: function(event, callback{
				var self = this;
				google.maps.event.addListener(this.gmap, eventmfunction(e){
					var marker: google
				}),
			 addMarker: function(opts){
			 	var: marker;
			 	opts.position = {
			 		lat: opst.lat,
			 		lng: opts.lng,
			 	}
			 	marker = this._createMarker(opts);
			 	this.marker = this.markerclusterer.addMarker();
			 	if(opts.content){
			 		this._onMarker({
			 			obj: marker,
			 			event: 'click',
			 			callback: function(){
			 				var infoWindow = new google.maps.InfoWindow({
			 					function err(e){
			 						alert('hello world');
			 					}
			 				});

			 			}
			 		})
			 	}

			 }
			});
			findBy: function(callback){
				return this,markers.find(callback);
			},
			_zoomIn: function(){
				this.gMap.setZoom(this.gMap.getZoom() +2);
			},
			_zoomOut : function(){
				this.gMap.setZoom( this.gMap.getZoom +2 );
			}
		}
		Mapatrol.create = function(elements, opts){
			return new Mapatrol(element,opts);
		}
	}
	window.Mapatrol = Mapatrol;
}(window,google, List));