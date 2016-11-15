const Nomad = require('nomad-stream')
const moment = require('moment')
const nomad = new Nomad()

let instance = null

function getMessage(name) {
	return `${name} is awesome`
}

nomad.prepareToPublish().then((n) => {
  instance = n
  return instance.publishRoot('hello')
}).then(() => {
	nomad.subscribe(['QmQRft1pewqjDGbUYQBZwmQ2GNX99djVGTKfPf8XJWKB2P'], function(message) {
		// console.log(message.message)
		instance.publish(getMessage(message.message))
	})
})

// console.log(getMessage())