"use client";

import { FormEvent, useMemo, useState } from "react";

const WHATSAPP_NUMBER = "27655380964";
const WHATSAPP_DISPLAY = "065 538 0964";
const INSTAGRAM_URL =
  "https://www.instagram.com/gunitcakes_10?igsh=MWw5dmxmOTZva3g1Zw==";
const TIKTOK_URL = "https://www.tiktok.com/@gunit.cakes";
const FACEBOOK_URL = "https://www.facebook.com/share/18BbpkHUGT/";

const offerings = [
  {
    title: "Celebration cakes",
    copy: "Personalised centrepieces for birthdays, graduations, anniversaries, and the moments worth gathering for.",
    image: "/brand-applications.png",
    position: "18% 12%",
    label: "Birthdays / milestones",
  },
  {
    title: "Cupcake boxes",
    copy: "Giftable boxes with coordinated colours, piped finishes, and a presentation ready for the occasion.",
    image: "/packaging-system.png",
    position: "28% 57%",
    label: "Gifts / events",
  },
  {
    title: "Sweet treat boxes",
    copy: "A thoughtful mix for intimate celebrations, thank-you gifts, and sharing around the table.",
    image: "/packaging-system.png",
    position: "76% 80%",
    label: "Cookies / small treats",
  },
  {
    title: "Branded orders",
    copy: "Custom treats and finishing details for launches, teams, client gifts, and business celebrations.",
    image: "/brand-applications.png",
    position: "76% 84%",
    label: "Business / gifting",
  },
];

const processSteps = [
  {
    title: "Share the occasion",
    copy: "Tell us the date, servings, flavour, budget, colours, and the feeling you want the cake to have.",
  },
  {
    title: "Shape the design",
    copy: "We will confirm availability, discuss the finish, and send a quote based on your brief.",
  },
  {
    title: "Confirm your order",
    copy: "Your booking is secured once the final details and required payment have been confirmed.",
  },
];

const initialOrder = {
  name: "",
  phone: "",
  occasion: "",
  date: "",
  servings: "",
  flavour: "",
  budget: "",
  fulfilment: "Collection",
  details: "",
};

function BrandLockup({ light = false }: { light?: boolean }) {
  return (
    <span className={light ? "brand-lockup brand-lockup-light" : "brand-lockup"}>
      <img src="/g-unit-cakes-logo.png" alt="" aria-hidden="true" />
      <span>
        <strong>G-Unit</strong>
        <small>Cakes</small>
      </span>
    </span>
  );
}

export default function Home() {
  const [order, setOrder] = useState(initialOrder);
  const [status, setStatus] = useState("");

  const whatsappMessage = useMemo(
    () =>
      [
        "Hello G-Unit Cakes! I would like to enquire about a custom order.",
        "",
        `Name: ${order.name}`,
        `My contact number: ${order.phone}`,
        `Occasion: ${order.occasion}`,
        `Date needed: ${order.date}`,
        `Servings: ${order.servings}`,
        `Preferred flavour: ${order.flavour || "Open to suggestions"}`,
        `Budget range: ${order.budget || "Please advise"}`,
        `Collection or delivery: ${order.fulfilment}`,
        `Cake idea: ${order.details}`,
        "",
        "I can send inspiration images here on WhatsApp.",
      ].join("\n"),
    [order],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Opening your WhatsApp enquiry...");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;
    window.location.href = url;
  }

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand-link" href="#top" aria-label="G-Unit Cakes home">
          <BrandLockup />
        </a>

        <nav aria-label="Main navigation">
          <a href="#cakes">Cakes</a>
          <a href="#ordering">How to order</a>
          <a href="#custom-order">Custom order</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="header-order"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp us
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Owner-baked custom cakes</p>
          <h1 id="hero-title">G-Unit Cakes</h1>
          <p className="hero-tagline">Made for your moment.</p>
          <p className="hero-intro">
            Thoughtfully designed celebration cakes, cupcakes, and sweet treats
            made around your occasion, your taste, and the details that matter.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#custom-order">
              Start your order
            </a>
            <a
              className="button button-quiet"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="hero-note">
            Custom quote based on size, flavour, finish, and detail.
          </p>
        </div>
      </section>

      <section className="intro-band" aria-label="Brand promise">
        <p>Personal by design</p>
        <span />
        <p>Beautiful and delicious</p>
        <span />
        <p>Clear from enquiry to collection</p>
      </section>

      <section className="section offerings" id="cakes">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we make</p>
            <h2>Cakes and treats for a celebration that feels like yours.</h2>
          </div>
          <p>
            Every order is quoted individually. Start with the format you need,
            then share your colours, flavour ideas, serving count, and
            inspiration.
          </p>
        </div>

        <div className="offering-grid">
          {offerings.map((offering) => (
            <article className="offering" key={offering.title}>
              <div className="offering-image">
                <img
                  src={offering.image}
                  alt=""
                  style={{ objectPosition: offering.position }}
                />
                <span>{offering.label}</span>
              </div>
              <div className="offering-copy">
                <h3>{offering.title}</h3>
                <p>{offering.copy}</p>
                <a href="#custom-order">Enquire about this</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="ordering">
        <div className="process-inner">
          <div className="process-lead">
            <p className="eyebrow">A simple ordering process</p>
            <h2>From first idea to the final handover.</h2>
            <p>
              Good custom work starts with a clear brief. We will guide the
              details and keep the final order in one easy-to-check summary.
            </p>
          </div>
          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section order-section" id="custom-order">
        <div className="order-intro">
          <p className="eyebrow">Custom-order enquiry</p>
          <h2>Tell us what you would love to celebrate.</h2>
          <p>
            Complete the short brief and we will open WhatsApp with your order
            details ready to send. You can attach inspiration images once the
            conversation opens.
          </p>
          <div className="order-contact">
            <span>WhatsApp</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </div>
          <p className="order-small">
            An enquiry is not confirmed until availability, the quote, and the
            required payment have been accepted.
          </p>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Your name
              <input
                required
                autoComplete="name"
                value={order.name}
                onChange={(event) =>
                  setOrder({ ...order, name: event.target.value })
                }
                placeholder="Your full name"
              />
            </label>
            <label>
              Your contact number
              <input
                required
                inputMode="tel"
                autoComplete="tel"
                value={order.phone}
                onChange={(event) =>
                  setOrder({ ...order, phone: event.target.value })
                }
                placeholder="e.g. 071 234 5678"
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Occasion
              <select
                required
                value={order.occasion}
                onChange={(event) =>
                  setOrder({ ...order, occasion: event.target.value })
                }
              >
                <option value="">Choose an occasion</option>
                <option>Birthday</option>
                <option>Baby shower</option>
                <option>Wedding or engagement</option>
                <option>Graduation</option>
                <option>Anniversary</option>
                <option>Business event or gifting</option>
                <option>Another celebration</option>
              </select>
            </label>
            <label>
              Date needed
              <input
                required
                type="date"
                value={order.date}
                onChange={(event) =>
                  setOrder({ ...order, date: event.target.value })
                }
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Number of servings
              <input
                required
                inputMode="numeric"
                value={order.servings}
                onChange={(event) =>
                  setOrder({ ...order, servings: event.target.value })
                }
                placeholder="e.g. 20"
              />
            </label>
            <label>
              Preferred flavour
              <input
                value={order.flavour}
                onChange={(event) =>
                  setOrder({ ...order, flavour: event.target.value })
                }
                placeholder="Vanilla, chocolate..."
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Budget range
              <input
                inputMode="decimal"
                value={order.budget}
                onChange={(event) =>
                  setOrder({ ...order, budget: event.target.value })
                }
                placeholder="Your approximate budget"
              />
            </label>
            <label>
              Collection or delivery
              <select
                value={order.fulfilment}
                onChange={(event) =>
                  setOrder({ ...order, fulfilment: event.target.value })
                }
              >
                <option>Collection</option>
                <option>Delivery enquiry</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </div>

          <label>
            Describe your cake or treats
            <textarea
              required
              value={order.details}
              onChange={(event) =>
                setOrder({ ...order, details: event.target.value })
              }
              placeholder="Tell us about the theme, colours, wording, finish, dietary considerations, and any other special details."
            />
          </label>

          <button className="button button-primary" type="submit">
            Open WhatsApp enquiry
          </button>
          <p className="form-status" aria-live="polite">
            {status ||
              "Your details stay on this device until you choose to open WhatsApp."}
          </p>
        </form>
      </section>

      <section className="brand-story">
        <div className="brand-story-image">
          <img
            src="/packaging-system.png"
            alt="G-Unit Cakes packaging with cake box, cupcake box, card, labels, and treat bag"
          />
        </div>
        <div className="brand-story-copy">
          <p className="eyebrow">Thoughtful to the last detail</p>
          <h2>Made to arrive like a gift.</h2>
          <p>
            The care should be visible before the box is opened. G-Unit Cakes
            brings the same considered finish to the cake, the message, and the
            handover.
          </p>
          <a className="text-link" href="#custom-order">
            Plan your order
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Keep in touch</p>
          <h2>See recent work, then tell us what you have in mind.</h2>
        </div>
        <div className="contact-links">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <span>Instagram</span>
            <strong>@gunitcakes_10</strong>
          </a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer">
            <span>TikTok</span>
            <strong>@gunit.cakes</strong>
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
            <span>Facebook</span>
            <strong>G-Unit Cakes</strong>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            <span>WhatsApp</span>
            <strong>{WHATSAPP_DISPLAY}</strong>
          </a>
        </div>
      </section>

      <footer>
        <BrandLockup light />
        <p>Custom cakes and sweet details, made for your moment.</p>
        <a href="#top">Back to top</a>
      </footer>

      <a
        className="whatsapp-float"
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Message G-Unit Cakes on WhatsApp at ${WHATSAPP_DISPLAY}`}
      >
        WhatsApp
      </a>
    </main>
  );
}
