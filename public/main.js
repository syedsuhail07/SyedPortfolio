/*=========================  About ReadMore button JS   =============================*/

document.getElementById('read-more-btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('about-text-short').style.display = 'none';
    document.getElementById('about-text-full').style.display = 'block';
    document.getElementById('read-more-btn').style.display = 'none';
});

/*=============================  toggle icon navbar  =========================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


/*=============================  scroll section active link  =========================================*/


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollv;
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

 
/*==================================  Sticky navbar  =================================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', windown.scrollv > 100);

/*================================  remove toggle icon and navbar  =====================================*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

}; 


/*=========================   Services ReadMore button JS   =============================*/

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.read-more').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); 
            const targetId = this.getAttribute('data-target');
            document.getElementById(`${targetId}-short`).style.display = 'none';
            document.getElementById(`${targetId}-full`).style.display = 'block';
            this.style.display = 'none';
        });
    });
});


/*=========================   Form validation JS   =============================*/
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var fullName = document.getElementById('fullname').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    if (fullName === '' || email === '' || phone === '' || message === '') {
        alert('Please fill in all required fields.');
        return;
    }
    this.submit();
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    this.reset();
});


/*==================================  Scroll reveal  =================================*/
// Initialize ScrollReveal with default settings
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Reveal elements with specified origins
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*==================================  typed js  =================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'DevOps Engineer', 'Cloud Engineer'],
    typeSpeed: 70,
    backSpeed: 0, 
    backDelay: 1000,
    loop: true,
    onComplete: function(self) {
        setTimeout(function() {
            self.reset(); 
        });
    }
});


