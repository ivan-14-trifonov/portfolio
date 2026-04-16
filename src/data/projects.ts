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
      'Просмотр статей в иерархической структуре папок — пользователь открывает разделы через боковую навигацию или прямые ссылки',
      'Чтение форматированного контента с заголовками, списками, таблицами и изображениями в стандарте GitHub Flavored Markdown',
      'Просмотр метаданных статьи (верификация источников, дополнительная информация) из front-matter, отображаемых отдельно от основного текста'
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
      {
        title: 'Разделение контента и кода',
        description: 'Контент хранится отдельно от кода приложения — в другом Git-репозитории (music-literature-content). На этапе build контент клонируется через Git Submodule в папку content/, парсится через gray-matter, и на его основе генерируются статические HTML-страницы.',
        why: 'Люди, пишущие контент, не работают с кодовой базой. Они пушат Markdown-файлы в свой репозиторий, а сайт автоматически подхватывает изменения при каждом деплое.'
      },
      {
        title: 'Файловая система как база данных',
        description: 'Нет ни базы данных, ни CMS, ни API. Данные — это .md-файлы на диске, которые читаются через fs.readFileSync прямо на сервере при сборке.',
        why: 'Требовалась база знаний с универсальной структурой данных, не завязанной на конкретную технологию хранения. Файловая система с её естественной вложенностью органично ложится в основу навигации по разделам, делая отдельную БД избыточной.'
      },
      {
        title: 'Static Site Generation с generateStaticParams()',
        description: 'Все маршруты (/content/[...slug], /folder/[...slug]) генерируются заранее на этапе next build через generateStaticParams(). На выходе — набор готовых HTML-файлов.',
        why: 'Это решает три проблемы: производительность (страницы отдают готовый HTML без серверных вычислений), дешёвый хостинг (можно деплоить на Vercel без серверной инфраструктуры) и SEO (поисковики получают полностью отрендеренный контент).'
      },
      {
        title: 'Catch-all маршруты ([...slug])',
        description: 'Динамические роуты вида /content/[...slug] и /folder/[...slug] маппят произвольную глубину вложенности файловой системы на URL.',
        why: 'Никто заранее не знает, сколько будет папок и статей. Catch-all роуты позволяют добавлять новые разделы без изменения кода маршрутизации.'
      },
      {
        title: 'Markdown + Front-matter как формат данных',
        description: 'Каждый .md-файл содержит front-matter (title, sources, additionalInfo) и тело статьи. Рендерится через react-markdown + remark-gfm с поддержкой GitHub Flavored Markdown.',
        why: 'Markdown — человекочитаемый, легко редактировать в любом редакторе, отлично работает с Git (diff\'и понятны, merge-конфликты разрешимы).'
      }
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
      {
        title: 'Полноценная аутентификация и авторизация',
        description: 'Реализована система входа, регистрации и управления доступом пользователей с разграничением ролей и прав.',
        why: 'Обеспечивает безопасность данных и позволяет контролировать, кто может просматривать, редактировать или удалять контент в приложении.'
      },
      {
        title: 'Гибкая система фильтрации с include/exclude',
        description: 'Пользователи могут настраивать отображение произведений, включая или исключая определённые статусы, секции и категории.',
        why: 'Позволяет быстро находить нужный контент в большом репертуаре и фокусироваться на конкретных задачах — например, отобрать только произведения для предстоящего концерта.'
      },
      {
        title: '13 страниц с различными представлениями данных',
        description: 'Приложение включает списки произведений, детальные карточки, историю исполнений, управление коллективами и настройки.',
        why: 'Каждое представление решает конкретную задачу пользователя: от быстрого поиска до глубокого анализа репертуара.'
      },
      {
        title: 'Real-time обновления через Firestore',
        description: 'Изменения в данных синхронизируются между клиентами в реальном времени через подписки на коллекции Firestore.',
        why: 'Несколько пользователей могут работать с репертуаром одновременно и сразу видеть изменения друг друга — удобно при совместной подготовке к выступлениям.'
      },
      {
        title: 'Тестирование компонентов с Jest',
        description: 'Ключевые UI-компоненты покрыты юнит-тестами для проверки корректности рендеринга и логики.',
        why: 'Тесты снижают риск регрессий при рефакторинге и дают уверенность, что новые фичи не сломают существующий функционал.'
      }
    ],
    screenshots: [
      '/screenshots/repertoire-manager/dashboard.png',
      '/screenshots/repertoire-manager/works-list.png',
      '/screenshots/repertoire-manager/add-work.png'
    ],
    year: 2025
  }
];