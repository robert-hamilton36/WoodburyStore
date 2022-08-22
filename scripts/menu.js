let menuJson 

const wrapper = document.getElementById("menuWrapper")

fetch('data/menu.json')
.then(response => response.json())
.then(data => {
  if (data.breakfast) {
    wrapper.appendChild(createHeader('Breakfast'))
    data.breakfast.forEach(menuItem => {
      wrapper.appendChild(createMenuItem(menuItem))
    })
  }

  if (data.lunch) {
    wrapper.appendChild(createHeader('Lunch'))
    data.lunch.forEach(menuItem => {
      wrapper.appendChild(createMenuItem(menuItem))
    })
  }

  if (data.cabinet) {
    wrapper.appendChild(createHeader('Cabinet'))
    data.cabinet.forEach(menuItem => {
      wrapper.appendChild(createMenuItem(menuItem))
    })
  }
})

const createHeader = (headerText) => {
  const headerTitle = document.createElement('h1')
  headerTitle.textContent = headerText
  headerTitle.setAttribute('class', 'menuHeader')
  return headerTitle
}

const createTitleSpan = (title) => {
  const strongTitle = document.createElement('strong')
  strongTitle.textContent = title

  const titleSpan = document.createElement('span')
  titleSpan.setAttribute('class', 'menuItem-title')

  titleSpan.appendChild(strongTitle)
  return strongTitle
}

const createPriceSpan = (price) => {
  const priceSpan = document.createElement('span')
  priceSpan.setAttribute('class', 'menuItem-price')
  priceSpan.textContent = price

  return priceSpan
}

const createDescriptionP = (description) => {
  const descriptionP = document.createElement('p')
  descriptionP.setAttribute('class', 'menuItem-description')
  descriptionP.textContent = description

  return descriptionP
}

const createOptionsUl = (options) => {
  const optionUl = document.createElement('ul')
  optionUl.setAttribute('class', 'menuItem-options')

  options.forEach(option => {
    const liItem = document.createElement("li")
    liItem.textContent = option
    optionUl.appendChild(liItem)
  })

  return optionUl
}

const createMenuItem = ({item, price, description, options}) => {
  const menuItem = document.createElement("div")
  menuItem.setAttribute('class', 'menuItem')

  menuItem.appendChild(createTitleSpan(item))
  menuItem.appendChild(createPriceSpan(price))
  menuItem.appendChild(createDescriptionP(description))
  menuItem.appendChild(createOptionsUl(options))

  return menuItem
}