var navContainer = document.getElementById("slider-nav");

var navBtns = navContainer.getElementsByClassName("slider-nav__label");

for (var i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}