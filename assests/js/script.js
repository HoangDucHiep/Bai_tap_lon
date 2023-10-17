/* Carousel stuff-------------------------------- */

$(document).ready(function () {
  $('.main-slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: '.center-slider',
  });

    // Khởi tạo slider dẫn hướng
    $('.center-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      dots: false,
      speed: 300,
      centerPadding: '0px',
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      asNavFor: '.main-slide',
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
      ]
    });


  });

  
/*--nav bar stuff---------------------------------*/

//search box openclose------------------------------
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search", "bx-x");
    }else{
        searchBox.classList.replace("bx-x", "bx-search");
    }
});


//sidebar open close------------------------
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "0";
});

closeOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "-100%";
}); 


//sidebar submenu open-close----------------------
let branchArrow = document.querySelector(".branch-arrow");
branchArrow.onclick = function() {
    if (navLinks.classList.contains("show1")) {
        navLinks.classList.remove("show1");
    } else {
        navLinks.classList.remove("show2",);
        navLinks.classList.add("show1");
    }
};

let branchNguyenTraiArrow = document.querySelector(".branch-nguyen-trai-arrow");
branchNguyenTraiArrow.onclick = function() {
    if (navLinks.classList.contains("show2")) {
        navLinks.classList.remove("show2");
    } else {
        navLinks.classList.add("show2");
    }
};



//break-line
/* var maxWidth = document.getElementById("#comming-soon").offsetWidth * 1; */
var isVisible = false;
    
window.addEventListener('scroll', function () {
    var breakline = document.querySelector('.breakline');
    var rect = breakline.getBoundingClientRect();
    var isInViewport = (rect.top >= 0 && rect.bottom <= window.innerHeight);
    
    if (isInViewport) {
        if (!isVisible) {
            breakline.style.width = '100%';
            isVisible = true;
        }
    }else {
        if (isVisible) {
            breakline.style.width = '0';
            isVisible = false;
        }
    }
});
    


/* ---------login-signup------------------- */
let password = document.getElementById('password-sign');
let togglePassword = document.getElementById('pass-toggle');


function showHide() {
    if(password.type == 'password') {
        password.setAttribute('type', 'text');
        togglePassword.classList.add('hide');
    }
    else {
        password.setAttribute('type', 'password');
        togglePassword.classList.remove('hide');
    }
}


const emailInputField = document.querySelector('.email-sign-input-field');
const passwordInputField = document.querySelector('.password-sign-input-field');
const emailInput = document.getElementById('email-sign');
const passwordInput = document.getElementById('password-sign');

emailInput.addEventListener('focus', () => {
    emailInputField.style.border = '1px solid white';
    emailInputField.style.transform = 'scale(1.01)';
});

emailInput.addEventListener('blur', () => {
    emailInputField.style.border = '1.5px solid #8b8b8b6d'; // Reset the other input field's border
    emailInputField.style.transform = 'scale(1)';
});


passwordInput.addEventListener('focus', () => {
    passwordInputField.style.border = '1px solid white';
    passwordInputField.style.transform = 'scale(1.01)';
});


passwordInput.addEventListener('blur', () => {
    passwordInputField.style.border = '1.5px solid #8b8b8b6d'; // Reset the other input field's border
    passwordInputField.style.transform = 'scale(1)';
});
