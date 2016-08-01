define(
	'view',
	[
		'tmpl',
		'jquery',
		'model'
	],
	function(){
		return{}
	}
)
function View (model) {
	var self = this;

	function init () {
		var wrapper = tmpl($('#wrapper-template').html());
		$('body').append(wrapper);
		self.elements = {
			mainInput: $('.main-input'),
			addBtn: $('.item-add'),
			listContainer: $('.item-list')
			
		};
		self.renderList(model.data);
	};

	self.renderList = function(data) {
		var list = tmpl($('#list-template').html(), {data: data});
		self.elements.listContainer.html(list);
	};

	self.setConfirmBtn = function(btn){
		btn.css({display:'none'}).next().fadeIn(200);
	};

	self.setRemoveBtn = function(btn){
		btn.css({display:'none'}).prev().fadeIn(200)
	};


	init();

};
