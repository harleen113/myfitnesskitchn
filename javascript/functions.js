const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})


let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementsByClassName("tablinks")[0].click();
  function validateForm() {
    let valid = true;
    const fields = ['firstName', 'lastName', 'streetAddress', 'city', 'state', 'postCode'];
    fields.forEach(field => {
      const input = document.getElementById(field);
      if (input.value.trim() === '') {
        input.style.borderColor = 'red';
        valid = false;
      } else {
        input.style.borderColor = '#ddd';
      }
    });
    return valid;
  }