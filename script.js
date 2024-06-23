let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

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
        if (icon.classList.contains('fa-plus')) {
            icon.classList.replace('fa-plus', 'fa-minus');
        } else {
            icon.classList.replace('fa-minus', 'fa-plus');
        }
    }
});
