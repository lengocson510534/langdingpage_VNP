const menu = document.querySelector('.menu')
const toggle = document.querySelector('.menu-toggle')
const toggleClose = document.querySelector('.toggle-close')

toggle.addEventListener('click', () => {
  menu.style.transform = '0'
  menu.classList.add("active")
})

toggleClose.addEventListener('click', () => {
  menu.classList.remove("active")
})