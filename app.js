window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav__bar").style.backgroundColor = "white";
        document.getElementById("nav__bar").style.minHeight = "10vh";
    } else {
        document.getElementById("nav__bar").style.backgroundColor = "#F6F6F6";
        document.getElementById("nav__bar").style.minHeight = "15vh";
    }
}