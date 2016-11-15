const Nomad = require('nomad-stream')
const nomad = new Nomad()

const names = ['Eric', 'Reid', 'Brett', 'Adam', 'Trecker', 'Gav']
let instance = null

function getMessage() {
	const index = Math.floor(Math.random() * names.length)
	return names[index]
}

nomad.prepareToPublish().then((n) => {
  instance = n
  return instance.publishRoot('hello')
}).then(() => {
	setInterval(() => {
		instance.publish(getMessage())
	}, 15000)
})

// console.log(getMessage())