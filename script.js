

window.onscroll = function() {navColorChange()};

function navColorChange(){
    // alert("this is alert")


    // if (window.pageYOffset >= sticky) {
    //     navbar.classList.add("sticky")
    //   } else {
    //     navbar.classList.remove("sticky");
    //   }
    document.getElementById("navbar").style.backgroundColor = rgb(241, 95, 34);
    if(screenTop = 0)
    document.getElementById("navbar").style.backgroundColor = none;
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
