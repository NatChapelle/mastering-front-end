const mousemove = document.querySelector(".mousemove");
const mousemove1 = document.querySelector(".mousemove1");
const mousemove2 = document.querySelector(".mousemove2");
window.addEventListener("mousemove",(e) => {
    mousemove.style.left = mousemove1.style.left = mousemove2.style.left = e.pageX + "px" ; 
    mousemove.style.top = mousemove1.style.top= mousemove2.style.top = e.pageY + "px" ;
   

});

