define(
	'model',
	['tmpl', 'jquery'],
	function(){
		return{}
		
	}
);
function Model (data){
	var self = this;

	self.data = data;



	self.addItem = function (item) {
		if(item.length === 0){
			return;
		};

		self.data.push(item);

		return self.data;
	};

	self.removeItem = function (item) {

		var index = self.data.indexOf(item);

		if(index === -1){
			return;
		};

		self.data.splice(index, 1);

		return self.data;

	};

	self.editItem = function(val1, val2){
		if(val1 === val2){
			return
		} else {
			var index = self.data.indexOf(val1);
			self.data.splice(index, 1, val2);
			return self.data;
		};

	};
};
