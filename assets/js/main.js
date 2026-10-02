const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
    }
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const contactForm = document.querySelector("#contact-form");

if (contactForm instanceof HTMLFormElement) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const status = document.querySelector("#form-status");
    const body = [
      `Nom : ${name}`,
      `Entreprise : ${company || "Non précisée"}`,
      `E-mail : ${email}`,
      `Téléphone : ${phone || "Non précisé"}`,
      "",
      message,
    ].join("\n");
    const mailto = new URL("mailto:contact@example.com");
    mailto.searchParams.set("subject", `[SécuriFeu] ${subject}`);
    mailto.searchParams.set("body", body);

    if (status) {
      status.textContent = "Votre logiciel de messagerie va s'ouvrir avec votre message prérempli.";
    }

    window.location.href = mailto.toString();
  });
}
