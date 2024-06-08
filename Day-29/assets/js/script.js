var iconLeft = document.querySelector('.iconLeft');
var iconRight = document.querySelector('.iconRight');
var imgCarousel = document.querySelector('.imgCarousel');
var imgs = document.querySelectorAll('.imgCarousel img');
var dot = document.querySelector('.dots');
var dots = document.querySelectorAll('.dot');

var count = 0;
var widthCarousel = imgCarousel.clientWidth;
var initialOffsetX = 0;
var initialTransform = 0;
var widthImg = 0;

iconLeft.addEventListener('click', function () {
    if (count >= 1) {
        var dotActive = document.querySelector('.dot.active');
        console.log(count);
        count--;
        widthImg += widthCarousel;
        console.log(widthImg);
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

imgs.forEach((img) => {
    img.addEventListener('mousedown', function (e) {
        e.preventDefault();
        initialOffsetX = e.clientX;
        document.body.addEventListener('mousemove', handleDrag);
    });

    img.addEventListener('mouseup', function (e) {
        img.style.cursor = 'default';
        widthImg = widthCarousel * (count - 1);
        console.log('width', widthImg);
        console.log('client', e.clientX);
        console.log('initial', initialTransform);
        if (e.clientX > widthImg) {
            imgCarousel.style.transform = `translateX(${widthImg}px)`;
            imgCarousel.style.transition = 'all ease 0.75s';
        } else {
            // initialTransform =
            //     initialOffsetX - e.clientX + widthCarousel * count;
            imgCarousel.style.transform = `translateX(-${widthImg}px)`;
            imgCarousel.style.transition = 'all ease 0.75s';
        }
        document.body.removeEventListener('mousemove', handleDrag);
    });

    var handleDrag = (e) => {
        img.style.cursor = 'move';
        widthImg = widthCarousel * count;
        console.log(widthImg);
        console.log(e.clientX);
        if (e.clientX > widthImg) {
            initialTransform =
                e.clientX - initialOffsetX - widthCarousel * count;
            imgCarousel.style.transform = `translateX(${initialTransform}px)`;
            imgCarousel.style.transition = 'none';
        } else {
            initialTransform =
                initialOffsetX - e.clientX + widthCarousel * count;
            imgCarousel.style.transform = `translateX(-${initialTransform}px)`;
            imgCarousel.style.transition = 'none';
        }
    };
});
