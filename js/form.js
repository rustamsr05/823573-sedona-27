var link = document.querySelector(".button-search");

var popup = document.querySelector(".hotel-searching-form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("form-remove");
});
