function toggleMenu() {
    var menu = document.getElementById("menu");
    var icon = document.querySelector(".menu-icon");
  
    if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    icon.classList.remove("open");
    } else {
    menu.classList.add("open");
    icon.classList.add("open");
    }

    var plates= document.querySelectorAll(".plate");
    plates.forEach(plate => {
        plate.classList.remove("open");
    });
  }
function togglePlate(event) {
    var btn = event.target;
    var plate = btn.nextElementSibling;
    plate.classList.add("open");
}
function exitPlate(event) {
    var btn = event.target;
    var plate = btn.parentElement;
    plate.classList.remove("open");
}
