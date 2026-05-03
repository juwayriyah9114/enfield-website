document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }

  // Inventory Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const bikeCards = document.querySelectorAll('.bike-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      bikeCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          // Add a small animation effect
          card.style.animation = 'none';
          card.offsetHeight; // trigger reflow
          card.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // adjust for navbar
          behavior: 'smooth'
        });
      }
    });
  });
});

// Form Submission (since it's called via onsubmit="handleSubmit(event)" in HTML)
window.handleSubmit = function(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const successMsg = document.getElementById('form-success');
  
  if (btn) {
    btn.innerHTML = "Sending...";
    btn.disabled = true;
  }
  
  setTimeout(() => {
    if (successMsg) {
      successMsg.style.display = 'block';
    }
    if (btn) {
      btn.innerHTML = "Sent Successfully!";
      btn.style.backgroundColor = "#10b981"; // Green
    }
    document.getElementById('contact-form').reset();
  }, 1500);
};
