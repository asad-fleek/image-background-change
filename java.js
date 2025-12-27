let ImgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("originalImg");
let line = document.getElementById("line")
let leftSpace = ImgBox.offsetLeft;

originalImg.style.width = ImgBox.offsetWidth + "px";


ImgBox.onmousemove = function(e) {
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}