export function search() {
  const searchIcon = document.querySelector(".search-btn");
  const closeSearch = document.querySelector(".search-form__close");
  const searchField = document.querySelector(".search-form");

  searchIcon.addEventListener("click", function (e) {
    e.preventDefault();
    searchField.classList.add("search-form--open");
    searchField.setAttribute("aria-expanded", "true");
  });

  closeSearch.addEventListener("click", function (e) {
    e.preventDefault();
    searchField.classList.remove("search-form--open");
    searchField.setAttribute("aria-expanded", "false");
  });
}
