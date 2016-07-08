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
			console.log(self.data);
			return self.data;
		};

	};
};

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

function Controller (view, model) {
	var self = this,
		value1,
		value2;
	view.elements.addBtn.on('click', addItem);
	view.elements.mainInput.on('keypress', function(e){if(e.keyCode===13){addItem()}});
	view.elements.listContainer.on('click', '.item-delete', removeItem);
	view.elements.listContainer.on('focus', '.input-item', editItem);
	// view.elements.listContainer.on('keypress', '.input-item', function(e){if(e.keyCode===13){confirmItem()}}); < --- жалуется на скрипт jQuery... --->
	view.elements.listContainer.on('focusout', '.input-item', confirmItem);
	view.elements.listContainer.on('click', '.item-confirm', confirmItem);

	function addItem() {
		var newItem = view.elements.mainInput.val();
		model.addItem(newItem);
		view.renderList(model.data);		
		view.elements.mainInput.val('');
	};

	function removeItem() {
		var itemAttr = $(this).attr('data-value');
		model.removeItem(itemAttr);
		view.renderList(model.data);

	};
	function editItem() {
		var item = $(this);
		value1 = item.val();
		var btn = item.next();
		view.setConfirmBtn(btn)
	};

	function confirmItem() {
		var item = $(this);
		value2 = item.val();
		var btn = item.next().next();
		view.setRemoveBtn(btn);
		var dataValue = item.next().attr('data-value', value2);
		model.editItem(value1, value2);
	};


};


$(function(){
	var firstToDoList = ['learn html', 'learn css', 'learn javascript'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(view, model);
});