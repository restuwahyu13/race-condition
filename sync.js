let fs = require('fs/promises')
// let mutexify = require('mutexify/promise')
let { Mutex } = require('async-mutex')

async function asyncProcessWithMutexifyOrMutex() {
	try {
		// let lock = await mutexify()
		let mutex = new Mutex()

		let isRelease = await mutex.acquire()
		fs.readFile('index1.txt').then((data) => {
			console.log('asyncProcessWithMutexifyOrMutex - ' + data.toString() + ` - ${Date.now()}`)
			isRelease()
		})

		// isRelease = await lock()
		isRelease = await mutex.acquire()
		fs.readFile('index2.txt').then((data) => {
			console.log('asyncProcessWithMutexifyOrMutex - ' + data.toString() + ` - ${Date.now()}`)
			isRelease()
		})

		// isRelease = await lock()
		isRelease = await mutex.acquire()
		fs.readFile('index3.txt').then((data) => {
			console.log('asyncProcessWithMutexifyOrMutex - ' + data.toString() + ` - ${Date.now()}`)
			isRelease()
		})
	} catch (e) {
		console.error(e)
	}
}

setInterval(() => {
	asyncProcessWithMutexifyOrMutex()
	console.log('\n')
}, 1000)
