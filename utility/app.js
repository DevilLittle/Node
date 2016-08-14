let express=require('express');
let utility=require('utility');

let app=express();

app.get('/',function (req,res) {
    let q=utility.query.q;

    let md5Value=utility.md5(q);
    res.send(md5Value);
});

app.listen(3000,function (req,res) {
    console.log('app is listening port 3000');
});