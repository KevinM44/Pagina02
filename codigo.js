var ImgPrincipal = document.getElementById('ImgPrincipal');
var smallimg = document.getElementsByClassName('small-img');


smallimg[0].onclick = function(){
    ImgPrincipal.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    ImgPrincipal.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    ImgPrincipal.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    ImgPrincipal.src = smallimg[3].src;
}
