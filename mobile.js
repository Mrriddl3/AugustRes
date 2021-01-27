const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

$(".toggle_btn").click(function(){
   $(this).toggleClass("active");
  $(".wrapper ul").toggleClass("active");
  
  if($(".toggle_btn").hasClass("active")){
    $(".toggle_text").text("Show Less");
  }
  else{
    $(".toggle_text").text("Show More");
  }
});