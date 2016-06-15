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
// window.pixabayCallback = function(){
//     console.log('callback did it!')
// }


// $.ajax({
//     url: 'https://pixabay.com/api/',
//     data: {
//         key: '2752016-4fdc55509940bb2ec126f7894',
//         q: 'test',
//         callback: pixabayCallback(),
//     },
//     method: 'GET',
//     dataType: 'jsonp',
//     success: function(data){
//         console.log(data);
//         var hits = data.hits;
//         console.log(hits)
//         for(var i = 0; i < hits.length; i++){

//         }
//         return data;

//         }
// })

// function Human() {
//     this.name = 'humanName';
//     this.age = 24;
//     this.male = 'male';
//     this.weight = 80;
//     this.tall = 180;
// }



// Worker = { 
//     workplace: 'company',
//     salary: 400,
// }

// Worker.prototype = new Human();
// Worker.prototype.getToWork = function(){
//     alert('Working Hard');
// }


// function Student() {

// }
// // Student = {
// //     name: 'Boris',
// //     age: 18,
// //     male: 'male',
// //     weight: 60,
// //     tall: 170,
// //     scholarship: 100,
// //     univercity: 'КПИ'
// // }


// Student.prototype = new Human();
// Student.prototype.watchSerials = function(){
//     alert('Watching Serials All Day!')
// }



// // Worker.getToWork();
// // Student.watchSerials();
// console.log(Student.scholarship)
// console.log(Worker.tall)
// console.log(Worker.getToWork)
// console.log()