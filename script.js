let items = document.querySelectorAll(".faq-main .faq-item .faq-label");

items.forEach(function (label) {
  label.addEventListener("click", function () {
    let parent = label.parentElement;
    parent.classList.toggle("faq-item-show");
    items.forEach(function (otherLabel) {
      if (otherLabel !== label) {
        otherLabel.parentElement.classList.remove("faq-item-show");
      }
    });
  });
});
