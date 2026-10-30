(function () {
  const header = document.getElementById("header");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  const links = menu.querySelectorAll(".navbar__link");

  function setMenuOpen(open) {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Fermer le menu" : "Ouvrir le menu"
    );
    document.body.style.overflow = open ? "hidden" : "";
  }

  toggle.addEventListener("click", function () {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuOpen(false);

      links.forEach(function (l) {
        l.classList.remove("is-active");
      });
      link.classList.add("is-active");
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      setMenuOpen(false);
    }
  });

  window.addEventListener(
    "scroll",
    function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    },
    { passive: true }
  );
})();
