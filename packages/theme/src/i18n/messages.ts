import { DEFAULT_LOCALE, type Locale } from './config';

export type Messages = {
  siteTitle: string;
  siteDescription: string;
  langLabel: string;
  nav: {
    home: string;
    blog: string;
    about: string;
    status: string;
    statusAria: string;
  };
  home: {
    hero: string;
    latest: string;
    viewAll: string;
    noPosts: string;
  };
  about: {
    title: string;
    description: string;
    who: string;
    what: string;
    ethos: string;
    now: string;
    contact: string;
    regenerate: string;
  };
  blog: {
    title: string;
    pageTitle: string;
    archiveDescription: string;
    pageDescription: string;
    previous: string;
    next: string;
    jumpTo: string;
    jumpGo: string;
    jumpInputLabel: string;
    backToBlog: string;
    backToTop: string;
    related: string;
    comments: string;
    responseOutput: string;
    rqBadge: string;
    rqReplayAria: string;
    metaPublished: string;
    metaUpdated: string;
    metaReadMinutes: string;
    systemStatusAria: string;
    systemModelLabel: string;
    systemModeLabel: string;
    systemStateLabel: string;
    promptContextLabel: string;
    latencyLabel: string;
    confidenceLabel: string;
    statsWords: string;
    statsTokens: string;
    heroMonitor: string;
    heroSignalSync: string;
    heroModelOnline: string;
    regenerate: string;
    relatedAria: string;
    backToBlogAria: string;
    paginationAria: string;
    toastP10: string;
    toastP30: string;
    toastP60: string;
    toastDone: string;
  };
};

export const DEFAULT_MESSAGES: Record<string, Messages> = {
  en: {
    siteTitle: 'Angle Feint',
    siteDescription: 'Cinematic web interfaces and AI-era engineering essays.',
    langLabel: 'Language',
    nav: {
      home: 'Home',
      blog: 'Blog',
      about: 'About',
      status: 'system: online',
      statusAria: 'System status',
    },
    home: {
      hero: 'Write a short introduction for your site and what readers can expect from your posts.',
      latest: 'Latest Posts',
      viewAll: 'View all posts',
      noPosts: 'No posts available in this language yet.',
    },
    about: {
      title: 'About — Hacker Ethos',
      description: 'Who I am, what I build, and the hacker ethos behind my work.',
      who: 'WhoAmI',
      what: 'What I Build',
      ethos: 'Hacker Ethos',
      now: 'Now',
      contact: 'Contact',
      regenerate: 'Replay scan',
    },
    blog: {
      title: 'Blog',
      pageTitle: 'Blog - Page',
      archiveDescription: 'Essays on AI-era craft, web engineering, and system architecture.',
      pageDescription: 'Blog archive page',
      previous: 'Previous',
      next: 'Next',
      jumpTo: 'Jump to page',
      jumpGo: 'Go',
      jumpInputLabel: 'Page number',
      backToBlog: 'Back to blog',
      backToTop: 'Back to top',
      related: 'Related',
      comments: 'Comments',
      responseOutput: 'Output',
      rqBadge: 'monitor feed',
      rqReplayAria: 'Replay monitor feed',
      metaPublished: 'published',
      metaUpdated: 'updated',
      metaReadMinutes: 'min read',
      systemStatusAria: 'Model status',
      systemModelLabel: 'model',
      systemModeLabel: 'mode',
      systemStateLabel: 'state',
      promptContextLabel: 'Context',
      latencyLabel: 'latency est',
      confidenceLabel: 'confidence',
      statsWords: 'words',
      statsTokens: 'tokens',
      heroMonitor: 'neural monitor',
      heroSignalSync: 'signal sync active',
      heroModelOnline: 'model online',
      regenerate: 'Replay scan',
      relatedAria: 'Related posts',
      backToBlogAria: 'Back to blog',
      paginationAria: 'Pagination',
      toastP10: 'context parsed 10%',
      toastP30: 'context parsed 30%',
      toastP60: 'inference stable 60%',
      toastDone: 'output finalized',
    },
  },
  es: {
    siteTitle: 'Angle Feint',
    siteDescription: 'Interfaces web cinematográficas y ensayos de ingeniería en la era de IA.',
    langLabel: 'Idioma',
    nav: {
      home: 'Inicio',
      blog: 'Blog',
      about: 'Sobre mí',
      status: 'system: online',
      statusAria: 'Estado del sistema',
    },
    home: {
      hero: 'Blog con informción sobre pentesting',
      latest: 'Últimas publicaciones',
      viewAll: 'Ver todas las publicaciones',
      noPosts: 'Aún no hay publicaciones en este idioma.',
    },
    about: {
      title: 'About — Hacker Ethos',
      description: 'Quién soy, qué construyo y el ethos hacker detrás de mi trabajo.',
      who: 'Quién soy',
      what: 'Qué construyo',
      ethos: 'Ethos hacker',
      now: 'Ahora',
      contact: 'Contacto',
      regenerate: 'Repetir escaneo',
    },
    blog: {
      title: 'Blog',
      pageTitle: 'Blog - Página',
      archiveDescription:
        'Ensayos sobre oficio en la era de IA, ingeniería web y arquitectura de sistemas.',
      pageDescription: 'Página del archivo del blog',
      previous: 'Anterior',
      next: 'Siguiente',
      jumpTo: 'Ir a página',
      jumpGo: 'Ir',
      jumpInputLabel: 'Número de página',
      backToBlog: 'Volver al blog',
      backToTop: 'Volver arriba',
      related: 'Relacionados',
      comments: 'Comentarios',
      responseOutput: 'Salida',
      rqBadge: 'monitor de señal',
      rqReplayAria: 'Reproducir monitor de señal',
      metaPublished: 'publicado',
      metaUpdated: 'actualizado',
      metaReadMinutes: 'min de lectura',
      systemStatusAria: 'Estado del modelo',
      systemModelLabel: 'modelo',
      systemModeLabel: 'modo',
      systemStateLabel: 'estado',
      promptContextLabel: 'Contexto',
      latencyLabel: 'latencia est',
      confidenceLabel: 'confianza',
      statsWords: 'palabras',
      statsTokens: 'tokens',
      heroMonitor: 'monitor neural',
      heroSignalSync: 'sincronización de señal activa',
      heroModelOnline: 'modelo en línea',
      regenerate: 'Repetir escaneo',
      relatedAria: 'Publicaciones relacionadas',
      backToBlogAria: 'Volver al blog',
      paginationAria: 'Paginación',
      toastP10: 'contexto analizado 10%',
      toastP30: 'contexto analizado 30%',
      toastP60: 'inferencia estable 60%',
      toastDone: 'salida finalizada',
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return DEFAULT_MESSAGES[locale] ?? DEFAULT_MESSAGES[DEFAULT_LOCALE];
}
