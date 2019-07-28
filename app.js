var express = require('express');
var bodyParser = require('body-parser');

const trans = require("./translate.js");
const preprocess = require("./preprocessing.js");
const recommand = require("./recommand.js");

var app = express();

// setting
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// router
app.get('/', function (req, res) {
	// const data = req.query.data;
	res.send("index.html");

	// req.render("index.html");
	// res.json({ "data": data });
});

app.get('/gettranslate', function (req, res) {
	const data = req.query.data;
	const input = data;
	console.log("입력 값 : ", input)
	const preprocessing = preprocess.checkEngSpc(input);
	console.log("전처리 값 : ", preprocessing);
	const transValue = trans(preprocessing);
	console.log("번역된 값 : ", transValue);
	const recommanded = recommand.suggestion_word(transValue);
	// console.log(recommanded[0]);
	for (let i = 0; i < recommanded.length; i++) {
		console.log(`${i + 1} 번째 추천 변수 값 : ${recommanded[i]}`);
	}

	res.json({ data: recommanded });
});

// app.post('/', function (res, req) {
// 	console.log("res", req.body.values);
// 	res.send('<h1>please POST</h1>')
// 	// return "test";

// });

app.listen(3000, function () {
	console.log("connect 3000");
	// const input = "추천 알고리즘 value!$!@#@ 값";
	// console.log("입력 값 : ", input)
	// const preprocessing = preprocess.checkEngSpc(input);
	// console.log("전처리 값 : ", preprocessing);
	// const transValue = trans(preprocessing);
	// console.log("번역된 값 : ", transValue);
	// const recommanded = recommand.suggestion_word(transValue);
	// // console.log(recommanded[0]);
	// for (let i = 0; i < recommanded.length; i++) {
	// 	console.log(`${i + 1} 번째 추천 변수 값 : ${recommanded[i]}`);
	// }
});