var changes = document.querySelectorAll('.change');
var box = document.querySelector('#box');
var shapes = document.getElementsByClassName('shape');
changes[0].addEventListener('click', function () {
    changes[0].classList.toggle('active');
    box.classList.toggle('active');
});
changes[1].addEventListener('click', function () {
    changes[1].classList.toggle('active');
    shapes[0].classList.toggle('active');
});