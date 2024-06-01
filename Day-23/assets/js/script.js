const login = document.querySelector('.login');
const tabSignup = document.querySelector('.tabSignup');
const tabLogin = document.querySelector('.tabLogin');
const formLogin = document.querySelector('.formLogin');
const formSignup = document.querySelector('.formSignup');
const error = document.querySelectorAll('.error');
const errorEmailInfo = document.querySelector('.errorEmailInfo');
const errorEmailFormat = document.querySelector('.errorEmailFormat');
const errorPasswordInfo = document.querySelector('.errorPasswordInfo');
const iconClose = document.querySelector('.iconClose');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const loginEmail = document.querySelector('.loginEmail');
const passwordEmail = document.querySelector('.passwordEmail');
const btnSignup = document.querySelector('.btnSignup');
const iconEyeSlash = document.querySelector('.iconEyeSlash');
const iconEye = document.querySelector('.iconEye');

login.addEventListener('click', () => {
    modal.style.display = 'block';
});

overlay.addEventListener('click', () => {
    modal.style.display = 'none';
});

iconClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

iconEyeSlash.addEventListener('click', () => {
    iconEyeSlash.style.display = 'none';
    iconEye.style.display = 'block';
    if (passwordEmail.type === 'password') {
        passwordEmail.type = 'text';
    } else {
        passwordEmail.type = 'password';
    }
});

iconEye.addEventListener('click', () => {
    iconEye.style.display = 'none';
    iconEyeSlash.style.display = 'block';
    if (passwordEmail.type === 'password') {
        passwordEmail.type = 'text';
    } else {
        passwordEmail.type = 'password';
    }
});

tabSignup.addEventListener('click', () => {
    formSignup.style.display = 'block';
    formLogin.style.display = 'none';
    inputEmail.forEach((input) => {
        input.style.borderColor = '';
    });
    inputPassword.forEach((input) => {
        console.log(123);
        input.style.borderColor = '';
    });
});

tabLogin.addEventListener('click', () => {
    formLogin.style.display = 'block';
    formSignup.style.display = 'none';
    inputEmail.forEach((input) => {
        input.style.borderColor = '';
    });
    inputPassword.forEach((input) => {
        console.log(123);
        input.style.borderColor = '';
    });
});

loginEmail.addEventListener('blur', () => {
    if (loginEmail.value === '') {
        loginEmail.style.borderColor = 'red';
        if (passwordEmail.value === '') {
            passwordEmail.style.borderColor = 'red';
            error.forEach((error) => {
                errorEmailInfo.style.display = 'block';
                errorPasswordInfo.style.display = 'block';
                errorEmailFormat.style.display = 'none';
            });
        } else {
            passwordEmail.style.borderColor = 'green';
            error.forEach((error) => {
                errorEmailInfo.style.display = 'block';
                errorPasswordInfo.style.display = 'none';
                errorEmailFormat.style.display = 'none';
            });
        }
    } else {
        if (!validateEmail(loginEmail.value)) {
            error.forEach((error) => {
                errorEmailInfo.style.display = 'none';
                errorEmailFormat.style.display = 'block';
            });
            if (passwordEmail.value === '') {
                passwordEmail.style.borderColor = 'red';
                error.forEach((error) => {
                    errorPasswordInfo.style.display = 'block';
                });
            }
        } else {
            loginEmail.style.borderColor = 'green';
            error.forEach((error) => {
                errorEmailInfo.style.display = 'none';
                errorEmailFormat.style.display = 'none';
            });
        }
    }
});

loginEmail.addEventListener('keyup', () => {
    if (loginEmail.value === '') {
        error.forEach((error) => {
            errorEmailInfo.style.display = 'block';
            errorEmailFormat.style.display = 'none';
        });
    } else {
        if (!validateEmail(loginEmail.value)) {
            error.forEach((error) => {
                errorEmailInfo.style.display = 'none';
                errorEmailFormat.style.display = 'block';
            });
        } else {
            error.forEach((error) => {
                errorEmailInfo.style.display = 'none';
                errorEmailFormat.style.display = 'none';
            });
        }
    }
});

passwordEmail.addEventListener('blur', () => {
    if (passwordEmail.value === '') {
        passwordEmail.style.borderColor = 'red';
        if (loginEmail.value === '') {
            loginEmail.style.borderColor = 'red';
            error.forEach((error) => {
                errorEmailInfo.style.display = 'block';
                errorPasswordInfo.style.display = 'block';
                errorEmailFormat.style.display = 'none';
            });
        }
    } else {
        passwordEmail.style.borderColor = 'green';
    }
});

passwordEmail.addEventListener('keyup', () => {
    if (passwordEmail.value !== '') {
        error.forEach((error) => {
            errorPasswordInfo.style.display = 'none';
        });
    } else {
        error.forEach((error) => {
            errorPasswordInfo.style.display = 'block';
        });
    }
});

formLogin.addEventListener('submit', (e) => {
    if (loginEmail.value === '') {
        e.preventDefault();
        loginEmail.style.borderColor = 'red';
        if (passwordEmail.value === '') {
            passwordEmail.style.borderColor = 'red';
            error.forEach((error) => {
                errorEmailInfo.style.display = 'block';
                errorPasswordInfo.style.display = 'block';
                errorEmailFormat.style.display = 'none';
            });
        } else {
            passwordEmail.style.borderColor = 'green';
            error.forEach((error) => {
                errorEmailInfo.style.display = 'block';
                errorPasswordInfo.style.display = 'none';
                errorEmailFormat.style.display = 'none';
            });
        }
    } else if (!validateEmail(loginEmail.value)) {
        e.preventDefault();
        loginEmail.style.borderColor = 'red';
        error.forEach((error) => {
            errorEmailInfo.style.display = 'none';
            errorEmailFormat.style.display = 'block';
        });
    }
});
