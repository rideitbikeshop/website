import "./styles.css";
import { siteContent, type Locale, type SiteContent } from "./content";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found");
}

const locale = getLocale();
const content = siteContent[locale];
const base = import.meta.env.BASE_URL;

document.documentElement.lang = content.lang;
document.title = content.title;

const description = document.querySelector<HTMLMetaElement>(
  'meta[name="description"]',
);

if (description) {
  description.content = content.description;
}

app.innerHTML = renderSite(content, base);

function getLocale(): Locale {
  const pageLocale = document.body.dataset.locale;
  return pageLocale === "en" ? "en" : "pt";
}

function renderSite(content: SiteContent, baseUrl: string): string {
  const ptHref = baseUrl;
  const enHref = `${baseUrl}en/`;
  const logoSrc = `${baseUrl}assets/Logo.jpeg`;

  return `
    <div class="site-shell">
      <header class="hero">
        <nav class="topbar">
          <a class="brand" href="#home">
            <img class="brand-logo" src="${logoSrc}" alt="RideIt Workshop logo" />
            <span class="brand-copy">
              <strong>RideIt</strong>
              <small>${content.brandTagline}</small>
            </span>
          </a>
          <div class="nav-actions">
            <div class="nav-links">
              ${content.nav
                .map((item) => `<a href="${item.href}">${item.label}</a>`)
                .join("")}
            </div>
            <div class="language-switcher" aria-label="${content.languageLabel}">
              <a class="${isActive("pt", content) ? "is-active" : ""}" href="${ptHref}">PT</a>
              <a class="${isActive("en", content) ? "is-active" : ""}" href="${enHref}">EN</a>
            </div>
          </div>
        </nav>

        <section class="hero-content" id="home">
          <div class="hero-copy">
            <p class="eyebrow">${content.hero.eyebrow}</p>
            <h1>
              ${content.hero.title}
              <span>${content.hero.highlight}</span>
            </h1>
            <p class="hero-text">${content.hero.body}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#contact">${content.hero.primaryCta}</a>
              <a class="button button-secondary" href="#services">${content.hero.secondaryCta}</a>
            </div>
            <ul class="hero-stats">
              ${content.hero.stats
                .map(
                  (stat) => `
                    <li>
                      <strong>${stat.value}</strong>
                      <span>${stat.label}</span>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </div>

          <div class="hero-card">
            <div class="card-panel">
              <p>${content.heroCard.tag}</p>
              <h2>${content.heroCard.title}</h2>
              <ul>
                ${content.heroCard.points.map((point) => `<li>${point}</li>`).join("")}
              </ul>
            </div>
            <div class="trail-badge">
              <span>${content.heroCard.badgeLabel}</span>
              <strong>${content.heroCard.badgeTitle}</strong>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section class="section intro-grid" id="services">
          <article class="intro-card intro-card-accent">
            <p class="section-tag">${content.intro.tag}</p>
            <h2>${content.intro.title}</h2>
            <p>${content.intro.body}</p>
          </article>

          ${content.intro.cards
            .map(
              (card) => `
                <article class="intro-card">
                  <h3>${card.title}</h3>
                  <p>${card.body}</p>
                </article>
              `,
            )
            .join("")}
        </section>

        <section class="section service-layout">
          <div class="section-heading">
            <p class="section-tag">${content.services.tag}</p>
            <h2>${content.services.title}</h2>
          </div>

          <div class="service-grid">
            ${content.services.items
              .map(
                (service) => `
                  <article class="service-card">
                    <span>${service.number}</span>
                    <h3>${service.title}</h3>
                    <p>${service.body}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="section showcase" id="quotes">
          <div class="section-heading">
            <p class="section-tag">${content.quotes.tag}</p>
            <h2>${content.quotes.title}</h2>
          </div>

          <div class="product-grid">
            ${content.quotes.items
              .map(
                (item) => `
                  <article class="product-card ${item.featured ? "featured" : ""}">
                    <p class="product-type">${item.type}</p>
                    <h3>${item.title}</h3>
                    <p>${item.body}</p>
                    <strong>${item.price}</strong>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="section process" id="process">
          <div class="section-heading">
            <p class="section-tag">${content.process.tag}</p>
            <h2>${content.process.title}</h2>
          </div>

          <div class="process-list">
            ${content.process.items
              .map(
                (item) => `
                  <article>
                    <span>${item.number}</span>
                    <h3>${item.title}</h3>
                    <p>${item.body}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="section contact-section" id="contact">
          <div class="contact-card">
            <div>
              <p class="section-tag">${content.contactSection.tag}</p>
              <h2>${content.contactSection.title}</h2>
              <p>${content.contactSection.body}</p>
            </div>
            <div class="contact-details">
              <a href="tel:+351000000000">${content.contactSection.details.phone}</a>
              <a href="mailto:${content.contactSection.details.email}">${content.contactSection.details.email}</a>
              <p>${content.contactSection.details.address}</p>
              <p>${content.contactSection.details.hours}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

function isActive(locale: Locale, content: SiteContent): boolean {
  return (locale === "pt" && content.lang === "pt-PT") || (locale === "en" && content.lang === "en");
}
