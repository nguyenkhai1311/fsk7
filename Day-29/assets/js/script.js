var iconLeft = document.querySelector('.iconLeft');
var iconRight = document.querySelector('.iconRight');
var imgCarousel = document.querySelector('.imgCarousel');
var imgs = document.querySelectorAll('.imgCarousel img');
var dot = document.querySelector('.dots');
var dots = document.querySelectorAll('.dot');

var count = 0;
var widthCarousel = imgCarousel.clientWidth;
var initialX = 0;
var initialTransform = 0;
var widthImg = 0;
var initialWidth = 0;

iconLeft.addEventListener('click', function () {
    if (count >= 1) {
        var dotActive = document.querySelector('.dot.active');
        console.log(count);
        count--;
        widthImg += widthCarousel;
        dot.children[count].classList.add('active');
        imgCarousel.style.transform = `translateX(${widthImg}px)`;

        if (dotActive) {
            dotActive.classList.remove('active');
        }
    }
});

iconRight.addEventListener('click', function () {
    if (count < imgs.length - 1) {
        var dotActive = document.querySelector('.dot.active');

        count++;
        widthImg -= widthCarousel;
        dot.children[count].classList.add('active');
        imgCarousel.style.transform = `translateX(${widthImg}px)`;

        if (dotActive) {
            dotActive.classList.remove('active');
        }
    }
});

dots.forEach((item, index) => {
    item.addEventListener('click', function () {
        var dotActive = document.querySelector('.dot.active');

        widthImg = widthCarousel * index;
        count = index;
        dot.children[count].classList.add('active');
        imgCarousel.style.transform = `translateX(-${widthImg}px)`;

        if (dotActive) {
            dotActive.classList.remove('active');
        }
    });
});

// imgs.forEach((img) => {
//     img.addEventListener('mousedown', function (e) {
//         e.preventDefault();
//         // initialX = -e.clientX - widthCarousel * count;
//         initialX = e.clientX;
//         document.body.addEventListener('mousemove', handleDrag);
//     });

//     img.addEventListener('mouseup', function (s) {
//         // img.style.cursor = 'default';
//         // initialWidth = -widthCarousel * (count + 1);
//         // const widthSlider = s.clientX - initialX;
//         // var dotActive = document.querySelector('.dot.active');

//         // if (-widthSlider > (widthImg + initialWidth) / 2) {
//         //     if (count >= 1) {
//         //         console.log(count);
//         //         console.log('Đẩy vào');
//         //         imgCarousel.style.transform = `translateX(${
//         //             widthImg - widthCarousel * (count + 1)
//         //         }px)`;
//         //         imgCarousel.style.transition = 'all ease 0.75s';

//         //         count--;
//         //         dot.children[count].classList.add('active');

//         //         if (dotActive) {
//         //             dotActive.classList.remove('active');
//         //         }
//         //     } else {
//         //         imgCarousel.style.transform = `translateX(${widthImg}px)`;
//         //         imgCarousel.style.transition = 'all ease 0.75s';
//         //     }
//         // } else {
//         // }

//         document.body.removeEventListener('mousemove', handleDrag);
//     });

//     var handleDrag = (s) => {
//         // img.style.cursor = 'move';
//         // initialWidth = -widthCarousel * (count + 1);
//         // const widthSlider = s.clientX - initialX - widthCarousel * count;
//         // imgCarousel.style.transform = `translateX(${widthSlider}px)`;
//         // imgCarousel.style.transition = 'none';
//         // if (-widthSlider < (widthImg + initialWidth) / 2) {
//         //     if (count >= 1) {
//         //         console.log('Đẩy vào');
//         //         imgCarousel.style.transform = `translateX(${
//         //             widthImg - widthCarousel * (count + 1)
//         //         }px)`;
//         //         imgCarousel.style.transition = 'all ease 0.75s';
//         //         count--;
//         //         dot.children[count].classList.add('active');
//         //         if (dotActive) {
//         //             dotActive.classList.remove('active');
//         //         }
//         //     } else {
//         //         imgCarousel.style.transform = `translateX(${widthImg}px)`;
//         //         imgCarousel.style.transition = 'all ease 0.75s';
//         //     }
//         // }
//     };
// });
