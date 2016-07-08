define('controller', 
	[ 
	'tmpl',
	'jquery',
	'model',
	'view'
	],
	function(){
		return
	}
);
function Controller (view, model) {
	var self = this,
		value1,
		value2;

	view.elements.addBtn.on('click', addItem);
	view.elements.mainInput.on('keypress', function(e){if(e.keyCode===13){addItem()}});
	view.elements.listContainer.on('click', '.item-delete', removeItem);
	view.elements.listContainer.on('focus', '.input-item', editItem);
	view.elements.listContainer.on('keydown', '.input-item', function(e){if(e.keyCode===13){confirmItem()}}); // < --- жалуется на скрипт jQuery... 

	// В функции написал console.log(item) чтобы продебажить. по клику выводит консоль выводит инпут, что собственно является верным, но при нажатии энтера показывает глобальный window. Почемуу не знаю. --->

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
		console.log(item)
		value2 = item.val();
		var dataValue = item.next().attr('data-value', value2);
		var btn = item.next().next();
		view.setRemoveBtn(btn);
		model.editItem(value1, value2);
	};


};