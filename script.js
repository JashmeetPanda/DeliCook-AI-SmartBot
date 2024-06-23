// Menu button toggle
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Navbar behavior on scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// FAQ accordion behavior
let boxes = document.querySelectorAll('.faq .box-container .box');

boxes.forEach(box => {
    let heading = box.querySelector('.head');
    let icon = box.querySelector('.head i');

    heading.onclick = () => {
        boxes.forEach(b => {
            if (b !== box) {
                b.classList.remove('active');
                b.querySelector('.head i').classList.replace('fa-minus', 'fa-plus');
            }
        });

        box.classList.toggle('active');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    };
});

// Loader fade-out
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setTimeout(loader, 3000);
}

 window.onload = fadeOut();
