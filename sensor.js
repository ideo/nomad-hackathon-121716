const Nomad = require('nomad-stream')
const moment = require('moment')
const nomad = new Nomad()

let instance = null
const birthdate = moment('2016-11-10')

function getMessage() {
	const message = `Hello from the Nomad beacon! Nomad was born ${birthdate.fromNow()} on ${birthdate.format('MMMM Do, YYYY')}. This message was sent at ${moment().format('h:mm a')}. It's a plain text message, but nodes can publish structured data too as stringified JSON.`

		return message
	}

nomad.prepareToPublish().then((n) => {
  instance = n
  return instance.publishRoot(getMessage())
}).then(() => {
  setInterval(() => {
    instance.publish(getMessage())
    .catch(err => {
      console.log(`Error: ${err}`)
    })
  }, 60000)  
})

// console.log(getMessage())