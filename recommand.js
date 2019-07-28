function removeAlphabet(str) {
	let check_list = ['a', 'e', 'i', 'o', 'u'];
	let new_word = str.charAt(0);
	for (var i = 1; i < str.length; i++) {
		if (!check_list.some(function (element) {
			return str.charAt(i) == element;
		})) new_word += str.charAt(i);
		else if (str.charAt(i - 1) == ' ')
			new_word += str.charAt(i);
	}
	return new_word;
}


function blank_index(str) {
	Tostring = str
	let index = 0; const blank_arr = []
	str.forEach((Tostring) => {
		if (Tostring === ' ')
			blank_arr.push(index)
		index++;
	})
	return blank_arr;
}

function noBlank(str) {
	str = str.replace(/(\s*)/gi, "");
	return str;
}

function changeCamel(changeString) {
	changeString = removeArticle(changeString)
	changeString_arr = changeString.split("");
	changeString_arr[0] = changeString_arr[0].toLowerCase();
	blank = blank_index(changeString_arr);
	for (let i = 0; i < blank.length; i++)
		changeString_arr[blank[i] + 1] = changeString_arr[blank[i] + 1].toUpperCase()
	changeString = changeString_arr.join('');
	changeString = noBlank(changeString);
	return changeString;
}


function popularShortcut(input) {
	let popular_long = ['string', 'temp', 'value', 'accumulate', 'current',
		'index', 'array', 'function'];
	let poplular_short = ['str', 'tmp', 'val', 'acc', 'cur', 'idx', 'arr', 'func'];
	for (let i = 0; i < popular_long.length; i++) {
		if (input == popular_long[i]) {
			return poplular_short[i];
		}
	}
	return '!';
}

function makeShort(str) {
	let new_word = '';
	let input_arr = str.split(" ");
	for (let i = 0; i < input_arr.length; i++) {
		if (popularShortcut(input_arr[i]) == '!') {
			input_arr[i] = removeAlphabet(input_arr[i]);
		} else input_arr[i] = popularShortcut(input_arr[i]);
		new_word += input_arr[i] + " ";
	}
	return new_word.substr(0, new_word.length - 1);
}

function removeArticle(input) {
	input = input.toLowerCase();
	//관사 및 전치사 모음
	const article = ['a', 'an', 'the', 'of', 'to', 'in', 'on', 'beyond', 'under', 'above', 'at',
		'about', 'after', 'against', 'along', 'around', 'at', 'beside', 'beneath',
		'between', 'but', 'by', 'down', 'during', 'for', 'from', 'into', 'off', 'out',
		'over', 'per', 'round', 'since', 'through', 'till', 'toward', 'until', 'up',
		'upon', 'with', 'within', 'without'];

	const word = input.split(" ");
	let result = word.reduce((acc, cur) => {
		if (!article.some(val => { return cur === val })) {
			return acc + cur + ' ';
		}
		else return acc;
	}, ``);

	return result.substr(0, result.length - 1);
}


//언더라인 추가
function addUnderline(input) {
	let result = input.split(" ").join("_");
	return result;
}

var str = "Fast train the ride"
function suggestion_word(str) {
	result = [];
	result.push(addUnderline(removeArticle(str)));
	result.push(changeCamel(removeArticle(str)));
	result.push(addUnderline(makeShort(removeArticle(str))));
	result.push(changeCamel(makeShort(removeArticle(str))));

	return result;
}
// console.log(suggestion_word(str));

module.exports = {
	suggestion_word
}