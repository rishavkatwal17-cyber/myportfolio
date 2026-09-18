function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


/* Close mobile menu when a link is clicked */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});


/* Simple reveal animation */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.12
});


sections.forEach(function(section) {

    observer.observe(section);

});