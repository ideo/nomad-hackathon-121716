const Nomad = require('nomad-stream')
const nomad = new Nomad()

nomad.subscribe(['QmQRft1pewqjDGbUYQBZwmQ2GNX99djVGTKfPf8XJWKB2P'], function(message) {
	console.log(message.message)
})