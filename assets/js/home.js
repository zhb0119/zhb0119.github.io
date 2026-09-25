(function () {
  "use strict";

  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;

  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var expanded = toggle.getAttribute("aria-expanded") !== "true";
    nav.classList.toggle("is-open", expanded);
    toggle.setAttribute("aria-expanded", String(expanded));
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".masthead")) closeMenu();
  });

  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href*="#"]'));
  var sections = links.map(function (link) {
    var id = new URL(link.href).hash.slice(1);
    var section = document.getElementById(id);
    link.addEventListener("click", closeMenu);
    return section ? { link: link, section: section } : null;
  }).filter(Boolean);

  var ticking = false;
  function updateActiveLink() {
    ticking = false;
    if (!sections.length) return;
    var active = sections[0];
    var marker = window.innerWidth <= 760 ? 100 : 120;
    sections.forEach(function (item) {
      if (item.section.getBoundingClientRect().top <= marker) active = item;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      active = sections[sections.length - 1];
    }
    sections.forEach(function (item) {
      var current = item === active;
      item.link.classList.toggle("is-active", current);
      if (current) item.link.setAttribute("aria-current", "location");
      else item.link.removeAttribute("aria-current");
    });
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateActiveLink);
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) closeMenu();
    requestUpdate();
  });
  window.addEventListener("load", requestUpdate);
  window.addEventListener("hashchange", requestUpdate);
  document.querySelectorAll(".paper-abstract").forEach(function (details) {
    details.addEventListener("toggle", requestUpdate);
  });
  updateActiveLink();
})();

// Only the configured public hostname contributes to the shared visitor counts.
(function () {
  "use strict";
  var section = document.getElementById("visitors");
  if (!section) return;
  var status = section.querySelector(".visitor-status");
  var values = [document.getElementById("busuanzi_value_site_uv"), document.getElementById("busuanzi_value_site_pv")];
  if (window.location.hostname !== section.getAttribute("data-statistics-host")) {
    section.setAttribute("data-statistics-state", "preview");
    status.textContent = "Statistics are available on the live site.";
    return;
  }

  section.setAttribute("data-statistics-state", "loading");
  status.textContent = "Loading visitor statistics…";
  function unavailable() {
    if (section.getAttribute("data-statistics-state") === "live") return;
    section.setAttribute("data-statistics-state", "unavailable");
    status.textContent = "Statistics are temporarily unavailable.";
  }
  var timeout = window.setTimeout(unavailable, 12000);
  var observer = new MutationObserver(function () {
    var counts = values.map(function (element) { return element.textContent.trim(); });
    if (!counts.every(function (value) { return /^\d+$/.test(value); })) return;
    observer.disconnect();
    window.clearTimeout(timeout);
    values.forEach(function (element, index) {
      element.textContent = counts[index].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      element.removeAttribute("aria-label");
    });
    section.setAttribute("data-statistics-state", "live");
    status.textContent = "Statistics updated.";
  });
  observer.observe(section.querySelector(".visitor-stats"), { childList: true, subtree: true, characterData: true });

  var script = document.createElement("script");
  script.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
  script.async = true;
  script.referrerPolicy = "no-referrer-when-downgrade";
  script.onerror = function () { window.clearTimeout(timeout); unavailable(); };
  document.head.appendChild(script);
})();

// Native dialogs provide keyboard focus containment and Escape dismissal.
(function () {
  "use strict";
  var dialog = document.getElementById("figure-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;
  var body = dialog.querySelector(".figure-dialog-body");
  var title = document.getElementById("figure-dialog-title");
  var trigger = null;

  document.querySelectorAll(".figure-trigger").forEach(function (button) {
    button.addEventListener("click", function () {
      var source = button.querySelector("img");
      if (!source) return;
      trigger = button;
      var image = source.cloneNode();
      image.loading = "eager";
      image.removeAttribute("width");
      image.removeAttribute("height");
      body.replaceChildren(image);
      title.textContent = button.getAttribute("data-figure-title");
      dialog.showModal();
      document.documentElement.classList.add("figure-is-open");
    });
  });

  dialog.querySelector(".figure-dialog-close").addEventListener("click", function () {
    dialog.close();
  });
  dialog.addEventListener("click", function (event) {
    if (event.target !== dialog) return;
    var bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener("close", function () {
    document.documentElement.classList.remove("figure-is-open");
    body.replaceChildren();
    if (trigger) trigger.focus({ preventScroll: true });
  });
})();
