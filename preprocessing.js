function checkEngSpc(words) {
	let wordsArr = words.split(" ");
	const patternEng = /[a-zA-z]/;
	const patternSpc = /[~!@#$%^&*()_+|<>?:{}]/;
	wordsArr.forEach((word, index) => {
		if (patternEng.test(word) || patternSpc.test(word)) {
			wordsArr[index] = checkChar(word);
		}
	});
	return wordsArr.join(' ');
}

function checkChar(word) {
	let wordArr = word.split("");
	const patternEng = /[a-zA-z]/;
	const patternSpc = /[~!@#$%^&*()_+|<>?:{}]/;
	wordArr.forEach((word, index) => {
		if (patternEng.test(word) || patternSpc.test(word)) {
			wordArr[index] = '';
		}
	});
	return wordArr.join('');
}

module.exports = {
	checkEngSpc
}