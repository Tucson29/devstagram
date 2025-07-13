const about_button = document.getElementById("about-button")
const experience_button = document.getElementById("experience-button")
const navbar = document.querySelector(".navbar")

about_button.addEventListener("click", navbarfade)
experience_button.addEventListener("click", navbarfade)
let lastScrollY = window.scrollY;
const body = document.body;

function navbarfade(){
    

    navbar.classList.remove("animate-fade");
    void navbar.offsetWidth;

    navbar.classList.add("animate-fade");
}


window.addEventListener("scroll", () => {
if (window.scrollY > 100 && window.scrollY > lastScrollY) {
  navbar.classList.add("floating");
} else if (window.scrollY < 100 && window.scrollY < lastScrollY) {
    // Scrolling up
    navbar.classList.remove("floating");
}

lastScrollY = window.scrollY;
});


function toggleTheme(e){
    const current = body.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);

    // Optional: save preference
    localStorage.setItem('theme', newTheme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
}