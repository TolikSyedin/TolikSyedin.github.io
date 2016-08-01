window.pixabayCallback = function(){
    console.log('callback did it!')
};

$('#inp').keypress(function(event){
    if(event.which == 13) {
        event.preventDefault();
            searching();
    }
});

$('#searchBtn').on('click', searching());



function searching(){
    var result = $('#result')
    result.html('');
    var name = $('#inp').val();
    if(name.length === 0) {
        return;
    } 
    $.ajax({
        url: 'https://pixabay.com/api/',
        data: {
            key: '2752016-4fdc55509940bb2ec126f7894',
            q: name,
            callback: pixabayCallback(),
        },
        method: 'GET',
        dataType: 'jsonp',
        error: function(){
            alert('smth go wrong!');
        },
        success: function(data){
            var hits = data.hits;                
            for (var i = 0; i < hits.length; i++) {
                var url = hits[i].userImageURL;
                result.append('<li><img src="'+ url + '"></li>');          
            }

        },
    });
};


function Human() {
    this.name = 'humanName';
    this.age = 24;
    this.male = 'male';
    this.weight = 80;
    this.tall = 180;
}



function Worker() { 
    this.workplace = 'company',
    this.salary = 400
};

Worker.prototype = new Human();
Worker.prototype.getToWork = function(){
    alert('Working Hard');
}


function Student() {
    this.name = 'Boris',
    this.age = 18,
    this.male = 'male',
    this.weight = 60,
    this.tall = 170,
    this.scholarship = 100,
    this.univercity = 'КПИ'
}

Student.prototype = new Human();
Student.prototype.watchSerials = function(){
    alert('Watching Serials All Day!')
}

// var citizen1 = new Worker();
// console.log(citizen1);
// var citizen2 = new Worker();
// console.log(citizen2);
// var citizen3 = new Student();
// console.log(citizen3);
// var citizen4 = new Student();
// console.log(citizen4);
