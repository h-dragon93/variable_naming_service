/**
 * Error 
 * sync-request not found
 */


/**
 * 
 * @param {string} query will be tralnslated String
 */
const translate = function (query) {
	let result = ''
	try {
		const request = getRequest()
		const option = createOption('nmt', query)
		const res = request('POST', option.url, option)

		result = pickUpResult(res.body)

	} catch (e) {
		console.log(e)
	}

	return result
}

/**
 * Check npm module is installed
 */
const getRequest = () => {
	let res
	try {
		res = require('sync-request')
	}
	catch (e) {
		throw Error(`sync-request module is not installed.\npleases install module 'npm install sync-request'`)
	}
	return res
}

/**
 * 
 * @param {string} field mode Only {nmt or smt}
 * @param {string} text Query String
 * @description 
 */
const createOption = (mode, text) => {
	return {
		url: 'https://openapi.naver.com/v1' + getModuleURL(mode),
		json: {
			'source': 'ko', 'target': 'en', 'text': text
		},
		headers: {
			'Content-Type': 'application/json',
			'User-Agnet': 'Mozilla/5.0',
			'X-Naver-Client-Id': '',		// 네이버(파파고)한테 요청 해야함 - API 
			'X-Naver-Client-Secret': '',	// 네이버(파파고)한테 요청 해야함 - API 
		}
	}
}

const getModuleURL = (mode) => {
	return mode === 'nmt' ? '/papago/n2mt' : '/language/translate'
}

const pickUpResult = (json) => {
	const jsonObject = JSON.parse(json)

	return jsonObject.message.result.translatedText
}

module.exports = translate