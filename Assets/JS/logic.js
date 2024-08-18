/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
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

  //Admin login
  const adminModal = document.getElementById('admin-modal');
  if (adminModal) {
    adminModal.addEventListener('click', (event) => {
      const password = prompt('Please enter the password:');
      if (password === 'password1234') {
        window.location.href = 'admin.html';
      } else {
        alert('Invalid password');
        event.preventDefault();
      }
    });
  }

