let express = require('express');
let cheerio = require('cheerio');
let superagent = require('superagent');

let app = express();


app.get('/', function (req, res,next) {

    superagent.get('http://cnodejs.org/')
        .end(function (err,sres) {
            if(err){
                return next(err);
            }

            let $ = cheerio.load(sres.text);

            let items = [];

            $('#topic_list .topic_title').each(function (index,element) {
                let $elemet = $(element);

                items.push({
                    title:$elemet.attr('title'),
                    href:$elemet.attr('href')
                });
            });

            res.send(items);

        });
});

app.listen(3000, function () {
    console.log('app is listening at port 3000')
});
