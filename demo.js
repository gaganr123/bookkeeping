let Xpert = document.querySelector('.Xpert')
let services = document.getElementById("services");
let about = document.getElementById("about");
let pricing = document.getElementById("pricing");
let partnership = document.getElementById("partnership");
let faqs = document.getElementById("faqs");
let blog = document.getElementById("blog");

window.onscroll = function () {
  changeColor();
  scrollFunction();
};

function changeColor() {
    document.getElementById("navbar").style.backgroundColor = "#EE6600";

    if (window.scrollY == 0) {
        // $(function() {      
        //     let isMobile = window.matchMedia("only screen and (max-width: 320px)").matches;
        
        //     if (isMobile) {
        //         changeColorto();
        //     }
        //  });
        changeColorto();
    }
    else{
        Xpert.style.color = "#FFFFFF"
        services.addEventListener('mouseenter', check1 = () => { services.style.color = "#FFFFFF"});
        services.addEventListener('mouseleave', check2 = () => { services.style.color = "#000000"});
        about.addEventListener('mouseenter', check1 = () => { about.style.color = "#FFFFFF"});
        about.addEventListener('mouseleave', check2 = () => { about.style.color = "#000000"});
        pricing.addEventListener('mouseenter', check1 = () => { pricing.style.color = "#FFFFFF"});
        pricing.addEventListener('mouseleave', check2 = () => { pricing.style.color = "#000000"});
        partnership.addEventListener('mouseenter', check1 = () => { partnership.style.color = "#FFFFFF"});
        partnership.addEventListener('mouseleave', check2 = () => { partnership.style.color = "#000000"});
        faqs.addEventListener('mouseenter', check1 = () => { faqs.style.color = "#FFFFFF"});
        faqs.addEventListener('mouseleave', check2 = () => { faqs.style.color = "#000000"});
        blog.addEventListener('mouseenter', check1 = () => { blog.style.color = "#FFFFFF"});
        blog.addEventListener('mouseleave', check2 = () => { blog.style.color = "#000000"});
       }
}

function changeColorto() {
    Xpert.style.color = "#EE6600"
    document.getElementById("navbar").style.cssText = "backgroundColor: none;"
    services.addEventListener('mouseenter', check1 = () => { services.style.color = "#F15A22"});
    services.addEventListener('mouseleave', check2 = () => { services.style.color = "#000000"});
    about.addEventListener('mouseenter', check1 = () => { about.style.color = "#F15A22"});
    about.addEventListener('mouseleave', check2 = () => { about.style.color = "#000000"});
    pricing.addEventListener('mouseenter', check1 = () => { pricing.style.color = "#F15A22"});
    pricing.addEventListener('mouseleave', check2 = () => { pricing.style.color = "#000000"});
    partnership.addEventListener('mouseenter', check1 = () => { partnership.style.color = "#F15A22"});
    partnership.addEventListener('mouseleave', check2 = () => { partnership.style.color = "#000000"});
    faqs.addEventListener('mouseenter', check1 = () => { faqs.style.color = "#F15A22"});
    faqs.addEventListener('mouseleave', check2 = () => { faqs.style.color = "#000000"});
    blog.addEventListener('mouseenter', check1 = () => { blog.style.color = "#F15A22"});
    blog.addEventListener('mouseleave', check2 = () => { blog.style.color = "#000000"});
}

  (function(d, w, c) {
      w.ChatraID = 'RPhuNjBtNppM7oKHT';
      var s = d.createElement('script');
      w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
      };
      s.async = true;
      s.src = 'https://call.chatra.io/chatra.js';
      if (d.head) d.head.appendChild(s);
  })(document, window, 'Chatra');
