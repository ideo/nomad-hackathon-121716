const Nomad = require('nomad-stream')
const moment = require('moment')

const nomad = new Nomad()
const publishFrequency = 5 * 60 * 1000 // every 5 minutes

let instance = null

const getLatestMessage = () => {
  const now = moment().format('MMMM Do YYYY, h:mm:ss a').toString()
	return `Hello from Nomad on ${now}`
}

nomad.prepareToPublish()
  .then((node) => {
    instance = node
    return instance.publishRoot(getLatestMessage())
  }).then(() => {
    setInterval(() => {
      instance
        .publish(getLatestMessage())
        .catch(err => console.log(`Error: ${err}`))
    }, publishFrequency)
  })
