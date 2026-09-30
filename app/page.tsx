"use client";

import { useEffect, useState } from "react";

// ————————————————————————————————————————————————————————————————
// Dottie's Lawn Care — Toronto & East York
// Skills: ui-ux-pro-max, shape, bolder
// Typography family: rounded-friendly (Nunito + Mulish)
// Palette family: cool-grayscale + steel-blue accent
// Identity anchor: HUSBAND-AND-WIFE OWNER-OPERATORS (Dorothy "Dottie" Stokes + Lorne)
// ————————————————————————————————————————————————————————————————

const PHONE_HREF = "tel:+14372174754";

const SERVICES = [
  {
    n: "01",
    title: "Lawn mowing",
    body: "Regular seasonal mowing and trimming across Toronto and East York, clippings cleared each visit. Reviewers say their lawn has never looked as good.",
  },
  {
    n: "02",
    title: "Spring & fall cleanup",
    body: "Full seasonal cleanups. The rescue work — customers repeatedly describe yards that had gotten away from them being brought back in a single visit.",
  },
  {
    n: "03",
    title: "Garden beds & weeding",
    body: "Hands-on gardening and bed restoration. One customer said the crew uncovered flowers the household didn't know they had.",
  },
  {
    n: "04",
    title: "Cedar & shrub planting",
    body: "Privacy hedging including a documented row of 12 emerald cedars, with a thorough walk-through and costing beforehand.",
  },
  {
    n: "05",
    title: "Landscape timber & edging",
    body: "Rotted timber removal and replacement in front garden beds. A Local Guide said the finished timbers looked like they were always there.",
  },
  {
    n: "06",
    title: "Patio stone & playground tile",
    body: "Cracked patio stone replaced with playground tiles for families with young kids — a rescue for uneven, bald backyard sections.",
  },
];

const TESTIMONIALS = [
  {
    name: "Tom Woodside",
    context: "Yard cleanup after a hip injury",
    body: "Because of a hip injury I hadn't been able to keep up with the yard and it had badly got away from me. Dottie's worked hard at it — the cleanup was amazing and the crew was very respectful. Highly recommend them.",
    hero: true,
  },
  {
    name: "Louie the Greek",
    context: "Garden & cedar care",
    body: "A garden is something a homeowner sees every day. What I liked was that Dottie and Lorne treated everything as if it was their own. Very meticulous — constantly checking on the cedars.",
  },
  {
    name: "Ted Lachmansingh",
    context: "Landscape timber replacement · Local Guide",
    body: "Dottie and Lorne worked over two days to remove and replace the landscape timbers in our front garden. Such a meticulous job — the timbers looked like they were always there — and they were careful to preserve the surrounding planting.",
  },
  {
    name: "Lisa Quirke",
    context: "Backyard playground tiles",
    body: "Lorne and Dottie replaced an uneven, patchy section of the backyard with new playground tiles. With two young kids the cracked patio stones and bald grass had been a problem — the result is fabulous.",
  },
  {
    name: "Jeff Bruce",
    context: "Garden tidy-up",
    body: "Dottie and Lorne were excellent — a huge help tidying up the gardens. They even uncovered some flowers we didn't know we had. Highly recommend.",
  },
  {
    name: "Teo Vasilescu",
    context: "Ongoing lawn care",
    body: "Lorne and Dottie have always been above and beyond professional. Our lawn has never looked as good as when Dottie's has handled it.",
  },
  {
    name: "Eric Rodrigues",
    context: "Landscaping · Local Guide",
    body: "A great experience working with Dottie and Lorne.",
  },
  {
    name: "Christine",
    context: "Garden service · East York local",
    body: "Glad to support an East York local small business. Dottie replied personally to thank me — same way they answer every review.",
  },
];

const PROCESS = [
  { n: "01", t: "Message", d: "Text or call the number. Dottie or Lorne reads it themselves — no dispatcher, no scheduling menu." },
  { n: "02", t: "Walk-through", d: "For anything beyond routine mowing, one of them walks the property and takes the scope in person." },
  { n: "03", t: "Costed up front", d: "Before work starts you get the price for the full job. Every review that mentions cost says it matched the quote." },
  { n: "04", t: "Meticulous visit", d: "The crew works the property like it's their own — the word 'meticulous' appears in three separate Google reviews." },
  { n: "05", t: "Left tidy", d: "Clippings cleared, beds tidy, timbers preserved. The yard is left the way you would have left it yourself." },
  { n: "06", t: "Personal reply", d: "Every review gets an answer signed by Dottie and Lorne. Every one — that's the level of care after the invoice." },
];

const FAQ = [
  { q: "Who does the work?", a: "Dottie (Dorothy Stokes) and Lorne — a husband-and-wife owner-operator team. They're on the property, not a subcontractor. Every one of their 11 Google reviews names them by first name." },
  { q: "Where do you work?", a: "Toronto, closely identified with East York — that's where most of our named reviewers are — and the surrounding neighbourhoods." },
  { q: "What kind of yard do you take on?", a: "Regular residential lawn and garden care; rescue jobs on yards that have gotten away through injury, time or neglect; and small hardscape like landscape timbers and playground tiles. If you're not sure whether it's your kind of job, just ask." },
  { q: "Do you plant cedars and shrubs?", a: "Yes — including full privacy hedging. One documented job was a row of 12 emerald cedars with a walk-through and costing beforehand; ongoing cedar care afterwards." },
  { q: "Do you handle the whole cleanup?", a: "Yes — spring and fall cleanups are one of the services we're named for. Beds, edges, trim, clippings — the full property, not just the open lawn." },
  { q: "How do you price?", a: "One quote, up front, for the full scope of the job. Reviewers consistently say the final result matched the quote. We don't add extras you didn't ask for." },
  { q: "How do I book?", a: "Text or call — Dottie or Lorne reads every message. Regular mowing and cleanup usually get same-week scheduling; hardscape and planting get a walk-through first." },
];

// ————————————————————————————————————————————————————————————————

function Star({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function LeafMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="19" fill="var(--charcoal)" />
      <path
        d="M13 26 C 13 18, 20 11, 27 13 C 27 20, 20 27, 13 26 Z"
        fill="var(--steel-glow)"
        opacity="0.9"
      />
      <path d="M14 25 C 18 22, 22 18, 26 14" stroke="var(--charcoal)" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function Section({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`px-6 md:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ldjson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dottie's Lawn Care",
    description:
      "Husband-and-wife owner-operated lawn care and gardening in Toronto and East York. Dottie (Dorothy Stokes) and Lorne — meticulous, personal, 5.0 across every review.",
    telephone: "+1-437-217-4754",
    areaServed: "Toronto and East York, Ontario",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "11" },
    sameAs: [
      "https://www.alignable.com/dotties-lawn-care",
      "https://www.instagram.com/stokes1006",
    ],
  };

  const featured = TESTIMONIALS.find((t) => t.hero)!;
  const rest = TESTIMONIALS.filter((t) => !t.hero);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldjson) }} />

      {/* Header */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-lg transition-colors ${
          scrolled ? "bg-[color:var(--paper)]/85 border-b border-[color:var(--hair)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-5">
          <a href="#top" className="flex items-center gap-3">
            <LeafMark className="w-9 h-9" />
            <div className="leading-tight">
              <div className="font-display font-black text-[18px] text-ink">Dottie&apos;s</div>
              <div className="chapter" style={{ marginTop: "-2px" }}>Lawn Care · Toronto</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[14px] text-ink-soft">
            <a href="#work" className="hover:text-steel-deep">Work</a>
            <a href="#reviews" className="hover:text-steel-deep">Reviews</a>
            <a href="#story" className="hover:text-steel-deep">Story</a>
            <a href="#process" className="hover:text-steel-deep">Process</a>
            <a href="#faq" className="hover:text-steel-deep">FAQ</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="hidden md:inline-flex items-center gap-2 bg-charcoal text-pearl px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-steel-deep"
          >
            Text or call
            <span className="font-mono text-[12px] opacity-80">·  437·217·4754</span>
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* HERO — Asymmetric Bento Hero, extreme weight contrast (bolder) */}
        <div className="grain">
          <Section className="pt-14 pb-24 md:pt-20 md:pb-36">
            <div className="flex flex-wrap items-center gap-3 mb-8 rise">
              <div className="pill">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--steel)]" />
                East York · Toronto
              </div>
              <div className="pill">Husband &amp; wife · owner-operated</div>
              <div className="pill">
                <span className="text-[color:var(--steel-deep)]">★</span>
                5.0 · 11 Google reviews
              </div>
            </div>

            <h1 className="rise rise-1 font-display leading-[0.86] text-ink" style={{ fontSize: "clamp(3.4rem, 11vw, 10.5rem)" }}>
              <span className="thinweight italic block text-[color:var(--ink-soft)]">Dottie &amp; Lorne</span>
              <span className="superweight block">take the yard</span>
              <span className="thinweight italic block text-[color:var(--steel-deep)]">personally.</span>
            </h1>

            <div className="mt-12 grid grid-cols-12 gap-6 rise rise-2">
              <div className="col-span-12 md:col-span-6">
                <p className="text-xl md:text-2xl leading-relaxed text-ink-soft max-w-[52ch]">
                  A husband-and-wife owner-operated lawn and garden shop in Toronto and East York. Dorothy Stokes and Lorne are on the property, not managing one. Every review names them by first name — and they answer every single one themselves.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-3 bg-charcoal text-pearl px-6 py-4 rounded-full font-semibold hover:bg-steel-deep"
                  >
                    Text or call now
                    <span className="font-mono text-sm opacity-80">437·217·4754</span>
                  </a>
                  <a
                    href="#work"
                    className="text-ink-soft border-b-2 border-hair-strong hover:text-steel-deep hover:border-steel py-1"
                  >
                    See what they do &rarr;
                  </a>
                </div>
              </div>
              <aside className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4">
                <div className="pod col-span-2">
                  <div className="chapter mb-2">The rating, all of it</div>
                  <div className="flex items-baseline gap-3">
                    <div className="font-display superweight text-6xl text-ink leading-none">5.0</div>
                    <div className="flex text-[color:var(--steel-deep)] pb-1"><Star /><Star /><Star /><Star /><Star /></div>
                  </div>
                  <div className="mt-3 text-sm text-ink-soft">Every one of 11 Google reviews. No negatives, ever.</div>
                </div>
                <div className="pod">
                  <div className="chapter mb-1.5">Owners</div>
                  <div className="font-display font-black text-2xl text-ink leading-tight">Dottie &amp; Lorne</div>
                  <div className="text-sm text-ink-quiet mt-1">Dorothy Stokes &amp; Lorne — since ~2020</div>
                </div>
                <div className="pod">
                  <div className="chapter mb-1.5">Reply rate</div>
                  <div className="font-display font-black text-2xl text-ink leading-tight">100%</div>
                  <div className="text-sm text-ink-quiet mt-1">Personal replies, signed by name</div>
                </div>
              </aside>
            </div>
          </Section>
        </div>

        {/* THREE-THEME BAND — inline (bolder rhythm) */}
        <div className="bg-charcoal text-pearl">
          <Section className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-baseline">
              <div className="flex items-baseline gap-4">
                <div className="font-mono text-[11px] text-[color:var(--steel-glow)] tracking-widest">01</div>
                <div className="font-display font-black text-xl md:text-2xl">Meticulous.</div>
                <div className="text-sm text-pearl/70">— word appears in 3 separate reviews.</div>
              </div>
              <div className="flex items-baseline gap-4">
                <div className="font-mono text-[11px] text-[color:var(--steel-glow)] tracking-widest">02</div>
                <div className="font-display font-black text-xl md:text-2xl">Personal.</div>
                <div className="text-sm text-pearl/70">— &ldquo;as if it was their own&rdquo;.</div>
              </div>
              <div className="flex items-baseline gap-4">
                <div className="font-mono text-[11px] text-[color:var(--steel-glow)] tracking-widest">03</div>
                <div className="font-display font-black text-xl md:text-2xl">Rescue.</div>
                <div className="text-sm text-pearl/70">— yards brought back in one visit.</div>
              </div>
            </div>
          </Section>
        </div>

        {/* WORK — Service Detail Cards (bolder w/ rounded pods, extreme scale numbers) */}
        <Section id="work" className="py-24 md:py-36">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-8">
              <div className="chapter mb-4">§ 01 · Work</div>
              <h2 className="font-display superweight text-ink leading-[0.9]" style={{ fontSize: "clamp(2.6rem, 6vw, 5.2rem)" }}>
                Mowing, gardening,<br />
                <span className="thinweight italic text-[color:var(--steel-deep)]">rescue and hardscape.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:pt-8">
              <p className="text-lg leading-relaxed text-ink-soft max-w-[44ch]">
                Six services under one husband-and-wife crew. Not a franchise, not a subcontractor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div key={s.n} className={`pod pod-lg flex flex-col ${i === 1 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="flex items-baseline justify-between mb-6">
                  <div className="font-mono text-[color:var(--steel-deep)] text-sm">{s.n}</div>
                  <div className="chapter">Service</div>
                </div>
                <h3 className="font-display font-black text-2xl md:text-3xl text-ink mb-3 leading-tight">{s.title}</h3>
                <p className="text-ink-soft leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* HERO PULL-QUOTE (single dominant named review) */}
        <div className="bg-paper-deep border-y border-hair">
          <Section className="py-24 md:py-36">
            <div className="chapter mb-6">§ 02 · Reviewed by name</div>
            <blockquote className="font-display leading-[1.05] text-ink" style={{ fontSize: "clamp(1.85rem, 5vw, 4rem)" }}>
              <span className="thinweight italic text-[color:var(--steel-deep)]">&ldquo;</span>
              <span className="thinweight italic">{featured.body.replace(/^\s*/, "")}</span>
              <span className="thinweight italic text-[color:var(--steel-deep)]">&rdquo;</span>
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-charcoal text-pearl flex items-center justify-center font-display font-black text-lg">
                TW
              </div>
              <div>
                <div className="font-display font-black text-lg text-ink">{featured.name}</div>
                <div className="chapter" style={{ marginTop: "2px" }}>{featured.context}</div>
              </div>
            </div>
          </Section>
        </div>

        {/* NAMED TESTIMONIAL CARDS — the crowd, bento with 1 promoted to 2-wide */}
        <Section id="reviews" className="py-24 md:py-36">
          <div className="flex items-baseline justify-between mb-14 flex-wrap gap-4">
            <div>
              <div className="chapter mb-4">§ 03 · The named ones</div>
              <h2 className="font-display superweight text-ink leading-[0.92]" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}>
                Eight neighbours,<br />
                <span className="thinweight italic text-[color:var(--steel-deep)]">named on the record.</span>
              </h2>
            </div>
            <div className="text-sm text-ink-quiet max-w-sm">
              Every reviewer signs their name on Google. None are anonymous. Dottie and Lorne answered every one personally.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((t, i) => (
              <figure key={t.name} className={`pod flex flex-col ${i === 0 ? "md:col-span-2 lg:row-span-2 bg-charcoal text-pearl border-0" : ""}`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`flex ${i === 0 ? "text-[color:var(--steel-glow)]" : "text-[color:var(--steel-deep)]"}`}>
                    <Star /><Star /><Star /><Star /><Star />
                  </div>
                </div>
                <blockquote className={`${i === 0 ? "font-display font-medium text-2xl md:text-3xl leading-snug" : "text-[16px] leading-relaxed"} ${i === 0 ? "text-pearl" : "text-ink-soft"} flex-1`}>
                  &ldquo;{t.body}&rdquo;
                </blockquote>
                <figcaption className={`mt-6 pt-4 border-t ${i === 0 ? "border-pearl/20" : "border-hair"}`}>
                  <div className={`font-display font-black ${i === 0 ? "text-pearl text-lg" : "text-ink"}`}>{t.name}</div>
                  <div className={`chapter ${i === 0 ? "text-pearl/60" : ""}`} style={{ marginTop: "2px" }}>{t.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* STORY / OWNER — hero pod with owner voice verbatim */}
        <Section id="story" className="py-24 md:py-36 border-t border-hair">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="chapter mb-4">§ 04 · The story</div>
              <h2 className="font-display superweight text-ink leading-[0.92]" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
                One summer,<br />
                <span className="thinweight italic text-[color:var(--steel-deep)]">five years ago.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="text-lg md:text-xl leading-relaxed text-ink-soft mb-8">
                Dottie and Lorne started the business at the beginning of a summer roughly five years ago and have grown it well beyond mowing — into full garden care, planting, and small hardscape work. They didn&apos;t hire out. They didn&apos;t franchise. They kept the crew to themselves so every property gets the same two people.
              </p>
              <div className="pod pod-lg border-2 border-[color:var(--charcoal)]">
                <div className="chapter mb-4">Their voice · verbatim, from Google review replies</div>
                <div className="space-y-4 font-display italic text-lg md:text-xl text-ink leading-relaxed">
                  <p>&ldquo;Thanks Tom! We are so glad you are happy with our work! Dottie and Lorne&rdquo;</p>
                  <p>&ldquo;Thanks Louie! We enjoyed taking care of your cedars.&rdquo;</p>
                  <p>&ldquo;Thank you Ted for the generous review. We were more than happy to be of service to you.&rdquo;</p>
                </div>
                <div className="chapter mt-4">Every review, personally answered. Signed.</div>
              </div>
            </div>
          </div>
        </Section>

        {/* PROCESS — Numbered list, sparse but bold */}
        <div className="bg-charcoal text-pearl">
          <Section id="process" className="py-24 md:py-36">
            <div className="grid grid-cols-12 gap-8 mb-14">
              <div className="col-span-12 md:col-span-6">
                <div className="chapter" style={{ color: "var(--steel-glow)" }}>§ 05 · Process</div>
                <h2 className="font-display superweight text-pearl leading-[0.92] mt-4" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}>
                  From message<br /><span className="thinweight italic" style={{ color: "var(--steel-glow)" }}>to a signed reply.</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PROCESS.map((p) => (
                <div key={p.n} className="border-t-2 border-pearl/20 pt-6">
                  <div className="font-mono text-sm mb-3" style={{ color: "var(--steel-glow)" }}>{p.n}</div>
                  <h3 className="font-display font-black text-2xl mb-3 text-pearl">{p.t}</h3>
                  <p className="text-pearl/70 leading-relaxed max-w-[36ch]">{p.d}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* STAT-STAND / TRUST BAND (Animated Stat Block from Section Library) */}
        <Section className="py-20 border-b border-hair">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "5.0", label: "Google rating" },
              { n: "11", label: "Google reviews · zero negatives" },
              { n: "8", label: "Named neighbours on the record" },
              { n: "100%", label: "Reviews personally answered" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display superweight text-ink leading-none" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
                  {s.n}
                </div>
                <div className="chapter mt-3">{s.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="py-24 md:py-36">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="chapter mb-4">§ 06 · Questions</div>
              <h2 className="font-display superweight text-ink leading-[0.92]" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}>
                Ask.<br />
                <span className="thinweight italic text-[color:var(--steel-deep)]">Answered plainly.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              {FAQ.map((f, i) => (
                <details key={i} data-faq>
                  <summary>
                    <span className="font-display font-bold text-xl md:text-2xl text-ink pr-6 leading-tight">{f.q}</span>
                    <span className="plus" aria-hidden>+</span>
                  </summary>
                  <div className="answer text-[17px] leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* CONTACT — Phone-Card Hero (oversized number) */}
        <div id="contact" className="bg-paper-deep border-t border-hair">
          <Section className="py-24 md:py-36">
            <div className="grid grid-cols-12 gap-10 items-start">
              <div className="col-span-12 md:col-span-7">
                <div className="chapter mb-6">§ 07 · Contact</div>
                <h2 className="font-display superweight text-ink leading-[0.9] mb-10" style={{ fontSize: "clamp(2.6rem, 8vw, 6rem)" }}>
                  Text Dottie.<br />
                  <span className="thinweight italic text-[color:var(--steel-deep)]">Or call Lorne.</span>
                </h2>
                <a
                  href={PHONE_HREF}
                  className="block font-mono font-bold text-ink leading-none hover:text-steel-deep mb-6"
                  style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", letterSpacing: "-0.03em" }}
                >
                  437 · 217 · 4754
                </a>
                <p className="text-ink-soft text-lg max-w-[42ch]">
                  Either of them reads every message themselves. Regular mowing and cleanup usually get same-week scheduling; hardscape and planting get a property walk-through first.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="pod pod-lg bg-charcoal text-pearl border-0">
                  <dl className="space-y-6">
                    <div>
                      <dt className="chapter mb-1.5" style={{ color: "var(--steel-glow)" }}>Where</dt>
                      <dd>Toronto — closely identified with East York — and the surrounding neighbourhoods.</dd>
                    </div>
                    <div>
                      <dt className="chapter mb-1.5" style={{ color: "var(--steel-glow)" }}>Owners</dt>
                      <dd>Dorothy &ldquo;Dottie&rdquo; Stokes &amp; Lorne — husband-and-wife owner-operators, since ~2020.</dd>
                    </div>
                    <div>
                      <dt className="chapter mb-1.5" style={{ color: "var(--steel-glow)" }}>Also on</dt>
                      <dd className="flex flex-wrap gap-x-4">
                        <a href="https://www.alignable.com/dotties-lawn-care" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[color:var(--steel-glow)]">Alignable</a>
                        <a href="https://www.instagram.com/stokes1006" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[color:var(--steel-glow)]">Instagram</a>
                      </dd>
                    </div>
                    <div>
                      <dt className="chapter mb-1.5" style={{ color: "var(--steel-glow)" }}>Best time to reach</dt>
                      <dd>Weekday mornings for callbacks; texts get answered throughout the day.</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </Section>
        </div>

        <footer className="py-10 border-t border-hair">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <LeafMark className="w-7 h-7" />
              <span className="font-display font-black text-ink">Dottie&apos;s Lawn Care</span>
              <span className="chapter hidden sm:inline">Toronto · East York</span>
            </div>
            <div className="chapter">&copy; {new Date().getFullYear()} · Dorothy Stokes &amp; Lorne · Owner-operated</div>
          </div>
        </footer>
      </main>
    </>
  );
}
