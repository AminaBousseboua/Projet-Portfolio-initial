/* =============================================
   nav.js — Navigation hamburger + lien actif
   ============================================= */

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".nav__hamburger");
  const navListe = document.querySelector(".nav__liste");

  if (hamburger && navListe) {
    hamburger.addEventListener("click", () => {
      const estOuvert = navListe.classList.toggle("ouverte");
      hamburger.classList.toggle("ouvert", estOuvert);
      hamburger.setAttribute("aria-expanded", estOuvert);
    });

    // Fermer le menu au clic sur un lien
    navListe.querySelectorAll(".nav__lien").forEach((lien) => {
      lien.addEventListener("click", () => {
        navListe.classList.remove("ouverte");
        hamburger.classList.remove("ouvert");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Marquer le lien actif selon la page courante
  const cheminActuel = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__lien").forEach((lien) => {
    const href = lien.getAttribute("href").split("/").pop();
    if (href === cheminActuel) {
      lien.classList.add("actif");
      lien.setAttribute("aria-current", "page");
    }
  });
});
