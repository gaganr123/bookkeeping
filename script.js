let navItem =document.getElementById("Mycheck");
let navItem1 =document.querySelector("navbarSupportedContent");


window.onscroll = function () {
  changeColor();
  scrollFunction();
};

function changeColor() {
  document.getElementById("navbar").style.backgroundColor = "#EE6600";

  // document.querySelectorAll('#nav-link1,#nav-link2').style.color = "#fff";
  if (window.scrollY == 0) {
    changeColorto();
  }
  else{
    navItem.addEventListener('mouseenter', check1 = () => { navItem.style.color = "#FFFFFF"});
    navItem.addEventListener('mouseleave', check2 = () => { navItem.style.color = "#000000"});
  }
}
function changeColorto() {
  document.getElementById("navbar").style.cssText = 
  "  backgroundColor: none;"

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
