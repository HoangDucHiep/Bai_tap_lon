
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
    