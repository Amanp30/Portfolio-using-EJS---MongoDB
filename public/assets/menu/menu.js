// Selecting DOM elements
const navBar = document.getElementById("navBar");
const hamburger = document.getElementById("hamburger");
const menuItemsContainer = document.getElementById("menuItemsContainer");
const searchBoxInput = document.getElementById("searchBoxInput");

// Function to handle sticky navigation bar
function handleStickyNavBar() {
  navBar.classList.add("position-sticky");
}

// Function to toggle menu
function toggleMenu() {
  menuItemsContainer.classList.toggle("menuOpened");
}

// Function to handle search when Enter key is pressed
function handleSearch(e) {
  if (e.key === "Enter") {
    const searchQuery = encodeURIComponent(searchBoxInput.value.trim());
    if (searchQuery !== "") {
      window.location.href = "/search?q=" + searchQuery;
    }
  }
}

function setSearchField() {
  const queryParams = new URLSearchParams(window.location.search);
  const queryValue = queryParams.get("q");
  searchBoxInput.value = queryValue;
}

// Adding event listeners
window.addEventListener("scroll", handleStickyNavBar);
hamburger.addEventListener("click", toggleMenu);
searchBoxInput.addEventListener("keypress", handleSearch);

document.addEventListener("DOMContentLoaded", setSearchField);
