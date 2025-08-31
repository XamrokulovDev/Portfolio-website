export const languages = {
  en: "English",
  ru: "Русский",
  uz: "O'zbekcha",
} as const

export type Language = keyof typeof languages

export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",

    // Hero Section
    heroTitle: "Hi, I'm Ulfatjon",
    heroSubtitle: "Full-Stack Developer",
    heroDescription:
      "Frontend React/Next.js and Backend Node.js developer specializing in modern web applications and Telegram bot development. Creating innovative digital solutions from Uzbekistan for clients worldwide.",
    viewMyWork: "View My Work",
    getInTouch: "Get In Touch",

    // About Section
    aboutTitle: "About Ulfatjon",
    aboutDescription:
      "Passionate full-stack developer specializing in modern web technologies and Telegram bot development, creating innovative digital solutions for businesses worldwide.",
    buildingFuture: "Building the Digital Future",
    aboutText1:
      "With over 3 years of experience in full-stack development, I specialize in creating modern web applications using React, Next.js, TypeScript, and Node.js. My passion lies in building user-friendly interfaces and robust backend systems.",
    aboutText2:
      "Based in Uzbekistan, I work with clients globally to develop custom web applications and Telegram bots. From e-commerce platforms to automation tools, I bring ideas to life with clean, efficient code and modern development practices.",
    aboutText3:
      "I'm particularly skilled in Telegram bot development, having created over 15 bots with features ranging from payment processing to complex business automation. I believe in continuous learning and staying up-to-date with the latest web technologies.",
    yearsExperience: "Years Experience",
    projectsCompleted: "Projects Completed",
    telegramBots: "Telegram Bots",
    clientSatisfaction: "Client Satisfaction",
    coreExpertise: "Core Expertise",

    // Skills
    frontendDev: "Frontend Development",
    frontendDesc: "React, Next.js, TypeScript, Tailwind CSS - Building modern, responsive user interfaces",
    backendDev: "Backend Development",
    backendDesc: "Node.js, Express, API development, database design and server-side architecture",
    telegramBotDev: "Telegram Bot Development",
    telegramBotDesc: "Custom Telegram bots with advanced features, payment integration, and automation",
    mobileFirst: "Mobile-First Design",
    mobileFirstDesc: "Responsive web applications optimized for all devices and screen sizes",
    performance: "Performance Optimization",
    performanceDesc: "Fast-loading applications with optimized code, caching, and modern build tools",
    fullStack: "Full-Stack Solutions",
    fullStackDesc: "End-to-end web application development from concept to deployment",

    // Projects Section
    featuredProjects: "Featured Projects",
    projectsDescription:
      "Explore my portfolio of web applications, Telegram bots, and full-stack solutions that demonstrate expertise in modern development technologies and best practices.",
    highlightedWork: "Highlighted Work",

    // Contact Section
    contactTitle: "Get In Touch",
    contactDescription:
      "Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.",
    contactInfo: "Contact Information",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",

    // Footer
    footerDescription:
      "Full-stack developer specializing in React, Next.js, Node.js, and Telegram bot development. Creating innovative digital solutions from Uzbekistan.",
    quickLinks: "Quick Links",
    followMe: "Follow Me",
    allRightsReserved: "All rights reserved.",
  },

  ru: {
    // Navigation
    home: "Главная",
    about: "Обо мне",
    projects: "Проекты",
    contact: "Контакты",

    // Hero Section
    heroTitle: "Привет, я Улфатжон",
    heroSubtitle: "Full-Stack Разработчик",
    heroDescription:
      "Frontend React/Next.js и Backend Node.js разработчик, специализирующийся на современных веб-приложениях и разработке Telegram ботов. Создаю инновационные цифровые решения из Узбекистана для клиентов по всему миру.",
    viewMyWork: "Посмотреть работы",
    getInTouch: "Связаться",

    // About Section
    aboutTitle: "Об Улфатжоне",
    aboutDescription:
      "Увлеченный full-stack разработчик, специализирующийся на современных веб-технологиях и разработке Telegram ботов, создающий инновационные цифровые решения для бизнеса по всему миру.",
    buildingFuture: "Строим цифровое будущее",
    aboutText1:
      "С более чем 3-летним опытом в full-stack разработке, я специализируюсь на создании современных веб-приложений с использованием React, Next.js, TypeScript и Node.js. Моя страсть заключается в создании удобных интерфейсов и надежных backend систем.",
    aboutText2:
      "Базируясь в Узбекистане, я работаю с клиентами по всему миру для разработки пользовательских веб-приложений и Telegram ботов. От платформ электронной коммерции до инструментов автоматизации, я воплощаю идеи в жизнь с помощью чистого, эффективного кода и современных практик разработки.",
    aboutText3:
      "Я особенно искусен в разработке Telegram ботов, создав более 15 ботов с функциями от обработки платежей до сложной бизнес-автоматизации. Я верю в непрерывное обучение и поддержание актуальности с последними веб-технологиями.",
    yearsExperience: "Лет опыта",
    projectsCompleted: "Проектов завершено",
    telegramBots: "Telegram ботов",
    clientSatisfaction: "Удовлетворенность клиентов",
    coreExpertise: "Основная экспертиза",

    // Skills
    frontendDev: "Frontend разработка",
    frontendDesc:
      "React, Next.js, TypeScript, Tailwind CSS - Создание современных, адаптивных пользовательских интерфейсов",
    backendDev: "Backend разработка",
    backendDesc: "Node.js, Express, разработка API, проектирование баз данных и серверная архитектура",
    telegramBotDev: "Разработка Telegram ботов",
    telegramBotDesc: "Пользовательские Telegram боты с расширенными функциями, интеграцией платежей и автоматизацией",
    mobileFirst: "Mobile-First дизайн",
    mobileFirstDesc: "Адаптивные веб-приложения, оптимизированные для всех устройств и размеров экранов",
    performance: "Оптимизация производительности",
    performanceDesc:
      "Быстро загружающиеся приложения с оптимизированным кодом, кэшированием и современными инструментами сборки",
    fullStack: "Full-Stack решения",
    fullStackDesc: "Комплексная разработка веб-приложений от концепции до развертывания",

    // Projects Section
    featuredProjects: "Избранные проекты",
    projectsDescription:
      "Изучите мое портфолио веб-приложений, Telegram ботов и full-stack решений, демонстрирующих экспертизу в современных технологиях разработки и лучших практиках.",
    highlightedWork: "Выделенные работы",

    // Contact Section
    contactTitle: "Связаться",
    contactDescription:
      "Готовы воплотить ваши идеи в жизнь? Давайте обсудим ваш следующий проект и создадим что-то удивительное вместе.",
    contactInfo: "Контактная информация",
    name: "Имя",
    email: "Электронная почта",
    subject: "Тема",
    message: "Сообщение",
    sendMessage: "Отправить сообщение",
    sending: "Отправка...",

    // Footer
    footerDescription:
      "Full-stack разработчик, специализирующийся на React, Next.js, Node.js и разработке Telegram ботов. Создаю инновационные цифровые решения из Узбекистана.",
    quickLinks: "Быстрые ссылки",
    followMe: "Подписаться",
    allRightsReserved: "Все права защищены.",
  },

  uz: {
    // Navigation
    home: "Bosh sahifa",
    about: "Men haqimda",
    projects: "Loyihalar",
    contact: "Aloqa",

    // Hero Section
    heroTitle: "Salom, men Ulfatjon",
    heroSubtitle: "Full-Stack Dasturchi",
    heroDescription:
      "Frontend React/Next.js va Backend Node.js dasturchisi, zamonaviy veb-ilovalar va Telegram bot yaratishda ixtisoslashgan. O'zbekistondan butun dunyo bo'ylab mijozlar uchun innovatsion raqamli yechimlar yarataman.",
    viewMyWork: "Ishlarimni ko'rish",
    getInTouch: "Bog'lanish",

    // About Section
    aboutTitle: "Ulfatjon haqida",
    aboutDescription:
      "Zamonaviy veb-texnologiyalar va Telegram bot yaratishda ixtisoslashgan, butun dunyo bo'ylab biznes uchun innovatsion raqamli yechimlar yaratuvchi ishtiyoqli full-stack dasturchi.",
    buildingFuture: "Raqamli kelajakni quramiz",
    aboutText1:
      "3 yildan ortiq full-stack dasturlash tajribasi bilan, men React, Next.js, TypeScript va Node.js yordamida zamonaviy veb-ilovalar yaratishda ixtisoslashganman. Mening ishtiyoqim foydalanuvchi-do'st interfeyslari va mustahkam backend tizimlarini yaratishdir.",
    aboutText2:
      "O'zbekistonda joylashgan holda, men butun dunyo bo'ylab mijozlar bilan maxsus veb-ilovalar va Telegram botlarini ishlab chiqish uchun ishlayman. Elektron tijorat platformalaridan tortib avtomatlashtirish vositalarigacha, men g'oyalarni toza, samarali kod va zamonaviy dasturlash amaliyotlari bilan hayotga tatbiq etaman.",
    aboutText3:
      "Men ayniqsa Telegram bot yaratishda mohirman, to'lov qayta ishlashdan tortib murakkab biznes avtomatizatsiyasigacha bo'lgan xususiyatlarga ega 15 dan ortiq bot yaratganman. Men doimiy o'rganish va eng so'nggi veb-texnologiyalar bilan hamnafas bo'lishga ishonaman.",
    yearsExperience: "Yil tajriba",
    projectsCompleted: "Loyiha tugallangan",
    telegramBots: "Telegram botlar",
    clientSatisfaction: "Mijoz mamnunligi",
    coreExpertise: "Asosiy tajriba",

    // Skills
    frontendDev: "Frontend dasturlash",
    frontendDesc:
      "React, Next.js, TypeScript, Tailwind CSS - Zamonaviy, moslashuvchan foydalanuvchi interfeyslari yaratish",
    backendDev: "Backend dasturlash",
    backendDesc: "Node.js, Express, API yaratish, ma'lumotlar bazasi dizayni va server tomonidagi arxitektura",
    telegramBotDev: "Telegram bot yaratish",
    telegramBotDesc:
      "Rivojlangan xususiyatlar, to'lov integratsiyasi va avtomatlashtirish bilan maxsus Telegram botlar",
    mobileFirst: "Mobile-First dizayn",
    mobileFirstDesc: "Barcha qurilmalar va ekran o'lchamlari uchun optimallashtirilgan moslashuvchan veb-ilovalar",
    performance: "Ishlash optimallashtirish",
    performanceDesc:
      "Optimallashtirilgan kod, keshlash va zamonaviy qurilish vositalari bilan tez yuklanadigan ilovalar",
    fullStack: "Full-Stack yechimlari",
    fullStackDesc: "Kontseptsiyadan joylashtirish gacha to'liq veb-ilova yaratish",

    // Projects Section
    featuredProjects: "Tanlangan loyihalar",
    projectsDescription:
      "Zamonaviy dasturlash texnologiyalari va eng yaxshi amaliyotlardagi tajribani namoyish etuvchi veb-ilovalar, Telegram botlar va full-stack yechimlar portfoliomni o'rganing.",
    highlightedWork: "Ajratilgan ishlar",

    // Contact Section
    contactTitle: "Bog'lanish",
    contactDescription:
      "G'oyalaringizni hayotga tatbiq etishga tayyormisiz? Keling, keyingi loyihangizni muhokama qilib, birgalikda ajoyib narsa yarataylik.",
    contactInfo: "Aloqa ma'lumotlari",
    name: "Ism",
    email: "Elektron pochta",
    subject: "Mavzu",
    message: "Xabar",
    sendMessage: "Xabar yuborish",
    sending: "Yuborilmoqda...",

    // Footer
    footerDescription:
      "React, Next.js, Node.js va Telegram bot yaratishda ixtisoslashgan full-stack dasturchi. O'zbekistondan innovatsion raqamli yechimlar yarataman.",
    quickLinks: "Tezkor havolalar",
    followMe: "Kuzatib boring",
    allRightsReserved: "Barcha huquqlar himoyalangan.",
  },
} as const

export type TranslationKey = keyof typeof translations.en
