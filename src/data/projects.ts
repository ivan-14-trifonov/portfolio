import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'music-literature-kb',
    title: 'Музыкальная литература',
    shortDescription: 'База знаний по музыкальной литературе МСЦ ЕХБ',
    description: 'Веб-приложение для изучения музыкальной литературы МСЦ ЕХБ с организацией контента в виде иерархических папок и статей в формате Markdown.',
    technologies: [
      { name: 'Next.js 14', category: 'framework' },
      { name: 'TypeScript', category: 'language' },
      { name: 'React', category: 'frontend' },
      { name: 'Markdown', category: 'frontend' },
      { name: 'Vercel', category: 'devops' },
    ],
    githubUrl: 'https://github.com/ivan-14-trifonov/historyofsongs',
    liveUrl: 'https://historyofsongs.vercel.app',
    functionality: [
      'Исследовательская работа и создание базы знаний по музыкальной литературе МСЦ ЕХБ',
      'Формат хранения MD — удобный одновременно для исследователей (работа с файлами) и для отображения на сайте'
    ],
    architecture: {
      description: 'Статический сайт на Next.js, где код и контент разделены: Markdown-файлы хранятся во внешнем репозитории и подключаются через Git Submodule. На Vercel контент автоматически клонируется перед сборкой (настроено в package.json). Все страницы генерируются на этапе сборки для максимальной производительности.',
      components: [
        {
          name: 'Next.js App Router',
          description: 'Маршрутизация и статическая генерация страниц через generateStaticParams()'
        },
        {
          name: 'lib/content.ts',
          description: 'Слой работы с файловой системой: чтение Markdown из внешнего репозитория (content/), парсинг front-matter, построение дерева контента'
        },
        {
          name: 'Sidebar',
          description: 'Рекурсивный компонент навигации по папкам и файлам'
        },
        {
          name: 'MarkdownContent',
          description: 'Рендеринг Markdown в React-компоненты с поддержкой GFM и кастомным отображением метаданных из front-matter'
        }
      ]
    },
    features: [
      'Полная статическая генерация → мгновенная загрузка',
      'SEO-дружественная структура',
      'Git Submodule для разделения кода и контента',
      'TypeScript strict mode',
      'Поддержка GitHub Flavored Markdown'
    ],
    year: 2026
  },
  {
    slug: 'repertoire-manager',
    title: 'Репертуар',
    shortDescription: 'CRM для управления музыкальным репертуаром коллективов',
    description: 'Веб-приложение для управления музыкальным репертуаром с системой статусов, историей исполнений и правами доступа.',
    technologies: [
      { name: 'React 18', category: 'framework' },
      { name: 'TypeScript', category: 'language' },
      { name: 'Firebase', category: 'database' },
      { name: 'Material-UI', category: 'frontend' },
      { name: 'React Router', category: 'frontend' },
      { name: 'Ant Design', category: 'frontend' },
    ],
    githubUrl: 'https://github.com/ivan-14-trifonov/rep2',
    liveUrl: 'https://rep2-delta.vercel.app/login',
    functionality: [
      'Управление музыкальными коллективами (несколько на аккаунт)',
      'CRUD операции с произведениями',
      'Система статусов произведений (в репертуаре, актуализировать, переучить и т.д.)',
      'Организация произведений по секциям с гибкой фильтрацией',
      'Учёт и история исполнений',
      'Система прав пользователей'
    ],
    architecture: {
      description: 'Single Page Application на React с Firebase в качестве бэкенда. Клиентская маршрутизация через React Router, аутентификация через Firebase Auth, данные хранятся в Firestore.',
      components: [
        {
          name: 'React Router DOM',
          description: 'Клиентская маршрутизация с защищёнными роутами через PrivateRoute'
        },
        {
          name: 'Firebase Services',
          description: 'Слой работы с данными: CRUD операции, сложные фильтры, джойны коллекций'
        },
        {
          name: 'Material-UI + Ant Design',
          description: 'UI компоненты: таблицы, формы, модальные окна'
        },
        {
          name: 'Firestore Data Model',
          description: 'Иерархическая структура: User → Space → MusicalGroup → Works/Performs/Sections'
        }
      ]
    },
    features: [
      'Полноценная аутентификация и авторизация',
      'Гибкая система фильтрации с include/exclude',
      '13 страниц с различными представлениями данных',
      'Real-time обновления через Firestore',
      'Тестирование компонентов с Jest'
    ],
    screenshots: [
      '/screenshots/repertoire-manager/dashboard.png',
      '/screenshots/repertoire-manager/works-list.png',
      '/screenshots/repertoire-manager/add-work.png'
    ],
    year: 2025
  }
];