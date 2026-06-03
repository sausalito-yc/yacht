/* Sausalito Yacht Club — site interactions */
(function () {
  'use strict';

  // ---------- Header scroll state ----------
  const header = document.querySelector('.site-header');
  const isHeroPage = document.body.classList.contains('has-hero');

  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  if (!isHeroPage && header) header.classList.add('solid');
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // ---------- Mobile nav toggle ----------
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // close on link tap
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- FAQ accordion ----------
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.setAttribute('aria-expanded', 'false');
    q.addEventListener('click', () => {
      const open = item.classList.toggle('is-open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        a.style.maxHeight = a.scrollHeight + 'px';
      } else {
        a.style.maxHeight = '0px';
      }
    });
  });

  // ---------- Reveal on scroll ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // ---------- Form submission demo ----------
  document.querySelectorAll('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '送信中...';
        setTimeout(() => {
          form.reset();
          btn.disabled = false;
          btn.innerHTML = original;
          alert('ご送信ありがとうございます。担当者より2営業日以内にご連絡いたします。\n\n（このフォームはデモ表示です）');
        }, 800);
      }
    });
  });

  // ---------- Current year ----------
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();
