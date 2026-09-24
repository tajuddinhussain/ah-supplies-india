document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     1. CONFIG — update these with your real details
     ============================================================ */
  const CONFIG = {
    // Replace with your real WhatsApp number in international format,
    // no "+", no spaces, e.g. "919876543210" for an Indian number.
    whatsappNumber: '919573190407',
    whatsappMessage: 'Hi AH Supplies India, I have a question about your products.'
  };

  const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  const waFloat = document.getElementById('whatsappFloat');
  const waContact = document.getElementById('whatsappContactLink');
  if (waFloat) waFloat.href = waLink;
  if (waContact) waContact.href = waLink;

  /* ============================================================
     2. Sticky navbar shadow on scroll
     ============================================================ */
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');

  const onScroll = () => {
    const scrolled = window.scrollY > 12;
    navbar.classList.toggle('is-scrolled', scrolled);
    scrollTopBtn.classList.toggle('is-visible', window.scrollY > 480);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ============================================================
     3. Mobile nav toggle
     ============================================================ */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ============================================================
     4. Scroll reveal animation (IntersectionObserver)
     ============================================================ */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: no IntersectionObserver support — just show everything
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ============================================================
     5. Footer year
     ============================================================ */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
