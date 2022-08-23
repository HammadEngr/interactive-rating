// ---------------------Rating ColorChange on Hover and Selection----------------
document.querySelector(".submit").disabled=true;

var ratingLength = document.querySelectorAll(".ratingbutton").length;
n=0;
while (n<ratingLength){
document.querySelectorAll(".ratingbutton")[n].addEventListener("mouseover",function(){
  this.classList.add("ratingbuttonBgOrange");
})
document.querySelectorAll(".ratingbutton")[n].addEventListener("mouseout",function(){
  this.classList.remove("ratingbuttonBgOrange");
})
document.querySelectorAll(".ratingbutton")[n].addEventListener("click",function(){
    var buttonInnerHtml = this.innerHTML;
    document.querySelector("#number").innerHTML = buttonInnerHtml;
    document.querySelector(".submit").disabled=false;
    var activeButton = document.querySelector('.btn'+buttonInnerHtml);
    for (var p = 1; p<=5; p++){
    document.querySelector(".btn"+p).classList.remove("ratingbuttonBgGrey");
  }
      activeButton.classList.remove("ratingbuttonBgOrange");
      activeButton.classList.add("ratingbuttonBgGrey");
})
n++
}

document.querySelector(".submit").addEventListener("click",function(){
  document.querySelector(".mainBoard").style.display = "none";
  document.querySelector(".thankYouPage").classList.remove("mainboard2Hidden");
  document.querySelector(".thankYouPage").classList.add("mainBoard2display");
})
