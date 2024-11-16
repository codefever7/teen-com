let items = document.querySelectorAll(".faq-main .faq-item .faq-label");
items.forEach(function (t) {
  t.addEventListener("click", function (e) {
    items.forEach(function (e) {
      e !== t || e.classList.contains("faq-item-show")
        ? e.classList.remove("faq-item-show")
        : e.classList.add("faq-item-show");
    });
  });
});
