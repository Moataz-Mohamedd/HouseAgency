
$( ".header-bottom-actions-btn,.navbar-link,.nav-close-btn").on("click",function() {
    $(".navbar").toggleClass('active');
    $(".overlay").toggleClass('active');
  });

// $("[data-nav-open-btn]").click(function(){
//     alert("asdas")
// });

$( ".navbar").on("click",function() {
    $(".overlay").removeClass('active');
    $(".navbar").removeClass('active');

  });


  const header = document.querySelector("[data-header]");

  window.addEventListener("scroll", function () {
    window.scrollY >= 400 ? header.classList.add("active")
      : header.classList.remove("active");
  }); 