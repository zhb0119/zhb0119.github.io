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
    var marker = window.innerWidth <= 640 ? 100 : 120;
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
    if (window.innerWidth > 640) closeMenu();
    requestUpdate();
  });
  window.addEventListener("load", requestUpdate);
  window.addEventListener("hashchange", requestUpdate);
  document.querySelectorAll(".paper-abstract").forEach(function (details) {
    details.addEventListener("toggle", requestUpdate);
  });
  updateActiveLink();
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
