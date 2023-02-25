const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () =>
    button.parentElement.classList.toggle("active")
  );
});


// $('#faq .faq-toggle').click(function () {     
//     $(this).parent().toggleClass('active');
// });

// $('#rules').click(function () {
//   $(document).scrollTop(0);
// });