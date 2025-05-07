// Animate Progress Bars when Skills section is visible
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-bar div");
  
    function animateBars() {
      progressBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
      });
    }
  
    function checkScroll() {
      const skillsSection = document.getElementById("skills");
      const sectionPos = skillsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.3;
  
      if(sectionPos < screenPos) {
        animateBars();
        window.removeEventListener('scroll', checkScroll);
      }
    }
  
    window.addEventListener('scroll', checkScroll);
  });


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
