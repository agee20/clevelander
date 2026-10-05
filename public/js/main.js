/**
 * The Clevelander Bar & Grill - Main Client Script
 * Lightweight vanilla JavaScript (No frameworks)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMenuTabs();
  initGalleryLightbox();
  initGamedayStatus();
});

/**
 * Menu Category Tabs
 */
function initMenuTabs() {
  const tabButtons = document.querySelectorAll('[data-menu-tab]');
  const menuSections = document.querySelectorAll('[data-menu-category]');

  if (!tabButtons.length || !menuSections.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-menu-tab');

      // Update button active state & aria-selected
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Show/Hide matching categories
      menuSections.forEach(sec => {
        const cat = sec.getAttribute('data-menu-category');
        if (targetCategory === 'all' || cat === targetCategory) {
          sec.style.display = 'block';
          sec.removeAttribute('hidden');
        } else {
          sec.style.display = 'none';
          sec.setAttribute('hidden', '');
        }
      });
    });
  });
}

/**
 * Accessible Gallery Lightbox
 */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('[data-gallery-img]');
  const modalEl = document.getElementById('galleryModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');

  if (!galleryItems.length || !modalEl || !modalImg) return;

  galleryItems.forEach(item => {
    const trigger = item.querySelector('a') || item;
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = item.getAttribute('data-gallery-img');
      const caption = item.getAttribute('data-gallery-caption') || '';
      
      modalImg.src = imgSrc;
      modalImg.alt = caption;
      if (modalCaption) {
        modalCaption.textContent = caption;
      }

      // If bootstrap modal is available via bootstrap bundle
      if (window.bootstrap && window.bootstrap.Modal) {
        const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
      }
    });

    // Keyboard support for enter / space
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });
}

/**
 * Gameday Specials Status Indicator
 */
function initGamedayStatus() {
  const gamedayNotice = document.getElementById('liveGamedayNotice');
  if (!gamedayNotice) return;

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday
  // If weekend or typical game day, highlight game day specials
  if (day === 0 || day === 5 || day === 6 || day === 4) {
    gamedayNotice.innerHTML = '<span class="badge-gameday me-2"><i class="bi bi-broadcast"></i> Game Day Specials</span> Happy Hour &amp; Game Day Drink Buckets active before &amp; after games!';
  }
}
