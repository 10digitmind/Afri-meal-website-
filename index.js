const toggle = document.querySelector('.burger')
const navbarLinks =document.querySelector('.nav-links')
const navBar= document.getElementById('nav')




toggle.addEventListener("click", function(){
  navbarLinks.classList.toggle('nav-active')
  toggle.classList.toggle('toggle')

})




