const wrapper = document.getElementById("time")

fetch('data/openingHours.json')
  .then(response => response.json())
  .then(data => {
    if (data.holidayHours) {
      wrapper.appendChild(createHoursDisplay(data.holidayHours, "Holiday Hours"))
    }
    wrapper.appendChild(createHoursDisplay(data.regularHours, "Hours"))

  })

const createDayTimeP = (day, time) => {
  const dayTimeP = document.createElement("p")
  dayTimeP.textContent = day + ": " + time

  return dayTimeP
}

const createHoursDisplay = (hours, hoursHeaderContent) => {
  const hoursDiv = document.createElement("div")
  hoursDiv.setAttribute('class', 'hours')

  const header = document.createElement("h2")
  header.textContent = hoursHeaderContent

  hoursDiv.appendChild(header)

  for (let key in hours) {
    hoursDiv.appendChild(createDayTimeP(key, hours[key]))
  }

  return hoursDiv
}