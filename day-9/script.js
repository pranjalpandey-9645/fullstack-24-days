let myObject = document.querySelector('.box'),
    btn1 = document.querySelector('button'),
    btn2 = document.querySelectorAll('button')[1];

btn1.addEventListener('click', function () {
    myObject.classList.add('box-animate');
    this.disabled = true;
    btn2.disabled = false;
}, false);

btn2.addEventListener('click', function () {
    myObject.classList.remove('box-animate');
    this.disabled = true;
    btn1.disabled = false;
}, false);