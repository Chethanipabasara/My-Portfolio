const btn = document.getElementById("nav-toggle");
btn.addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

// Typing animation script
var typed = new Typed(".typing", {
    strings: ["Youtuber", "Web Developer", "Blogger","Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});




  