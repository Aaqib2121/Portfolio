/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

/*========== Show skills section ==========*/
// Define skills data
const skillsData = [
    {
        category: "Frontend Development",
        skills: [
            { name: "HTML", percentage: 90, color: "#ff6347" },
            { name: "CSS", percentage: 85, color: "#4682b4" },
            { name: "JavaScript", percentage: 80, color: "#32cd32" },
            { name: "React.js", percentage: 75, color: "#ff8c00" }
            // Add more frontend skills as needed
        ]
    },
    {
        category: "Backend Development",
        skills: [
            { name: "Node.js", percentage: 85, color: "#ff6347" },
            { name: "Express.js", percentage: 80, color: "#4682b4" },
            { name: "MongoDB", percentage: 75, color: "#32cd32" }
            // Add more backend skills as needed
        ]
    },
    {
        category: "Other Skills",
        skills: [
            { name: "UI/UX Design", percentage: 90, color: "#ff6347" },
            { name: "Responsive Design", percentage: 85, color: "#4682b4" },
            { name: "Version Control (Git)", percentage: 80, color: "#32cd32" }
            // Add more other skills as needed
        ]
    }
];

// Function to generate HTML for skills
function generateSkillsHTML(skills) {
    return skills.map(skill => `
        <li>
            <h2>${skill.name}</h2>
            <div class="progress-bar" style="--percentage: ${skill.percentage}%; background-color: ${skill.color}; animation: fillAnimation 1s ease forwards;"></div>
            <div class="progress">${skill.percentage}%</div>
        </li>
    `).join('');
}

// Function to display skills
function displaySkills() {
    const frontendSkills = document.getElementById('frontend-skills');
    const backendSkills = document.getElementById('backend-skills');
    const otherSkills = document.getElementById('other-skills');

    skillsData.forEach(category => {
        if (category.category === 'Frontend Development') {
            frontendSkills.innerHTML = generateSkillsHTML(category.skills);
        } else if (category.category === 'Backend Development') {
            backendSkills.innerHTML = generateSkillsHTML(category.skills);
        } else if (category.category === 'Other Skills') {
            otherSkills.innerHTML = generateSkillsHTML(category.skills);
        }
    });
}

// Display skills when the page is loaded
window.onload = displaySkills;


  

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });