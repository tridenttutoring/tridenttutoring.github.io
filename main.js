// smooth scroll

// Get all the links with hashes
const links = document.querySelectorAll('a[href^="#"]');

// Loop through the links and add a click event listener to each
links.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the target element
    const target = document.querySelector(this.getAttribute("href"));

    // Scroll to the target element smoothly
    window.scroll({
      top: target.offsetTop-144,
      left: 0,
      behavior: "smooth"
    });
  });
});