
const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('#menu a');


function removeActiveClasses() {
    menuLinks.forEach(link => link.classList.remove('active-page'));
}


function setActiveMenu(id) {
    removeActiveClasses();
    const activeLink = document.querySelector(`#menu a[href="#${id}"]`);
    if (activeLink) {
        activeLink.classList.add('active-page');
    }
}


const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActiveMenu(entry.target.id);
        }
    });
}, observerOptions);


sections.forEach(section => observer.observe(section));


window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        setActiveMenu('about');
    }
});


menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        removeActiveClasses();
        this.classList.add('active-page');
    });
});
