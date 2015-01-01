(function ( window,google){
	var Mapatrol = (function () {
		function Mapatrol(element,opts){
			this.gMap = new google.maps.Map(element, opts); 
		}
		Mapatrol.prototype = { 
			setMapTypeId: function(id){
				this.gMap.setMapTypeId(id);
			},
			_on : function(event, callback){
				var self = this;
				google.maps.event.addListener(this.gMap, event, function(e){
					callback.call(self, e);
				});
			},
			addMarker: function (lat, lng){
				this._createMarker(lat,lng);
			},
			_createMarker: function(_lat,_lng){
				var opts = {
					position: { lat: _lat, lng: _lng } ,  
					map: this.gMap,
					icon: 'img/map_icons/staff.png'
				};

				return new google.maps.Marker(opts);
			},
			_zoomIn: function(){
				this.gMap.setZoom( this.gMap.getZoom() + 2);
			},
			_zoomOut: function(){
				this.gMap.setZoom( this.gMap.getZoom() -2);
			}

		};
		return Mapatrol;
	} ());

	Mapatrol.create = function(element,opts) {
		return new Mapatrol(element,opts);
	}; 
	window.Mapatrol = Mapatrol;
}(window, google) );