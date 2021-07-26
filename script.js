//nav bar variable
const navbar = document.querySelector(".nav");
// navbar change background color
document.addEventListener("scroll", function() {
    if(window.scrollY > 120 ){
        navbar.classList.add("color");
    }
    else{
        navbar.classList.remove("color");
    }
})

//search btn variables
const searchBtn = document.querySelector(".search-js");
const exitSearch = document.querySelector(".x-search-js");
const searchBox = document.querySelector(".search");
//search btn function
searchBtn.addEventListener("click" , function () {
    searchBox.classList.add("search-active");
});
exitSearch.addEventListener("click", function(){
    searchBox.classList.remove("search-active");
});

//side menu variables
const sideMenuBtn = document.querySelectorAll(".dm");
const sideMenu = document.querySelector(".side-menu");
//side menu btn function
sideMenuBtn.forEach(el=>{
    el.addEventListener("click", function (){
        sideMenu.classList.toggle("side-active")
    })
})

//images variables
const images = [...document.querySelectorAll(".bg")];
// images change on reload function
function imagesChange (){
    let randomNum = Math.floor(Math.random() * 5);
    images[randomNum].classList.add("up");
}
window.onbeforeunload = imagesChange();

// search input connections variables
const searchBar = document.querySelector(".nav .navbar .search input");
const searchMain = document.querySelector(".main .header .search input");
//search input connection
searchBar.addEventListener("input", function(){
    searchMain.value = searchBar.value; 
});
searchMain.addEventListener("input", function(){
    searchBar.value = searchMain.value;
})

// main section icon variable
const iconMain = document.querySelector(".main .para i");
// main section icon to scroll down to about section 
iconMain.addEventListener("click", function(){
    let about = document.querySelector(".about").getBoundingClientRect().top;
    window.scroll(0,about)
});

// back to top variables
const topBtn =document.querySelector(".top");
// back to top button function
window.addEventListener("scroll", function(){
    let scrollDistance = document.querySelector(".features").getBoundingClientRect().top;
    if (window.scrollY > scrollDistance) {
        topBtn.classList.add("top-active")
    }
    else{
        topBtn.classList.remove("top-active")
        }
    })
topBtn.addEventListener("click", function(){
    window.scroll(0,0)
})

//form varibles
const openFormBtn = document.querySelectorAll(".icons .btn");
const closeFormBtn = document.querySelector(".get-start .fa-times");
const form = document.querySelector(".get-start");
const signForm = document.querySelectorAll(".sign");
const signHead = document.querySelectorAll(".form .head h3");
const loginBtn = document.querySelectorAll(".login");

//open form fuction
openFormBtn.forEach(el=>{
    el.addEventListener("click", function(){
        form.classList.add("get-start-active");
    })
})
closeFormBtn.addEventListener("click", function(){
    form.classList.remove("get-start-active");
});
// change sign form function
signHead.forEach((el , index)=>{
    el.addEventListener("click", function(){
        signHead.forEach(ele=>{
            ele.classList.remove("h3-active");
            this.classList.add("h3-active");
        })
        signForm.forEach(ele=>{
            ele.classList.remove("sign-active");
            signForm[index].classList.add("sign-active");
        });
});
});
//login button open login form 
loginBtn.forEach(el=>{
    el.addEventListener("click", function(){
        form.classList.add("get-start-active");
        signHead.forEach(ele=>{
            ele.classList.remove("h3-active");
            signHead[1].classList.add("h3-active");
        })
        signForm.forEach(ele=>{
            ele.classList.remove("sign-active");
            signForm[1].classList.add("sign-active");
        });
    })
})
