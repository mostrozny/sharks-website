import WOW from 'wow.js';

document.addEventListener('DOMContentLoaded', () => {
    new WOW().init();

    //SWIPER
        const swipers = document.querySelector(".swiper-container");
        const mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            flipEffect: {
                rotate: 30,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        });


        //DROPDOWN

    /*    document.querySelector('#dropdown').addEventListener('click', function (e) {
            e.preventDefault();
            const dropdown = document.querySelector('.nav-dropdown');
            if (dropdown.style.display == "flex") {
                dropdown.style.display = "none";
            } else {
             dropdown.style.display = 'flex';
            }
        })*/
});
