
// When the user scrolls down 50px from the top of the document, add the "scrolled" class to the header
window.onscroll = function() {
  const header = document.querySelector('header');
  if (window.pageYOffset > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Optional: stop observing once animated
      }
    });
  }, {
    threshold: 0.1 // Adjust as needed
  });

  document.querySelectorAll('#ourWork .imgs-container img').forEach(img => {
    observer.observe(img);
  });
});
