const gsap = window.gsap

const navLogo = document.querySelector(".nav-logo");
const navLinks = document.querySelectorAll(".nav-link");
const navTextShort = ["Home", "Bout", "Port", "Cont"];
const navTextLong = ["Home", "About", "Portfolio", "Contact"];

//* effects
document.addEventListener("DOMContentLoaded", (event) => {
    // register gsap plugins
    gsap.registerPlugin(ScrollTrigger,TextPlugin)

    // intro animation timeline
    var intro = gsap.timeline();

    // logo effect on load
    gsap.from(".nav-logo", { duration: 1, text: "" });


    // welcome section name effect on load
    intro.from(".title .header-name", { opacity: 0, fontSize: 128, text: "", duration: 2, ease: "power4.inOut" });
    intro.from(".title .header-pre", { opacity: 0, fontSize: 128, text: "", duration: 1, ease: "power4.inOut" }, "<0.5");

    intro.from(".title h2", { opacity: 0, y: 10, text:"" }, "<0.5");
    intro.from(".title img", { opacity: 0, y: 10 }, "<0.25");
});


//* Nav Links Hover Effects (only when screen is wide enough)
let mobile = window.matchMedia('(min-width: 650px)');
if (mobile.matches) {
    navLinks.forEach((link, index) => {
        link.addEventListener("mouseover", () => {
            gsap.to(link, { duration: 0.25, text: navTextLong[index] }); 
        });

        link.addEventListener("mouseout", () => {
            gsap.to(link, { duration: 0.25, text: navTextShort[index] }); 
        });
    });
};


//* Scroll Effects
// summary section
gsap.from(".guarantee", { scrollTrigger: ".guarantee", duration: 1, y: 100, opacity: 0, ease: "power4.inOut" });

// about section
gsap.from(".about img", { scrollTrigger: ".about", duration: 1, y: 100, opacity: 0, ease: "power4.inOut" });
gsap.from(".about h3", { scrollTrigger: ".about", duration: 1, text: "" });
gsap.from(".about p", { scrollTrigger: ".about", duration: 2, text: "", ease: "easeOut"});

// skills section
gsap.from(".skills p", { scrollTrigger: ".skills", duration: 2, text: "", ease: "easeOut"});
