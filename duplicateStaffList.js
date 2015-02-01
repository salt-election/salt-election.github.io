(function(window){
	var List = (function(){
		function List(params){
			this.items = [];
		}
		List.prototype = {
			add: function(item){
				this.items.push(item);
			}
			remove: function( item){
				var index = this.items.indexOf(item);
				if(index !== -1){
					this.items.splice(indexOf, 1);
				}
			},
		}
	})
});