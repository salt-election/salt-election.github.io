(function(window){
	var List = (function(){
		function List(params){
			this.items = [];
		}
		List.prototype = {
			add: function(item){
				this.items.push(item);
			},
			remove: function(item){
				var index = this.items.indexOf(item);
				if(index !== -1){
					this.items.splice(indexOf, 1);
				} 
			},
			count: function(){
				return this.items.length;
			},
			find: function(callback){
				var callbackReturn;
					items = this.items,
					length = items.length,
					matches = [];
					i = 0;

					for(; i< length; i++){
						callbackReturn = callback(items[i], i);
						if(callbackReturn){
							matches.push(items[i]);
						}
					}
					
					return matches;
			}, 
			_clearMarkers: function(){
				var length = this.items.length;

				if(length !== 0){
				
					for(var i =0; i<length; i++){
						var temmarker = this.items[i];
						temmarker.setMap(null);
					}
					this.items.splice(0, length);
					 console.log('removed items');
				}
			},
		};
		return List;
	}());

	List.create = function(params){
		return new List(params);
	}
	window.List = List;
}(window));