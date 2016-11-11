const Nomad = require('nomad-stream')
const moment = require('moment')
const nomad = new Nomad()

let instance = null
const election = moment('2020-11-03')

const millisPerYear = 1000*60*60*24*365
const millisPerMonth = 1000*60*60*24*30
const millisPerDay = 1000*60*60*24
const millisPerHour = 1000*60*60
const millisPerMinute = 1000*60
const millisPerSecond = 1000

function getMessage() {
	let difference = election - moment()
	const years = Math.floor(difference / millisPerYear)

	difference = difference - years*millisPerYear
	const months = Math.floor(difference / millisPerMonth)

	difference = difference - months*millisPerMonth
	const days = Math.floor(difference / millisPerDay)

	difference = difference - days*millisPerDay
	const hours = Math.floor(difference / millisPerHour)

	difference = difference - hours*millisPerHour
	const minutes = Math.floor(difference / millisPerMinute)

	difference = difference - minutes*millisPerMinute
	const seconds = Math.floor(difference / millisPerSecond)

	return {
		years,
		months,
		days,
		hours,
		minutes,
		seconds
	}
}

nomad.prepareToPublish().then((n) => {
  instance = n
  return instance.publishRoot('hello')
}).then(() => {
  setInterval(() => {
    instance.publish(getMessage())
    .catch(err => {
      console.log(`Error: ${err}`)
    })
  }, 15000)  
})

// console.log(getMessage())