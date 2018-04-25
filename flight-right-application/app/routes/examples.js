var express = require('express');
var router = express.Router();

/* GET examples listing. */
router.get('/', function(req, res, next) {
    res.json([{
        name: 'headings',
        markdown: '# h1 example\n'+
            '## h2 example\n'+
            '### h3 example\n'+
            '#### h4 example\n'+
            '##### h5 example\n'+
            '###### h6 example\n',
    },
    {
        name: 'paragraphs',
        markdown: '## Paragraphs\n'+
            ' \n' +
            'On July 2, an alien mothership entered Earth\'s orbit and deployed several dozen saucer-shaped "destroyer" spacecraft, each 15 miles (24 km) wide. On July 3, the Black Knights, a squadron of Marine Corps F/A-18 Hornets, participated in an assault on a destroyer near the city of Los Angeles.\n' +
            ' \n' +
            'The implication of the “one or more consecutive lines of text” is that Showdown supports “hard-wrapped” text paragraphs. This means the following examples produce the same output:\n'+
            ' \n'+
            'A very long line of text\n'+
            ' \n'+
            'Another very long line\n',
    },
    {
        name: 'lists',
        markdown: ' - **why choose showdown?**\n' +
            ' - it\'s easy to use\n' +
            ' + it\'s extensible\n' +
            ' * works in the server and in the browser\n',
    }
    ]);
});

module.exports = router;