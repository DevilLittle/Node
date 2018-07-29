let express = require('express');

let app = express();


app.get('/',function (req,res) {
    res.send('hello,this is chart page');
});

app.listen(3000,function() {
    console.log('app is listening at port 3000');
});