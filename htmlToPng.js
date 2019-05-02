var express = require('express');
var bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
var crypto = require('crypto');

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.post('/htmlToPng', function (req, res) {
    var body = req.body;
    var url = body.url;

    var md5 = crypto.createHash('md5');
    var fileName = md5.update(url).digest('hex');

    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await page.screenshot({path: 'public/img/' + fileName + '.png'});
        await browser.close();
    })();

    res.send({
        fileName: fileName
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})