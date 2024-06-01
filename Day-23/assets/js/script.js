const login = document.querySelector('.login');
const tabSignup = document.querySelector('.tabSignup');
const tabLogin = document.querySelector('.tabLogin');
const formLogin = document.querySelector('.formLogin');
const formSignup = document.querySelector('.formSignup');
const inputEmail = document.querySelectorAll('.inputEmail');
const inputPassword = document.querySelectorAll('.inputPassword');
const error = document.querySelectorAll('.error');
const errorEmailInfo = document.querySelector('.errorEmailInfo');
const errorEmailFormat = document.querySelector('.errorEmailFormat');
const errorPasswordInfo = document.querySelector('.errorPasswordInfo');
const iconClose = document.querySelector('.iconClose');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const loginEmail = document.querySelector('.loginEmail');
const passwordEmail = document.querySelector('.passwordEmail');

login.addEventListener('click', () => {
    modal.style.display = 'block';
});

overlay.addEventListener('click', () => {
    modal.style.display = 'none';
});

iconClose.addEventListener('click', () => {
    modal.style.display = 'none';
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

inputEmail.forEach((input) => {
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.style.borderColor = 'red';
            inputPassword.forEach((input) => {
                input.style.borderColor = 'red';
            });
            error.forEach((error) => {
                errorEmailInfo.style.display = 'block';
                errorPasswordInfo.style.display = 'block';
                errorEmailFormat.style.display = 'none';
            });
        } else {
            if (!validateEmail(input.value)) {
                error.forEach((error) => {
                    errorEmailInfo.style.display = 'none';
                    errorEmailFormat.style.display = 'block';
                });
            } else {
                input.style.borderColor = 'green';
                error.forEach((error) => {
                    errorEmailInfo.style.display = 'none';
                    errorEmailFormat.style.display = 'none';
                });
            }
        }
    });

    input.addEventListener('keyup', () => {
        console.log(input.value);
        if (input.value === '') {
            error.forEach((error) => {
                errorEmailInfo.style.display = 'block';
                errorEmailFormat.style.display = 'none';
            });
        } else {
            if (!validateEmail(input.value)) {
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
});

inputPassword.forEach((input) => {
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.style.borderColor = 'red';
            inputEmail.forEach((inputEmail) => {
                if (loginEmail.value === '') {
                    console.log(123);
                    input.style.borderColor = 'red';
                    error.forEach((error) => {
                        errorEmailInfo.style.display = 'block';
                        errorPasswordInfo.style.display = 'block';
                        errorEmailFormat.style.display = 'none';
                    });
                }
            });
        } else {
            input.style.borderColor = 'green';
        }
    });

    input.addEventListener('keyup', () => {
        if (input.value !== '') {
            error.forEach((error) => {
                errorPasswordInfo.style.display = 'none';
            });
        } else {
            error.forEach((error) => {
                errorPasswordInfo.style.display = 'block';
            });
        }
    });
});

formLogin.addEventListener('submit', (e) => {
    inputEmail.forEach((inputEmail) => {
        if (loginEmail.value === '') {
            e.preventDefault();
            inputEmail.style.borderColor = 'red';
            inputPassword.forEach((input) => {
                if (passwordEmail.value === '') {
                    input.style.borderColor = 'red';
                    error.forEach((error) => {
                        errorEmailInfo.style.display = 'block';
                        errorPasswordInfo.style.display = 'block';
                        errorEmailFormat.style.display = 'none';
                    });
                } else {
                    input.style.borderColor = 'green';
                    error.forEach((error) => {
                        errorEmailInfo.style.display = 'block';
                        errorPasswordInfo.style.display = 'none';
                        errorEmailFormat.style.display = 'none';
                    });
                }
            });
        }
        if (!validateEmail(loginEmail.value)) {
            e.preventDefault();
            inputEmail.style.borderColor = 'red';
            error.forEach((error) => {
                errorEmailInfo.style.display = 'none';
                errorEmailFormat.style.display = 'block';
            });
        }
    });

    // inputPassword.forEach((input) => {
    //     if (input.value === '') {
    //         input.style.borderColor = 'red';
    //         inputEmail.forEach((inputEmail) => {
    //             if (inputEmail.value === '') {
    //                 input.style.borderColor = 'red';
    //                 error.forEach((error) => {
    //                     errorEmailInfo.style.display = 'block';
    //                     errorPasswordInfo.style.display = 'block';
    //                     errorEmailFormat.style.display = 'none';
    //                 });
    //             }
    //         });
    //     } else {
    //         input.style.borderColor = 'green';
    //         errorPasswordInfo.style.display = 'block';
    //     }
    // });
});
