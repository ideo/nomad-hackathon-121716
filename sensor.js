const Nomad = require('nomad-stream')
const nomad = new Nomad()

let instance = null

nomad.prepareToPublish().then((n) => {
  instance = n
  return instance.publishRoot('hello')
}).then(() => {
  setInterval(() => {
    instance.publish(new Date().toString())
    .catch(err => {
      console.log(`Error: ${err}`)
    })
  }, 15000)  
})