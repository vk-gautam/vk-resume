window.onload = function() {
    doc_body = document.getElementById("doc-body");
    doc_body.classList.remove("body-display");
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

function myFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        navbar.classList.add("white-nav");
        navbar.classList.replace("navbar-dark", "navbar-light");
    }
    else {
        navbar.classList.remove("white-nav")
        navbar.classList.replace("navbar-light", "navbar-dark");
    }
}


$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// $(document).click(function(){
//     $(".navbar-collapse").collapse('hide');
// });

var tg_button = document.getElementById("tg-button");
let a=0;
tg_button.onclick = function() {
    if(a==0) {
        navbar.classList.replace("navbar-trans", "navbar-opaque");
        a=1;
    }
    else {
        navbar.classList.replace("navbar-opaque", "navbar-trans");
        a=0;
    }
}
