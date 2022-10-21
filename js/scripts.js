console.log("Hi! Welcome to my portfolio site!")
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }

  function changeImage()
{
var img = document.getElementById("img/Logo.svg");
img.src="img/LogoDark.svg";
return false;
}

  function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
  }