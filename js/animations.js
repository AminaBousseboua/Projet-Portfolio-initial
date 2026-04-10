/* =============================================
   animations.js — Effets au défilement (scroll)
   + animation des barres de compétences
   ============================================= */

document.addEventListener("DOMContentLoaded", () => {
  // ---- Apparition des éléments au scroll ----
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        entree.target.style.opacity = "1";
        entree.target.style.transform = "translateY(0)";
        observer.unobserve(entree.target);
      }
    });
  }, observerOptions);

  // Observer les cards et blocs de contenu
  document
    .querySelectorAll(
      ".card, .competence-card, .projet-card, .expertise-card, .bio-bloc, .animer-scroll"
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(25px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

  // ---- Animation des barres de progression ----
  const barresObserver = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        const barre = entree.target;
        const largeur = barre.getAttribute("data-largeur") || "0";
        barre.style.width = largeur + "%";
        barresObserver.unobserve(barre);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".barre-competence__remplissage").forEach((barre) => {
    barresObserver.observe(barre);
  });
});
