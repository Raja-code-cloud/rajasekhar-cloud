(function () {
  document.documentElement.classList.add("js-ready");

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var header = document.querySelector(".site-header");
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var body = document.body;

  function setScrolled() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive: true });

  function setNavOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    body.classList.toggle("nav-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav && nav.classList.contains("is-open")) {
      setNavOpen(false);
      if (toggle) toggle.focus();
    }
  });

  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll("#site-nav a[href^='#']");

  function updateActiveNav() {
    if (!sections.length || !navLinks.length) return;
    var headerEl = document.querySelector(".site-header");
    var offset = (headerEl ? headerEl.offsetHeight : 64) + 24;
    var current = "";
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= offset) {
        current = section.id;
      }
    });
    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      var active = href === "#" + current && current !== "";
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  var progressEl = document.querySelector(".reading-progress");
  function updateReadingProgress() {
    if (!progressEl) return;
    var doc = document.documentElement;
    var scrollTop = window.scrollY || doc.scrollTop;
    var height = doc.scrollHeight - doc.clientHeight;
    var pct = height > 0 ? Math.min(100, Math.round((scrollTop / height) * 100)) : 0;
    progressEl.style.width = pct + "%";
  }
  updateReadingProgress();
  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress, { passive: true });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var revealIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            revealIo.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    document
      .querySelectorAll(
        ".metric-card, .work-grid--usecases > li, .case-study, .case-study-teaser, .role-card, .cloud-brand-strip__item"
      )
      .forEach(function (el) {
        el.classList.add("reveal-on-scroll");
        revealIo.observe(el);
      });
  }
})();
