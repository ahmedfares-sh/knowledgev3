let headIcon = document.getElementById("headicon");
let myListNav = document.getElementById("headlist");

headIcon.onclick = () => {
  let headerWidth = document.querySelector("header .logo").clientWidth * -1;
  let x = document.body.clientWidth;
  myListNav.style.width = `${x}px`;
  myListNav.style.setProperty("width", `${x}`, "important");
  myListNav.style.setProperty(
    "transform",
    `translateX(${headerWidth}px)`,
    "important"
  );
  document.getElementById("headlist").classList.toggle("non-display");
  document.getElementById("headlist").classList.toggle("block-display");
};

document.getElementById("icon-dia").onclick = () => {
  document.getElementById("diag-list").classList.toggle("non1-display");
  document.getElementById("diag-list").classList.toggle("block1-display");
};

/*preson child hood*/

document.getElementById("icon-clinic").onclick = () => {
  document
    .getElementById("clinic-aspect-list")
    .classList.toggle("non1-display");
  document
    .getElementById("clinic-aspect-list")
    .classList.toggle("block1-display");
};

