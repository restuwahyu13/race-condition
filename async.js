let fs = require('fs/promises')

async function asyncProcessWithMutexifyOrMutex() {
	try {
		fs.readFile('index1.txt').then((data) => {
			console.log('asyncProcessWithMutexifyOrMutex - ' + data.toString() + ` - ${Date.now()}`)
		})

		fs.readFile('index2.txt').then((data) => {
			console.log('asyncProcessWithMutexifyOrMutex - ' + data.toString() + ` - ${Date.now()}`)
		})

		fs.readFile('index3.txt').then((data) => {
			console.log('asyncProcessWithMutexifyOrMutex - ' + data.toString() + ` - ${Date.now()}`)
		})
	} catch (e) {
		console.error(e)
	}
}

setInterval(() => {
	asyncProcessWithMutexifyOrMutex()
	console.log('\n')
}, 1000)
