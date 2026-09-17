/*
  Your site's content lives here.
  - Change the details below and save.
  - To add a publication, copy one object in the publications list.
  - Put your CV PDF in assets/ and change cvFile to its filename.
*/
window.siteData = {
  name: "Sejin Park",
  intro: "I am an undergraduate student at Seoul National University. I am interested in cryptography, especially in homomorphic encryption.",
  cvFile: "assets/sejin-park-cv.pdf",
  facts: [
    ["Seoul National University", "B.S. Mathematics, Computer Science · Expected February 2028"],
    ["Charles University", "Exchange Student · 2026-2027"],
    ["Languages", "Korean: Native · English: Fluent · Japanese: Fluent (JLPT N1)"],
  ],
  experience: [
    ["Cryptolab", "Research Intern · 2025-2026"],
  ],
  publications: [
    {
      title: "Scaling up Privacy-Preserving ML: A CKKS Implementation of Llama-2-7B",
      authors: "Jaiyoung Park, Sejin Park, Jai Hyun Park, Jung Ho Ahn, Jung Hee Cheon, Guillaume Hanrot, Jung Woo Kim, Minje Park, Damien Stehlé",
      venue: "Preprint",
      year: "2026",
      links: [
        { label: "Preprint", url: "https://arxiv.org/pdf/2601.18511" },
      ],
    },
  ],
  footerLinks: [
    { label: "GitHub", url: "https://github.com/ilesejin" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=nRLflTwAAAAJ" },
  ],
};
