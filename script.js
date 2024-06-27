function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    // That targets the element in the html code (SIGNAL)

    const icon = document.querySelector("hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

}