let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');

    navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');

    loginForm.classList.remove('active');

}
var swiper = new Swiper(".vehicle-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteracion: false,

    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1020: {
            slidesPerView: 3,

        },
    },
});
var swiper = new Swiper(".upcoming-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteracion: false,

    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1020: {
            slidesPerView: 3,

        },
    },
});
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteracion: false,

    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1020: {
            slidesPerView: 3,

        },
    },
});
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

function sent() {
    let previewContainer = document.querySelector('.vehicle-preview-container');
    let previewBox = previewContainer.querySelectorAll('.vehicle-preview');

    document.querySelectorAll('.vehicle .box').forEach(vehicle => {
        vehicle.onclick = () => {
            previewContainer.style.display = 'flex';
            let name = vehicle.getAttribute('data-name');
            previewBox.forEach(preveiw => {
                let target = preveiw.getAttribute('data-target');
                if (name == target) {
                    preveiw.classList.add('active');
                }
            });
        };
    });
};
var con = document.getElementById('cont');
var over = document.getElementById('over');
var conn = document.getElementById('contt');
var connn = document.getElementById('conttt');
var connnn = document.getElementById('contttt');

function sentt() {
    over.style.display = 'flex';
    con.style.display = 'block';
    con.classList.add('active');

};

function senttt() {
    over.style.display = 'flex';
    conn.style.display = 'block';
    conn.classList.add('active');

};

function sentttt() {
    over.style.display = 'flex';
    connn.style.display = 'block';
    connn.classList.add('active');

};

function senttttt() {
    over.style.display = 'flex';
    connnn.style.display = 'block';
    connnn.classList.add('active');

};

function off() {
    let previewContainer = document.querySelector('.vehicle-preview-container');
    let previewBox = previewContainer.querySelectorAll('.vehicle-preview');

    previewContainer.style.display = 'none';
    previewBox.forEach(close => {
        close.classList.remove('active');
    });
    location.reload();
};

function contact() {

    let innovaremove = document.getElementById('innovaremove');
    let kiaremove = document.getElementById('kiaremove');
    let hondaremove = document.getElementById('hondaremove');
    let brezzaremove = document.getElementById('brezzaremove');
    let numm = document.getElementById('numm');
    let close = document.getElementById('close-preview');
    let pre = document.getElementById('close-pre');

    let name = document.getElementById('num');
    name.style.display = 'block';
    innovaremove.style.display = 'none';
    kiaremove.style.display = 'none';
    hondaremove.style.display = 'none';
    brezzaremove.style.display = 'none';
    close.style.display = 'none';
    con.style.display = 'none';
    conn.style.display = 'none';
    connn.style.display = 'none';
    connnn.style.display = 'none';
    pre.style.display = 'none';
    numm.style.display = 'block';

}

function rem() {
    let name = document.getElementById('num');
    name.style.display = 'none';

}

function tem() {
    let name = document.getElementById('numm');
    name.style.display = 'none';

}

function send() {
    let fuel = document.getElementById('fuels');

    if (fuel.style.display == 'none') {
        fuel.style.display = 'block';
    } else {
        fuel.style.display = 'none';
    }
};

function sendd() {
    let fuel = document.getElementById('fuelss');
    console.log('ov');
    if (fuel.style.display == 'none') {
        fuel.style.display = 'block';
    } else {
        fuel.style.display = 'none';
    }
};

function senddd() {
    let fuel = document.getElementById('fuelsss');
    if (fuel.style.display == 'none') {
        fuel.style.display = 'block';
    } else {
        fuel.style.display = 'none';
    }
};

function sendddd() {
    let fuel = document.getElementById('fuelsss');
    if (fuel.style.display == 'none') {
        fuel.style.display = 'block';
    } else {
        fuel.style.display = 'none';
    }
};

function book() {

    let summ = document.getElementById('summ');
    summ.style.display = 'block';

}

function sem() {
    let name = document.getElementById('summ');
    name.style.display = 'none';

}