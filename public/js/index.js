let suggestResults = document.getElementById("recommed-var-suggest-results");
let keyword = document.getElementById("recommend-var-keyword-value")
const varSendBtn = document.getElementById("var_send_btn");
const varTxt = document.getElementById("var_txt");
const varForm = document.getElementById("var_form");
const varRecommentUrl = "http://localhost:3000/";

const handleSendVar = function (target) {
	target.preventDefault();
	fetch(varRecommentUrl + `gettranslate?data=${varTxt.value}`)
		// fetch(varRecommentUrl, {
		//     method: "POST",
		//     body: {data: 'asdjhaskdjhas'}
		// })
		.then(function (response) {
			// console.log(varRecommentUrl + `?data=${varTxt.value}`);
			return response.text();
		})
		.then(function (text) {
			console.log(text);
			makeSuggest(text);
		});
};

const preventSubmit = function (target) {
	target.preventDefault();
}

const makeSuggest = function (text) {
	suggestResults.innerHTML = "";
	keyword.innerHTML = varTxt.value;
	let diva = document.createElement("div");

	let texts = JSON.parse(text);
	console.log(texts);
	console.log(typeof texts);
	for (let i = 0; i < texts.data.length; i++) {
		console.log("test", texts.data[i]);
		diva.innerHTML += texts.data[i] + "<br>";
	}
	suggestResults.appendChild(diva);
	// let suggest = document.createTextNode(text);
	// console.log(diva);
	// console.log(text);
	// console.log(text.data);
	// // diva.appendChild(suggest);
	// diva.innerHTML = text.data;
	// suggestResults.appendChild(diva);
}

function init() {
	// varForm.removeEventListener("submit", preventSubmit);
	varForm.addEventListener("submit", handleSendVar);
	varSendBtn.addEventListener("click", handleSendVar);
}

init();
