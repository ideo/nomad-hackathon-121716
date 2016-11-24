const Nomad = require('nomad-stream')
const moment = require('moment')
const nomad = new Nomad()

let instance = null
const birthdate = moment('2016-11-10')

const publishFrequency = 5 * 60 * 1000

function getMessage() {
	const message = `Hello from the Nomad beacon!\nNomad was born ${birthdate.fromNow()} on ${birthdate.format('MMMM Do, YYYY')}.\nThis message was sent at ${moment().format('h:mm a')} UTC.\nIt's a plain text message, but nodes can publish structured data too as stringified JSON.`

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
  }, publishFrequency)  
})

// console.log(getMessage())