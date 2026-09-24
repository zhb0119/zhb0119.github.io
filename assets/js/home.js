(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealTargets = document.querySelectorAll(
    ".section-heading, .news-item, .experience-entry, .paper-box"
  );

  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("reveal-enabled");

    revealTargets.forEach(function (element, index) {
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", (index % 4) * 55 + "ms");
    });

    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    revealTargets.forEach(function (element) {
      revealObserver.observe(element);
    });
  }

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.masthead__menu-item a[href^="/#"]')
  );
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(2);
      var anchor = document.getElementById(id);
      return anchor ? { id: id, link: link, anchor: anchor } : null;
    })
    .filter(Boolean);

  if (sections.length) {
    var ticking = false;
    var updateActiveLink = function () {
      var marker = window.scrollY + 150;
      var active = sections[0];

      sections.forEach(function (item) {
        if (item.anchor.offsetTop <= marker) active = item;
      });

      sections.forEach(function (item) {
        item.link.classList.toggle("is-active", item === active);
      });
      ticking = false;
    };

    var requestActiveUpdate = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveLink);
    };

    updateActiveLink();
    window.addEventListener("scroll", requestActiveUpdate, { passive: true });
    window.addEventListener("resize", requestActiveUpdate);
  }
})();
