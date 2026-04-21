const animatedBlocks = document.querySelectorAll(
  ".hero-copy, .hero-card, .destination-card, .experience-grid article, .offer-card, .testimonial-grid blockquote, .contact-copy, .contact-form"
);

animatedBlocks.forEach((block) => {
  block.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

animatedBlocks.forEach((block) => observer.observe(block));

const form = document.getElementById("travel-form");
const formNote = document.getElementById("form-note");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const firstName = (data.get("name") || "").toString().trim().split(" ")[0];

  formNote.textContent = `Merci ${firstName || ""}, votre demande a bien ete envoyee. Nous revenons vers vous tres vite avec une premiere proposition.`;
  form.reset();
});
