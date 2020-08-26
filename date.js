module.exports.getDate = function() {
  let today = new Date()
  let currentDay = today.getDay()
  //Formatting the date...
  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }
  return today.toLocaleDateString('en-US', options)

}

module.exports.getDay = function() {
  let today = new Date()
  let currentDay = today.getDay()
  //Formatting the date...
  let options = {
    weekday: 'long',
  }
  return today.toLocaleDateString('en-US', options)

}
