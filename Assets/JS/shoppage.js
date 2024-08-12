
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () =>{
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]")
    .querySelector('[data-slides]')

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})



const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
  
}

const disableDarkmode = () => {
  if(darkmode === "active") enableDarkmode()
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}


let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})