document.getElementById('botmaps').onclick = function () {
    window.open("https://www.google.com/maps/place/Av.+Rivadavia+5567,+C1424+CABA/@-34.6215826,-58.4459447,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccb530d25994f:0x9dacdcfed4102cc8!8m2!3d-34.621587!4d-58.443756")
}

document.getElementById("botdispo").addEventListener('click', function() {
    document.getElementById("horadisp1").style.display = "block";
});

document.getElementById("botcontrast").addEventListener('click', function() {
    document.getElementById("experienciapa").style.backgroundColor = "black" ;
    document.getElementById("experienciapa").style.color = "white" ;
   });