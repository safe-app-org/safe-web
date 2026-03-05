"use client";

import { useEffect, useState } from "react";
import LogoIcon from '../public/icons/logo.svg';

const APP_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";

const COPY = {
  en: {
    nav: {
      features: "Features",
      how: "How it works",
      install: "Install",
      privacy: "Privacy",
      faq: "FAQ"
    },
    hero: {
      badge: "Calm, clear, and fast",
      title: "Safe — quick safety check-ins for you and your trusted contacts",
      subtitle:
        "Safe is a privacy-first safety check-in app that helps people in Ukraine and their families share status updates in seconds without panic.",
      ctaPrimary: "Get the app",
      ctaSecondary: "View features",
      highlight: "One tap: I’m Safe"
    },
    trust: {
      title: "Built around trust and speed",
      items: [
        "Invite trusted contacts",
        "Get notified when someone checks in",
        "Auto location with manual override"
      ]
    },
    features: {
      title: "Everything you need for calm check-ins",
      subtitle: "Designed so updates are fast, clear, and respectful of privacy.",
      cards: [
        {
          title: "Instant check-ins",
          text: "One tap: I’m Safe, or choose: In shelter / Behind two walls / I’m in danger."
        },
        {
          title: "Trusted circles",
          text: "Invite trusted contacts and see a friends feed with the latest status updates."
        },
        {
          title: "Live notifications",
          text: "Get notified when someone checks in, and ping a friend if they have not updated."
        },
        {
          title: "Location clarity",
          text: "Auto location with manual override — clearly marked as device or manual."
        },
        {
          title: "Safety nudges",
          text: "Ping a friend to encourage a quick check-in when it matters most."
        },
        {
          title: "Regional alerts (soon)",
          text: "Optional air-raid alerts integration by region via a webhook pipeline."
        }
      ]
    },
    how: {
      title: "How it works",
      steps: [
        {
          title: "Create your Safe circle",
          text: "Invite trusted contacts and choose who sees each update."
        },
        {
          title: "Check in with one tap",
          text: "Pick a status: I’m Safe, In shelter, Behind two walls, or I’m in danger."
        },
        {
          title: "Share your location",
          text: "Auto location with manual override, always labeled for clarity."
        },
        {
          title: "Stay connected",
          text: "Receive push notifications and ping a friend if they go quiet."
        }
      ]
    },
    ukraine: {
      title: "Designed for Ukraine",
      text:
        "Safe supports Ukrainian and English, with a calm interface built for real moments in Ukraine. Soon, opt into optional regional air-raid alerts integration when available."
    },
    privacy: {
      title: "Privacy and control",
      items: [
        {
          title: "You decide what to share",
          text: "Share only the status and location you want. Manual location is always an option."
        },
        {
          title: "Clear location labels",
          text: "Everyone can see whether a location is auto from the device or manually set."
        },
        {
          title: "Respectful by design",
          text: "No public feed, no ads, and no pressure to share more than you choose."
        }
      ]
    },
    install: {
      title: "Install Safe today",
      text: "Safe is available on the App Store and Google Play.",
      note: "Fast installs, no ads, and a calm experience.",
      appStore: "Download on the App Store",
      googlePlay: "Get it on Google Play"
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Is Safe free to use?",
          a: "Safe will always have a free plan for core safety check-ins."
        },
        {
          q: "Can I hide my exact location?",
          a: "Yes. You can share a manual location or none at all."
        },
        {
          q: "What does “Ping a friend” do?",
          a: "It sends a gentle nudge to check in, without escalating to emergency services."
        },
        {
          q: "How are alerts handled?",
          a: "Regional air-raid alerts are optional and planned as an integration, not required."
        }
      ]
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms",
      contact: "Contact",
      rights: "Made with care for families and friends." 
    }
  },
  ua: {
    nav: {
      features: "Можливості",
      how: "Як це працює",
      install: "Встановити",
      privacy: "Приватність",
      faq: "Питання"
    },
    hero: {
      badge: "Спокійно, чітко, швидко",
      title: "Safe — швидкі перевірки безпеки для вас і ваших близьких",
      subtitle:
        "Safe — це додаток для швидких перевірок безпеки, який допомагає людям в Україні та їхнім близьким ділитися статусом за секунди без паніки.",
      ctaPrimary: "Встановити додаток",
      ctaSecondary: "Дивитися можливості",
      highlight: "One tap: I’m Safe"
    },
    trust: {
      title: "Довіра і швидкість в основі",
      items: [
        "Invite trusted contacts",
        "Get notified when someone checks in",
        "Auto location with manual override"
      ]
    },
    features: {
      title: "Усе потрібне для спокійних чек-інів",
      subtitle: "Оновлення прості, зрозумілі та з повагою до приватності.",
      cards: [
        {
          title: "Миттєві статуси",
          text: "One tap: I’m Safe або оберіть: In shelter / Behind two walls / I’m in danger."
        },
        {
          title: "Коло довіри",
          text: "Invite trusted contacts і переглядайте стрічку статусів друзів."
        },
        {
          title: "Сповіщення",
          text: "Get notified when someone checks in та Ping a friend, якщо немає оновлень."
        },
        {
          title: "Локація під контролем",
          text: "Auto location with manual override — з позначкою авто або вручну."
        },
        {
          title: "М’яке нагадування",
          text: "Ping a friend — делікатний поштовх для швидкого чек-іну."
        },
        {
          title: "Регіональні тривоги (soon)",
          text: "Опційна інтеграція повітряних тривог за регіонами через webhook pipeline."
        }
      ]
    },
    how: {
      title: "Як це працює",
      steps: [
        {
          title: "Створіть коло Safe",
          text: "Запросіть близьких і виберіть, хто бачить оновлення."
        },
        {
          title: "Один дотик",
          text: "Статуси: I’m Safe, In shelter, Behind two walls або I’m in danger."
        },
        {
          title: "Локація — як вам зручно",
          text: "Auto location with manual override, завжди з чіткою позначкою."
        },
        {
          title: "Будьте на зв’язку",
          text: "Push-сповіщення та Ping a friend, якщо хтось довго не оновлюється."
        }
      ]
    },
    ukraine: {
      title: "Створено для України",
      text:
        "Safe підтримує українську та англійську, зі спокійним інтерфейсом для реальних моментів в Україні. Незабаром — опційна інтеграція регіональних тривог."
    },
    privacy: {
      title: "Приватність і контроль",
      items: [
        {
          title: "Ви вирішуєте",
          text: "Діліться лише статусом і локацією, яку хочете. Можна вручну."
        },
        {
          title: "Чіткі позначки",
          text: "Усі бачать, чи локація з пристрою, чи встановлена вручну."
        },
        {
          title: "Повага до приватності",
          text: "Немає публічної стрічки, реклами чи тиску ділитися більше."
        }
      ]
    },
    install: {
      title: "Встановіть Safe вже сьогодні",
      text: "Safe доступний в App Store та Google Play.",
      note: "Швидке встановлення, без реклами й зайвого шуму.",
      appStore: "Завантажити в App Store",
      googlePlay: "Встановити з Google Play"
    },
    faq: {
      title: "Питання",
      items: [
        {
          q: "Safe безкоштовний?",
          a: "Основні перевірки безпеки завжди будуть безкоштовними."
        },
        {
          q: "Чи можна приховати точну локацію?",
          a: "Так. Можна вказати вручну або не ділитися нею."
        },
        {
          q: "Що робить “Ping a friend”?",
          a: "Надсилає делікатне нагадування без ескалації до служб."
        },
        {
          q: "Як працюють тривоги?",
          a: "Регіональні повітряні тривоги — опційна інтеграція в планах."
        }
      ]
    },
    footer: {
      privacy: "Політика приватності",
      terms: "Умови",
      contact: "Контакт",
      rights: "З турботою про родини та друзів." 
    }
  }
};

type LangKey = keyof typeof COPY;

function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <LogoIcon/>
    </div>
  );
}

function IconShield() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l7 4v5c0 5-3.8 8.7-7 9-3.2-.3-7-4-7-9V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 00-3-3.87" />
      <path d="M7 21v-2a4 4 0 013-3.87" />
      <circle cx="9" cy="7" r="3" />
      <circle cx="15" cy="9" r="3" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8a6 6 0 10-12 0c0 7-3 6-3 8h18c0-2-3-1-3-8" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s6-5.4 6-11a6 6 0 10-12 0c0 5.6 6 11 6 11z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function IconWave() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12c2.5-3.5 5.5-3.5 8 0s5.5 3.5 8 0" />
      <path d="M4 6c2.5-3.5 5.5-3.5 8 0s5.5 3.5 8 0" />
      <path d="M4 18c2.5-3.5 5.5-3.5 8 0s5.5 3.5 8 0" />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.3 3.2l-8 13.9a1 1 0 00.9 1.5h16.6a1 1 0 00.9-1.5l-8-13.9a1 1 0 00-1.4 0z" />
    </svg>
  );
}

export default function Home() {
  const [lang, setLang] = useState<LangKey>("en");

  useReveal();

  useEffect(() => {
    const stored = window.localStorage.getItem("safe-lang") as LangKey | null;
    if (stored && (stored === "en" || stored === "ua")) {
      setLang(stored);
      return;
    }
    const browser = window.navigator.language.toLowerCase();
    setLang(browser.startsWith("uk") ? "ua" : "en");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("safe-lang", lang);
    document.documentElement.lang = lang === "ua" ? "uk" : "en";
  }, [lang]);

  const t = COPY[lang];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Safe",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "iOS, Android",
        inLanguage: ["en", "uk"],
        availableLanguage: ["English", "Ukrainian"],
        description:
          lang === "en"
            ? "Safe is a safety check-in app for trusted contacts with one-tap statuses, privacy-first location sharing, notifications, and friend pinging."
            : "Safe — це додаток для перевірки безпеки для близьких контактів з оновленням статусу в один дотик, приватним поширенням локації, сповіщеннями та функцією Ping a friend.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD"
        },
        areaServed: {
          "@type": "Country",
          name: "Ukraine"
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faq.items.map(item => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a
          }
        }))
      }
    ]
  };

  const featureIcons = [
    <IconShield key="shield" />,
    <IconUsers key="users" />,
    <IconBell key="bell" />,
    <IconLocation key="location" />,
    <IconWave key="wave" />,
    <IconAlert key="alert" />
  ];

  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="absolute left-1/2 top-[-260px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-mint/10 blur-[120px]" />
      <div className="absolute right-[-120px] top-[140px] h-[320px] w-[320px] rounded-full bg-sky/10 blur-[140px]" />
      <div className="absolute left-[-140px] top-[680px] h-[320px] w-[320px] rounded-full bg-mint/10 blur-[160px]" />

      <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="transition hover:text-white">
              {t.nav.features}
            </a>
            <a href="#how" className="transition hover:text-white">
              {t.nav.how}
            </a>
            <a href="#install" className="transition hover:text-white">
              {t.nav.install}
            </a>
            <a href="#privacy" className="transition hover:text-white">
              {t.nav.privacy}
            </a>
            <a href="#faq" className="transition hover:text-white">
              {t.nav.faq}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                lang === "en"
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white"
              }`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                lang === "ua"
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white"
              }`}
              onClick={() => setLang("ua")}
            >
              UA
            </button>
          </div>
        </div>
      </header>

      <section
        className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24"
        aria-labelledby="hero-title"
      >
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6" data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
              {t.hero.badge}
            </span>
            <h1
              id="hero-title"
              className="text-4xl font-display font-semibold leading-tight text-white md:text-5xl"
            >
              {t.hero.title}
            </h1>
            <p className="text-lg text-white/70 md:text-xl">{t.hero.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#install" className="button-primary">
                {t.hero.ctaPrimary}
              </a>
              <a href="#features" className="button-secondary">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <div className="h-10 w-10 rounded-full bg-mint/20 text-mint flex items-center justify-center">
                <IconShield />
              </div>
              <p className="text-sm">{t.hero.highlight}</p>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/55">
              {lang === "en"
                ? "Safe helps friends, partners, and families see who is safe, who is in shelter, who is behind two walls, and who may need urgent attention."
                : "Safe допомагає друзям, партнерам і родинам бачити, хто в безпеці, хто в укритті, хто за двома стінами, а хто може потребувати термінової уваги."}
            </p>
          </div>
          <div className="relative" data-reveal>
            <div className="absolute -right-10 top-10 h-44 w-44 rounded-full bg-mint/20 blur-[80px]" />
            <div className="glass rounded-[36px] p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-mint/20 flex items-center justify-center">
                    <IconShield />
                  </div>
                  <div className="text-sm text-white/70">Safe status</div>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-mint">Live</span>
              </div>
              <div className="mt-6 flex flex-col items-center gap-6">
                <div className="h-40 w-40 rounded-full bg-mint/20 flex items-center justify-center">
                  <div className="h-28 w-28 rounded-full bg-mint text-ink flex items-center justify-center text-sm font-semibold">
                    I’m Safe
                  </div>
                </div>
                <div className="grid w-full gap-3 text-sm text-white/70">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span>Location</span>
                    <span className="text-white">Auto: Kyiv</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span>Trusted contacts</span>
                    <span className="text-white">12 online</span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                  <span className="text-white/70">Ping a friend</span>
                  <button className="rounded-full bg-mint/20 px-3 py-1 text-xs text-mint">Ping</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3" data-reveal>
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg font-semibold">{t.trust.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {t.trust.items.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-mint" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-6 md:col-span-2">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">One tap: I’m Safe</div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">In shelter / Behind two walls / I’m in danger</div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Get notified when someone checks in</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16" aria-labelledby="overview-title">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="glass rounded-3xl p-6 md:p-8" data-reveal>
            <h2 id="overview-title" className="text-2xl font-display font-semibold md:text-3xl">
              {lang === "en"
                ? "A safety check-in app built for real-life urgency"
                : "Додаток для перевірки безпеки, створений для реальної терміновості"}
            </h2>
            <p className="mt-4 text-white/70">
              {lang === "en"
                ? "Safe is designed for people in Ukraine who need a fast, private way to update trusted contacts. Instead of long messages, one tap can tell the people who matter most whether you are safe, in shelter, behind two walls, or in danger."
                : "Safe створений для людей в Україні, яким потрібен швидкий і приватний спосіб оновити статус для близьких. Замість довгих повідомлень один дотик дає зрозуміти, чи ви в безпеці, в укритті, за двома стінами або в небезпеці."}
            </p>
          </article>
          <article className="glass rounded-3xl p-6 md:p-8" data-reveal>
            <h2 className="text-2xl font-display font-semibold md:text-3xl">
              {lang === "en"
                ? "Clear enough for family, careful enough for privacy"
                : "Достатньо зрозумілий для родини, достатньо обережний для приватності"}
            </h2>
            <p className="mt-4 text-white/70">
              {lang === "en"
                ? "Location support is explicit, with auto location from the device and manual override when you want more control. Safe focuses on trusted contacts, notifications, and calm communication instead of noise."
                : "Підтримка локації тут прозора: автоматично з пристрою або вручну, коли потрібен більший контроль. Safe зосереджений на близьких контактах, сповіщеннях і спокійній комунікації без зайвого шуму."}
            </p>
          </article>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="features-title">
        <div className="max-w-2xl" data-reveal>
          <h2 id="features-title" className="text-3xl font-display font-semibold md:text-4xl">
            {t.features.title}
          </h2>
          <p className="mt-4 text-white/70">{t.features.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.features.cards.map((card, index) => (
            <article
              key={card.title}
              className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-card"
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="flex items-center gap-3 text-mint">
                <div className="h-11 w-11 rounded-2xl bg-mint/15 flex items-center justify-center">
                  {featureIcons[index]}
                </div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              </div>
              <p className="mt-4 text-sm text-white/70">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="how-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div data-reveal>
            <h2 id="how-title" className="text-3xl font-display font-semibold md:text-4xl">
              {t.how.title}
            </h2>
            <p className="mt-4 text-white/70">
              {lang === "en"
                ? "A simple flow that respects urgency and privacy."
                : "Простий сценарій, що поважає терміновість і приватність."}
            </p>
          </div>
          <div className="space-y-4">
            {t.how.steps.map((step, index) => (
              <div
                key={step.title}
                className="glass rounded-3xl p-5"
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint/20 text-sm font-semibold text-mint">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="ukraine-title">
        <div className="glass rounded-3xl p-8 md:p-10" data-reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 id="ukraine-title" className="text-3xl font-display font-semibold md:text-4xl">
                {t.ukraine.title}
              </h2>
              <p className="mt-4 max-w-2xl text-white/70">{t.ukraine.text}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/70">{lang === "en" ? "Language" : "Мова"}</p>
              <div className="mt-2 flex items-center gap-3 text-lg font-semibold">
                <span className="text-mint">UA</span>
                <span className="text-white/40">/</span>
                <span>EN</span>
              </div>
              <p className="mt-4 text-sm text-white/60">
                {lang === "en"
                  ? "Air-raid alerts by region (soon)"
                  : "Повітряні тривоги за регіонами (soon)"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy" className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="privacy-title">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4" data-reveal>
            <h2 id="privacy-title" className="text-3xl font-display font-semibold md:text-4xl">
              {t.privacy.title}
            </h2>
            <p className="text-white/70">
              {lang === "en"
                ? "Safe is built to keep you in control of your information, even when things are urgent."
                : "Safe створено так, щоб ви контролювали свої дані навіть у термінові моменти."}
            </p>
          </div>
          <div className="space-y-4">
            {t.privacy.items.map((item, index) => (
              <div
                key={item.title}
                className="glass rounded-3xl p-6"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="install" className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="install-title">
        <div className="glass rounded-3xl p-8 md:p-10" data-reveal>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h2 id="install-title" className="text-3xl font-display font-semibold md:text-4xl">
                {t.install.title}
              </h2>
              <p className="mt-4 text-white/70">{t.install.text}</p>
              <p className="mt-3 text-sm text-white/60">{t.install.note}</p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
                {lang === "en"
                  ? "Install the safety app for iPhone or Android to start sending fast status updates, invite trusted contacts, and receive notifications when someone checks in."
                  : "Встановіть додаток безпеки на iPhone або Android, щоб надсилати швидкі оновлення статусу, запрошувати близькі контакти та отримувати сповіщення, коли хтось відмічається."}
              </p>
            </div>
            <div className="grid gap-4">
              <a
                href={APP_STORE_URL}
                className="gradient-border rounded-full px-1 py-1"
                aria-label={t.install.appStore}
              >
                <div className="button-secondary w-full text-center font-semibold">{t.install.appStore}</div>
              </a>
              <a
                href={GOOGLE_PLAY_URL}
                className="gradient-border rounded-full px-1 py-1"
                aria-label={t.install.googlePlay}
              >
                <div className="button-primary w-full text-center font-semibold">{t.install.googlePlay}</div>
              </a>
              <p className="text-xs text-white/50">
                {lang === "en" ? "Available now on iOS and Android." : "Доступно вже зараз на iOS та Android."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="faq-title">
        <div data-reveal>
          <h2 id="faq-title" className="text-3xl font-display font-semibold md:text-4xl">
            {t.faq.title}
          </h2>
        </div>
        <div className="mt-8 grid gap-4">
          {t.faq.items.map((item, index) => (
            <details
              key={item.q}
              className="glass rounded-3xl p-6"
              data-reveal
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <summary className="cursor-pointer list-none text-lg font-semibold">
                {item.q}
              </summary>
              <p className="mt-3 text-sm text-white/70">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/5 pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <a href="/privacy" className="transition hover:text-white">
              {t.footer.privacy}
            </a>
            <a href="/terms" className="transition hover:text-white">
              {t.footer.terms}
            </a>
            <a href="/contact" className="transition hover:text-white">
              {t.footer.contact}
            </a>
          </div>
          <p>{t.footer.rights}</p>
        </div>
      </footer>

    </main>
  );
}
