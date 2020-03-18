var link = document.querySelector(".button-search");

var popup = document.querySelector(".hotel-searching-form");

popup.classList.add("form-remove");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if(popup.classList.contains("form-remove")) {
    popup.classList.remove("form-remove");
  } else {
      popup.classList.add("form-remove");
    }

});
