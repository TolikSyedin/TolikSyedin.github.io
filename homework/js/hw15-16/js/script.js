'use strict'
function GoogleCallback (func, data) {
    window[func](data);
};

var $search = 'test';


$.ajax({
    url:'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=AIzaSyA1Cv153q5so9KRahuYK6sCuH3aHQDHdMs&q=' + $search + '&callback=GoogleCallback&context=?',
    dataType: 'JSONP',
    method: 'GET',

    success: function(data){
    var ul = document.createElement("ul");
    $.each(data.results, function(i, val){
            var li = document.createElement("li");
            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
            ul.appendChild(li);
            console.log(data)
    })
    $('.wrapper').html(ul);

	}
});

