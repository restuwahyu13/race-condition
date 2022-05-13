let https = require('https')
let fs = require('fs')
let path = require('path')

/**
 * @description write file stream
 */

function writeStreamFile() {
	const url = 'https://res.cloudinary.com/coding-street-art/raw/upload/v1652407557/index_jaiwzj.txt'
	const writeFile = fs.createWriteStream(path.resolve(process.cwd(), 'index.txt'))

	https.get(url, async (res) => {
		res.pipe(writeFile)
	})
}

/**
 * @description read file stream
 */

function readStreamFile() {
	const read = fs.existsSync(path.resolve(process.cwd(), 'index.txt'))
	console.log(read)
}

/**
 * @description remove file stream
 */

function removeStreamFile() {
	fs.unlinkSync(path.resolve(process.cwd(), 'index.txt'))
}

;(async () => {
	writeStreamFile()
	readStreamFile()
	removeStreamFile()
})()
