document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      toggle.setAttribute(
        "aria-expanded",
        nav.classList.contains("open") ? "true" : "false"
      );
    });
  }

  var searchForms = document.querySelectorAll("[data-search-form]");
  searchForms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input");
      var query = (input.value || "").trim().toLowerCase();
      var cards = document.querySelectorAll("[data-post-card]");
      if (!cards.length) return;

      var matches = 0;
      cards.forEach(function (card) {
        var text = card.getAttribute("data-search") || "";
        var visible = query === "" || text.toLowerCase().indexOf(query) !== -1;
        card.style.display = visible ? "" : "none";
        if (visible) matches++;
      });

      var emptyState = document.querySelector("[data-empty-state]");
      if (emptyState) {
        emptyState.style.display = matches === 0 ? "block" : "none";
      }
    });
  });

  var newsletterForms = document.querySelectorAll("[data-newsletter-form]");
  newsletterForms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button");
      var original = btn.textContent;
      btn.textContent = "Zapisano!";
      form.reset();
      setTimeout(function () {
        btn.textContent = original;
      }, 2200);
    });
  });
});
