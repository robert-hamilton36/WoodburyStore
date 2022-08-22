const wrapper = document.getElementById("eventsWrapper")
const customEvent = document.getElementById('customEvent')

fetch('data/events.json')
.then(response => response.json())
.then(data => {
  data.events.forEach(event => {
    wrapper.insertBefore(createEventItem(event), customEvent)
  })
})

const createEventItem = ({title, when, description, photoSrc}) => {
  const eventItemDiv = document.createElement('div')
  eventItemDiv.setAttribute('class', 'eventItem')

  if (title) {
    eventItemDiv.appendChild(createHeader(title))
  }
  if (when) {
    eventItemDiv.appendChild(createWhen(when))
  }
  if (description) {
    description.forEach(description =>{
      return eventItemDiv.appendChild(createDescription(description))
    })
  }
  if (photoSrc) {
    eventItemDiv.appendChild(createImg(photoSrc))
  }

  return eventItemDiv
}

const createHeader = (title) => {
  const titleH1 = document.createElement('h1')
  titleH1.textContent = title

  return titleH1
}

const createWhen = (when) => {
  const whenH4 = document.createElement('h4')
  whenH4.textContent = when

  return whenH4
}

const createDescription = (description) => {
  const descriptionP = document.createElement('p')
  descriptionP.textContent = description

  return descriptionP
}

const createImg = (photoSrc) => {
  const photoImg = document.createElement('img')
  photoImg.setAttribute('src', photoSrc)
  photoImg.setAttribute('class', 'eventImg')

  return photoImg
}