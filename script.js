

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