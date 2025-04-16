

      


function toggleFAQ(id) {
    let answer = document.getElementById(`answer-${id}`);
    let icon = document.getElementById(`icon-${id}`);

    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
        icon.style.transform = "rotate(180deg)"; // Rotate icon when expanded
    } else {
        answer.classList.add("hidden");
        icon.style.transform = "rotate(0deg)"; // Reset icon rotation when collapsed
    }
}




// Toggle menu function
function toggleMenu() {
    const menu = document.getElementById('menuOverlay');
    menu.classList.toggle('active');
    menu.classList.toggle('hidden');
}

// Close menu when clicking outside
document.getElementById('menuOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeMenu();
    }
});

// Close menu when clicking a menu item
function closeMenu() {
    const menu = document.getElementById('menuOverlay');
    menu.classList.add('hidden');
    menu.classList.remove('active');
}

// Smooth Scroll for Menu Items
document.querySelectorAll('.menu-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
        closeMenu(); // Close menu after scrolling
    });
});






const cards = document.querySelectorAll(".card");
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");
  let currentIndex = 0;
  let autoplayInterval;

  function mod(n, m) {
    return ((n % m) + m) % m; // handles negative values too
  }

  function updateCards() {
    cards.forEach((card, i) => {
      card.classList.remove("active", "prev", "next", "far-prev", "far-next", "hidden");
    });

    const total = cards.length;
    const active = mod(currentIndex, total);
    const prev = mod(currentIndex - 1, total);
    const next = mod(currentIndex + 1, total);
    const farPrev = mod(currentIndex - 2, total);
    const farNext = mod(currentIndex + 2, total);

    cards[active].classList.add("active");
    cards[prev].classList.add("prev");
    cards[next].classList.add("next");
    cards[farPrev].classList.add("far-prev");
    cards[farNext].classList.add("far-next");

    // Hide all others
    cards.forEach((card, i) => {
      if (![active, prev, next, farPrev, farNext].includes(i)) {
        card.classList.add("hidden");
      }
    });
  }

  function moveNext() {
    currentIndex++;
    updateCards();
  }

  function movePrev() {
    currentIndex--;
    updateCards();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(moveNext, 4000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  prevArrow.addEventListener("click", () => {
    movePrev();
    resetAutoplay();
  });

  nextArrow.addEventListener("click", () => {
    moveNext();
    resetAutoplay();
  });

  updateCards();
  startAutoplay();


        function openLink(url) {
          window.open(url, '_blank');
      }
      
      function contactUs() {
          window.location.href = 'mailto:ouremail@gmail.com';
      }
      

      /*----------------------------------------------------
=                  PRELOADER                        =
====================================================*/

// preloader
// Enhanced Preloader with Zoom Effect
document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.getElementById('preloader');
  const logo = document.getElementById('preloader-logo');
  const menuButton = document.querySelector('.menu-button');
  
  // Initial state
  menuButton.style.opacity = '0';
  menuButton.style.pointerEvents = 'none';
  
  // Animation timeline
  setTimeout(() => {
    // Phase 1: Initial appearance (0.5s)
    logo.style.transform = 'scale(0.9)';
    logo.style.opacity = '1';
    
    // Phase 2: Zoom-in after delay (1.5s)
    setTimeout(() => {
      logo.style.transform = 'scale(1.2)';
      logo.style.transition = 'transform 1.2s cubic-bezier(0.2, 0.8, 0.4, 1)';
    }, 1500);
    
  }, 100);

  // Hide after minimum 3.5 seconds
  const minDisplayTime = 3500;
  const startTime = Date.now();
  
  window.addEventListener('load', function() {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(minDisplayTime - elapsed, 0);
    
    setTimeout(() => {
      // Final zoom before disappearing
      logo.style.transform = 'scale(1.5)';
      logo.style.opacity = '0';
      logo.style.transition = 'all 0.8s ease-out';
      
      // Hide everything
      setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.classList.remove('preload-active');
        menuButton.style.opacity = '1';
        menuButton.style.pointerEvents = 'auto';
      }, 800);
    }, remaining);
  });

  // Safety timeout (6 seconds max)
  setTimeout(() => {
    if (!preloader.classList.contains('hidden')) {
      preloader.classList.add('hidden');
      document.body.classList.remove('preload-active');
      menuButton.style.opacity = '1';
      menuButton.style.pointerEvents = 'auto';
    }
  }, 6000);
});
