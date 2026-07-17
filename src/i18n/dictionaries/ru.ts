import type { Dictionary } from "../types";
import {
  TELEGRAM_CHANNELS,
  TELEGRAM_CONTACT,
  TELEGRAM_CONTACT_HANDLE,
} from "../config";

export const ru: Dictionary = {
  locale: "ru",
  site: {
    name: "SpdTop",
    tagline: "Студия разработки",
    fullName: "SpdTop — студия разработки",
    description:
      "Разрабатываем ботов, приложения, сайты, игры и кастомные digital-продукты под ключ — для клиентов по всему миру.",
    telegram: TELEGRAM_CONTACT,
    telegramHandle: TELEGRAM_CONTACT_HANDLE,
    telegramChannel: TELEGRAM_CHANNELS.ru.url,
    telegramChannelHandle: TELEGRAM_CHANNELS.ru.handle,
    city: "Удалённо · Весь мир",
  },
  nav: [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги" },
    { href: "/about", label: "О студии" },
    { href: "/contact", label: "Контакты" },
  ],
  ui: {
    discussProject: "Обсудить проект",
    ourServices: "Наши услуги",
    getInTouch: "Написать нам",
    aboutUs: "О студии",
    startProject: "Начать проект",
    allServices: "Все услуги →",
    learnMore: "Подробнее →",
    menu: "Меню",
    navigation: "Навигация",
    contact: "Контакты",
    directContact: "Прямая связь",
    openTelegram: "Написать в Telegram",
    joinChannel: "Подписаться на канал",
    sendRequest: "Отправить бриф",
    sending: "Отправка…",
    thanks: "Спасибо!",
    thanksMessage: "Мы получили бриф и скоро ответим в Telegram.",
    errorMessage: "Не удалось отправить форму. Напишите напрямую в Telegram.",
    language: "Язык",
  },
  hero: {
    srTitle: "SpdTop — студия разработки. Боты, приложения, сайты, игры.",
    headlinePrefix: "Мы делаем ",
    headlineHighlight: "почти всё",
    headlineSuffix: ", что можно закодить",
    description:
      "Боты, приложения, сайты, игры и кастомные решения. Берём идею, доводим до продакшена.",
    marquee: "Боты · Приложения · Сайты · Игры · SaaS · Автоматизация · MVP · ",
  },
  services: [
    {
      id: "bots",
      title: "Боты",
      subtitle: "Telegram · Discord · VK",
      description:
        "Автоматизация, поддержка клиентов, внутренние инструменты и интеграции с CRM. Боты, которые реально работают 24/7.",
      icon: "◈",
      stack: ["Python", "Node.js", "aiogram", "Telegraf"],
    },
    {
      id: "apps",
      title: "Приложения",
      subtitle: "Web · Mobile · Desktop",
      description:
        "От MVP до продакшена: React, Next.js, React Native, Electron. Быстро, масштабируемо, с чистой архитектурой.",
      icon: "◎",
      stack: ["Next.js", "React Native", "TypeScript"],
    },
    {
      id: "websites",
      title: "Сайты",
      subtitle: "Лендинги · Корпоратив · E-commerce",
      description:
        "Сайты с характером: SEO, скорость, анимации без лагов. От визитки до сложных платформ.",
      icon: "✦",
      stack: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      id: "games",
      title: "Игры",
      subtitle: "2D · Web · Mobile",
      description:
        "Казуальные игры, интерактивы, gamification для брендов. Unity, Phaser, WebGL — подбираем стек под задачу.",
      icon: "▲",
      stack: ["Unity", "Phaser", "Three.js"],
    },
    {
      id: "custom",
      title: "Кастом",
      subtitle: "API · SaaS · Автоматизация",
      description:
        "Нестандартные задачи — наш профиль. Парсеры, дашборды, ML-интеграции, микросервисы. Если можно закодить — мы сделаем.",
      icon: "◆",
      stack: ["Python", "Go", "PostgreSQL", "Docker"],
    },
  ],
  stats: [
    { value: "50+", label: "проектов" },
    { value: "5", label: "лет опыта" },
    { value: "24/7", label: "поддержка" },
  ],
  process: {
    subtitle: "Как мы работаем",
    title: "От идеи до релиза",
    steps: [
      {
        step: "01",
        title: "Бриф",
        text: "Созваниваемся, разбираем задачу, фиксируем scope и сроки.",
      },
      {
        step: "02",
        title: "Прототип",
        text: "MVP или wireframe за 3–7 дней. Вы видите результат до полной разработки.",
      },
      {
        step: "03",
        title: "Разработка",
        text: "Итерации с демо каждую неделю. Прозрачный процесс, без сюрпризов.",
      },
      {
        step: "04",
        title: "Запуск",
        text: "Деплой, документация, обучение. Остаёмся на связи после релиза.",
      },
    ],
  },
  servicesPreview: {
    subtitle: "Что мы делаем",
    title: "Разработка под любую задачу",
  },
  servicesPage: {
    subtitle: "Услуги",
    title: "Разрабатываем всё, что связано с кодом",
    intro:
      "Не ограничиваемся одним стеком или форматом. Расскажите задачу — подберём технологии и соберём команду под проект.",
  },
  cta: {
    title: "Есть идея? Давайте обсудим.",
    description:
      "Бесплатная консультация 30 минут. Расскажете задачу — предложим решение и озвучим сроки.",
  },
  about: {
    subtitle: "О нас",
    title: "Кто такие SpdTop",
    paragraphs: [
      "SpdTop — студия разработки, работающая с клиентами по всему миру. Мы делаем ботов, веб-приложения, мобильные приложения, сайты, игры и всё, что можно собрать из кода.",
      "Не агентство с «менеджерами посередине». Общаетесь напрямую с теми, кто пишет код. Меньше слоёв — быстрее результат.",
      "Работаем со стартапами, бизнесом и частными заказчиками. Полностью удалённо — по всему миру.",
    ],
    valuesSubtitle: "Ценности",
    valuesTitle: "Как мы работаем",
    values: [
      {
        title: "Скорость без хаоса",
        text: "MVP за недели, не месяцы. Но без технического долга — код, который не стыдно масштабировать.",
      },
      {
        title: "Прозрачность",
        text: "Демо каждую неделю, доступ к репозиторию, понятные сметы. Никаких «сюрпризов» в конце.",
      },
      {
        title: "Полный цикл",
        text: "От брифа до деплоя и поддержки. Не бросаем проект после релиза.",
      },
      {
        title: "Любая сложность",
        text: "Лендинг, SaaS, бот с ML, multiplayer-игра — если можно описать, можно реализовать.",
      },
    ],
  },
  contact: {
    subtitle: "Контакты",
    title: "Обсудим ваш проект",
    intro:
      "Заполните бриф ниже или напишите в Telegram — обсудим задачу, сроки и бюджет.",
    telegramTitle: "Telegram",
    telegramDesc: "Удобнее написать напрямую? Мы на связи в Telegram.",
    channelTitle: "Канал студии",
    channelDesc: "Кейсы, релизы и новости студии.",
    briefTitle: "Бриф проекта",
    briefDesc: "Расскажите, что нужно сделать — заявка сразу попадёт в наш чат.",
    form: {
      nameLabel: "Имя",
      namePlaceholder: "Как к вам обращаться",
      contactLabel: "Telegram / Email",
      contactPlaceholder: "@username или email",
      messageLabel: "О проекте",
      messagePlaceholder: "Что нужно сделать, сроки, бюджет (если есть)",
    },
  },
  faq: [
    {
      q: "Сколько стоит разработка?",
      a: "Зависит от scope. Лендинг — от 80 000 ₽, бот — от 50 000 ₽, приложение — от 150 000 ₽. Точную смету даём после брифа.",
    },
    {
      q: "Какие сроки?",
      a: "MVP — от 2 недель. Полноценный продукт — 1–3 месяца. Срочные задачи обсуждаем отдельно.",
    },
    {
      q: "Работаете удалённо?",
      a: "Да. Клиенты по всему миру — Россия, СНГ, Европа, США. Созвоны, демо, документация — всё онлайн.",
    },
    {
      q: "Даёте ли поддержку после запуска?",
      a: "Да. Пакеты поддержки от 10 000 ₽/мес: багфиксы, обновления, мониторинг.",
    },
  ],
  footer: {
    servicesLine: "Боты · Приложения · Сайты · Игры · Кастом",
  },
  meta: {
    title: "SpdTop — студия разработки | Боты, приложения, сайты, игры",
    description:
      "SpdTop — разрабатываем ботов, приложения, сайты и игры для клиентов по всему миру. Быстро, качественно, под ключ. Обсудим ваш проект?",
    keywords: [
      "студия разработки",
      "разработка ботов",
      "разработка приложений",
      "разработка сайтов",
      "разработка игр",
      "заказать разработку",
      "разработка на заказ",
      "удалённая команда разработки",
      "SpdTop",
    ],
  },
  pageMeta: {
    services: {
      title: "Услуги",
      description:
        "SpdTop — разработка ботов, приложений, сайтов, игр и кастомных решений. Полный цикл от идеи до деплоя.",
    },
    about: {
      title: "О студии",
      description:
        "SpdTop — студия разработки с клиентами по всему миру. Боты, приложения, сайты, игры. Прямое общение с инженерами.",
    },
    contact: {
      title: "Контакты",
      description:
        "Связаться со SpdTop в Telegram @speed_tops. Обсудим проект — боты, приложения, сайты, игры.",
    },
  },
  jsonLd: {
    inLanguage: "ru-RU",
    areaServed: "Worldwide",
    serviceTypes: [
      "Разработка ПО",
      "Разработка ботов",
      "Разработка веб-приложений",
      "Разработка мобильных приложений",
      "Разработка игр",
    ],
    priceRange: "$$",
  },
};
