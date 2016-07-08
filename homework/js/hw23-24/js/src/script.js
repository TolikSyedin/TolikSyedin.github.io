define(
	'script',
	[
		'tmpl',
		'jquery',
		'model',
		'view',
		'controller'
	],
	function(){
		return{}
	}
)
$(function(){
	var firstToDoList = ['learn html', 'learn css', 'learn javascript'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(view, model);
});