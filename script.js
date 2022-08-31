let nameRegExp = /^[A-Za-z]{2,20}$/;
let emailRegExp = /^[A-Za-z0-9.-]+@{1}[a-z]{3,}\.[a-z]{2,4}$/;
let passRegExp = /^\w{8,15}$/

let testName;
let testLastName;
let testEmail;
let testPass;
let f1 = document.forms.f1;

f1.elements[0].addEventListener('input', function () {
    testName = nameRegExp.test(f1.elements[0].value);
    if (testName) {
        correct()
    } else {
        incorrect();
    }
})
f1.elements[1].addEventListener('input', function () {
    testLastName = nameRegExp.test(f1.elements[1].value);
    if (testLastName) {
        correct()
    } else {
        incorrect();
    }
})
f1.elements[2].addEventListener('input', function () {
    testEmail = emailRegExp.test(f1.elements[2].value);
    if (testEmail) {
        correct()
    } else {
        incorrect();
    }
})
f1.elements[3].addEventListener('input', function () {
    testPass = passRegExp.test(f1.elements[3].value);
    if (testPass) {
        correct()
    } else {
        incorrect();
    }
})

function correct() {
    event.target.style.border = '3px solid green';
    event.target.parentElement.classList.add('tick');
    event.target.parentElement.classList.remove('cross');
}

function incorrect() {
    event.target.style.border = 'none';
    event.target.parentElement.classList.remove('tick');
    event.target.parentElement.classList.add('cross');

}
f1.agree.addEventListener('click', function () {
    if (testName && testLastName && testEmail && testPass) {
        f1.button.disabled = false;
        f1.button.style.backgroundColor = 'rgb(12, 141, 12)'
    } else {
        f1.button.disabled = true;
        f1.button.style.backgroundColor = 'rgb(31, 182, 182)'
    }
})

f1.button.addEventListener('click', function () {
    event.preventDefault();
    document.querySelector('.block').style.display = 'flex'
    document.body.style.backgroundColor = 'rgba(111, 122, 150, 0.23)'

})
document.querySelector('.start').addEventListener('click', function () {
    document.querySelector('.block').style.display = 'none';
    f1.reset();
    document.body.style.backgroundColor = 'white';
    for (i = 1; i <= 4; i++) {
        f1.children[i].classList.remove('tick');
        f1.children[i].firstElementChild.style.border = '1px solid black';
    }
    f1.button.disabled = true;
    f1.button.style.backgroundColor = 'rgb(31, 182, 182)';
    testName = false;
    testLastName = false;
    testEmail = false;
    testPass = false;
})