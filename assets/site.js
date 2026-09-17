(() => {
  const data = window.siteData;
  if (!data) return;

  document.querySelectorAll("[data-site-name]").forEach((element) => {
    element.textContent = data.name;
  });
  document.querySelector("[data-intro]").textContent = data.intro;
  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  const cvLink = document.querySelector("[data-cv-link]");
  cvLink.href = data.cvFile;

  const facts = document.querySelector("[data-facts]");
  data.facts.forEach(([term, definition]) => {
    const group = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = term;
    dd.textContent = definition;
    group.append(dt, dd);
    facts.append(group);
  });

  const experience = document.querySelector("[data-experience]");
  data.experience.forEach(([term, definition]) => {
    const group = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = term;
    dd.textContent = definition;
    group.append(dt, dd);
    experience.append(group);
  });

  const publications = document.querySelector("[data-publications]");
  data.publications.forEach((publication, index) => {
    const item = document.createElement("li");
    item.className = "publication";
    item.innerHTML = `
      <span class="publication-number">${String(index + 1).padStart(2, "0")}</span>
      <div class="publication-details">
        <h3>${publication.title}</h3>
        <p class="citation">${publication.authors} · <em>${publication.venue}</em> · ${publication.year}</p>
        <div class="publication-links"></div>
      </div>`;
    // <p class="publication-description">${publication.description}</p>

    const linkWrap = item.querySelector(".publication-links");
    publication.links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.className = "publication-link";
      anchor.href = link.url;
      anchor.textContent = link.label;
      if (link.url !== "#") {
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
      }
      linkWrap.append(anchor);
    });
    publications.append(item);
  });

  const footerLinks = document.querySelector("[data-footer-links]");
  data.footerLinks.forEach((profile) => {
    const anchor = document.createElement("a");
    anchor.href = profile.url;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.textContent = profile.label;
    footerLinks.append(anchor);
  });

})();
