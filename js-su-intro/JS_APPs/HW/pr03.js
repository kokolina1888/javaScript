$(document).ready(function(){
	var input = '[{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"},{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}]';

	var obj = JSON.parse(input);
	var len = obj.length;

	$('#tab').append('<table><thead></thead></table>'); 
	var td1 = $("<td></td>").text('manufacturer');
	var td2 = $("<td></td>").text('model');
	var td3 = $("<td></td>").text('year');
	var td4 = $("<td></td>").text('price');
	var td5 = $("<td></td>").text('class');

	var tab = $('table');

	$('thead').append(td1, td2, td3, td4, td5);

	for(var i = 0; i < len; i+=1){
		var tr 				= $('<tr></tr>');
		var currentObj 		= obj[i];
		var manufacturer 	= $('<td></td>').text(currentObj.manufacturer);
		var model			= $('<td></td>').text(currentObj.model);
		var year			= $('<td></td>').text(currentObj.year);
		var price			= $('<td></td>').text(currentObj.price);
		var cl 				= $('<td></td>').text(currentObj.class);
		tr.append(manufacturer, model, year, price, cl);
		tab.append(tr);
	}
	$('thead').css({
		"background-color": '#BEF373', 'text-align': 'center'
	});
	tab.css('border-collapse', 'collapse');
	$('td').css('border', '1px solid black');
	

});