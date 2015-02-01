(function ( window,google, List){
	var Mapatrol = (function () {
		function Mapatrol(element,opts){
			this.gMap = new google.maps.Map(element, opts); 
			this.markers = List.create();
			if(opts.cluster){
				this.markerClusterer = new MarkerClusterer(this.gMap, [], opts.cluster.options);
			}
			
		}
		Mapatrol.prototype = { 
			setMapTypeId: function(id){
				this.gMap.setMapTypeId(id);
			},
			getInstance: function(){
				return this.gMap;
			},
			_onMap : function(event, callback){
				var self = this;
				google.maps.event.addListener(this.gMap, event, function(e){
					callback.call(self, e);
				});
			}, 
			_onMarker : function(opts){
				var self = this; 
				google.maps.event.addListener( opts.obj , 'click', function(e){
					opts.callback.call(self, e);
				});
			},
			addMarker: function (opts){
				var marker;
				opts.position ={ 
					lat: opts.lat,
				 	lng: opts.lng
				}
				marker = this._createMarker(opts); 

				if(this.markerClusterer){
					this.markerClusterer.addMarker(marker);
				}
				this.markers.add(marker);
				if(opts.content){  
					this._onMarker({
						obj: marker,
						event: 'click',
						callback: function(){
							var infoWindow = new google.maps.InfoWindow({ title:'staff', content: opts.content });
							infoWindow.open(this.gMap, marker);
						}
					})
				}
				if(opts.event){
					this._onMarker({
						obj : marker,
						event : opts.event.name,
						callback: opts.event.callback
					}); 
				} 
			}, 
			findBy: function(callback){
				return this.markers.find(callback);
			}, 
			_createMarker: function(opts){
				/*var opts = {
					position: { lat: _lat, lng: _lng } ,  
					map: this.gMap,
					icon: 'img/map_icons/staff.png'
				};*/
				opts.map = this.gMap;
				return new google.maps.Marker(opts);
			},
			_zoomIn: function(){
				this.gMap.setZoom( this.gMap.getZoom() + 2);
			},
			_zoomOut: function(){
				this.gMap.setZoom( this.gMap.getZoom() -2);
			},    

		};
		return Mapatrol;
	} ());

	Mapatrol.create = function(element,opts) {
		return new Mapatrol(element,opts);
	}; 
	Mapatrol.getInstance = function(){
		return this.gMap;
	}
	window.Mapatrol = Mapatrol;
}(window, google, List) );