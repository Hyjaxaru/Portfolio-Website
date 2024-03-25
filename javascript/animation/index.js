const gsap = window.gsap

const navLogo = document.querySelector(".nav-logo");
const navLinks = document.querySelectorAll(".nav-link");
const navTextShort = ["Home", "Bout", "Port", "Cont"];
const navTextLong = ["Home", "About", "Portfolio", "Contact"];

//* effects
document.addEventListener("DOMContentLoaded", (event) => {
    // register gsap plugins
    gsap.registerPlugin(ScrollTrigger,TextPlugin)

    // gsap timeline
    var intro = gsap.timeline(); // intro anim timeline

    // logo effect on load
    gsap.from(".nav-logo", { duration: 1, text: "" });

    // nav link effects on load
    navLinks.forEach((link, index) => {
        gsap.from(link, { text: navTextLong[index], duration: 0.25 } , (index/5+0.25));
    })

    // welcome section name effect on load
    intro.from(".title .header-name", { opacity: 0, fontSize: 128, text: "", duration: 2, ease: "power4.inOut" });
    intro.from(".title .header-pre", { opacity: 0, fontSize: 128, text: "", duration: 1, ease: "power4.inOut" }, "<0.5");

    intro.from(".title h2", { opacity: 0, y: 10, text:"" }, "<0.5");
    intro.from(".title img", { opacity: 0, y: 10 }, "<0.25");

    //* Scroll Effects
    // summary section
    gsap.from(".guarantee", { scrollTrigger: ".guarantee", duration: 1, y: 100, opacity: 0, ease: "power4.inOut" });

    // about section
    gsap.from(".about", { scrollTrigger: ".about img", duration: 1, y: 100, opacity: 0, ease: "power4.inOut" })
    gsap.from(".about p", { scrollTrigger: ".about", duration: 2, text: "", ease: "easeOut"})
});

//* Nav Links Hover Effects
navLinks.forEach((link, index) => {
    link.addEventListener("mouseover", () => {
        gsap.to(link, { duration: 0.25, text: navTextLong[index] }); 
    });

    link.addEventListener("mouseout", () => {
        gsap.to(link, { duration: 0.25, text: navTextShort[index] }); 
    });
})