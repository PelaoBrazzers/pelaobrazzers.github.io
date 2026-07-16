import { deepMerge, type DeepPartial } from '@anglefeint/astro-theme/utils/merge';
import type { ThemeConfig, AboutConfig } from './site.config.schema.ts';

export const DEFAULT_ABOUT_CONFIG: AboutConfig = {
  metaLine: '$ profile booted | mode: builder',
  sections: {
    who: 'Es: Soy un estudiante de Cyberseguridad principalmente ofensiva en redes internas con experiencia de penetración en entornos controlados y laboratorios.',
    what: 'Me especializo en explotar servicios vulnerables en una red interna, tengo conocimientos de una gran variedad de servicios incluyendo todo lo relacionado a directorio activo. Puedo llegar a ser de utilidad para comprobar servicios y dispositivos disponibles en una red e incluso explotarlos. Poseo conocimientos de escalación de privilegios tanto el Linux como Windows y conocimientos básicos de ataques webs. ',
    ethos: [
      'Mantenerse siempre dentro del scope.',
      'No dañar nada intencionalmente.',
      'Aprender del feedback.',
    ],
    now: 'Actualmente estoy buscando una oportunidad que me permita adentrame en el ámbito profesional. Mientras tanto sigo puliendo mis habilidades ademas de aprender más en cyberseguridad, como pueden ser otros ataques o incluso conocimiento defensivo.',
    contactLead:
      '-',
    signature: '> M.C.',
  },
  contact: {
    email: 'you@example.com',
    githubUrl: 'https://github.com/PelaoBrazzers/PeladoPenetrationStuff/tree/main/',
    githubLabel: 'GitHub',
  },
  sidebar: {
    dlData: 'DL Data',
    ai: 'AI',
    decryptor: 'Decryptor',
    help: 'Help',
    allScripts: 'All Scripts',
  },
  scriptsPath: '/root/bash/scripts',
  labels: {
    modalOutput: 'Output',
    modalClose: 'Close',
    responseOutput: 'Output',
    contactEmailLead: 'Reach me via',
    contactConnectLead: 'or connect on',
    backToTop: 'Back to top',
    quickAccess: 'Quick access',
    contactEmailLabel: 'email',
  },
  modals: {
    dlData: {
      title: 'Downloading...',
      subtitle: 'Critical Data',
    },
    ai: {
      title: 'AI',
      lines: [
        '~ $ ai --status --verbose',
        '',
        'model: anglefeint-core',
        'mode: reasoning + builder',
        'context window: 128k',
        'tools: codex / cursor / claude-code',
        'latency: 120-220ms',
        'safety: guardrails enabled',
        '',
        '>> system online',
        '>> ready for execution',
      ],
    },
    decryptor: {
      title: 'Password Decryptor',
      header: 'Calculating Hashes',
      keysLabel: 'keys tested',
      currentPassphraseLabel: 'Current passphrase:',
      masterKeyLabel: 'Master key',
      transientKeyLabel: 'Transient key',
    },
    help: {
      title: 'Help',
      statsLabel: 'Stats & Achievements',
      typedPrefix: 'You typed:',
      typedSuffix: 'characters',
    },
    allScripts: {
      title: '/root/bash/scripts',
    },
  },
  effects: {
    backgroundLines: [
      '~ $ ls -la',
      'total 42',
      'drwxr-xr-x  12 user  staff   384  Jan 12  about  blog  projects',
      'drwxr-xr-x   8 user  staff   256  Jan 11  .config  .ssh  keys',
      '-rw-r--r--   1 user  staff  2048  Jan 10  README.md  .env.gpg',
      '-rwxr-xr-x   1 user  staff   512  Jan  9  deploy.sh  script',
      '~ $ cat .motd',
      '>> welcome | access granted',
    ],
    scrollToasts: {
      p30: 'context parsed',
      p60: 'inference stable',
      p90: 'output finalized',
    },
  },
};

const defaultThemeConfig: ThemeConfig = {
  site: {
    title: 'PeladoBrazzers Blog',
    description:
      'Cinematic web interfaces, AI-era engineering notes, and system architecture essays.',
    url: 'https://pelaobrazzers.github.io',
    author: 'PeladoBrazzers',
    tagline: 'Built with tomcat.',
  },
  theme: {
    blogPageSize: 9,
    homeLatestCount: 3,
    enableAboutPage: true,
    pagination: {
      windowSize: 7,
      showJumpThreshold: 12,
      jump: {
        enabled: true,
        enterToGo: true,
      },
      style: {
        enabled: true,
        mode: 'random',
        variants: 9,
        fixedVariant: 1,
      },
    },
    effects: {
      enableRedQueen: true,
    },
    comments: {
      enabled: false,
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      term: '',
      number: '',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'dark',
      lang: 'en',
      loading: 'lazy',
      crossorigin: 'anonymous',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: {
      en: {
        meta: {
          label: 'English',
          hreflang: 'en',
          ogLocale: 'en_US',
        },
        site: {
          hero: 'Blog focused on Penetration. Coming Soon. WIP',
        },
        about: DEFAULT_ABOUT_CONFIG,
      },
      es: {
        meta: {
          label: 'Español',
          hreflang: 'es',
          ogLocale: 'es_ES',
          fallback: ['en'],
        },
        site: {
          hero: 'Blog enfocado en Penetracion.',
        },
        about: DEFAULT_ABOUT_CONFIG,
      },
    },
    routing: {
      defaultLocalePrefix: 'always',
    },
  },
  social: {
    links: [],
  },
};

export function defineThemeConfig(config: DeepPartial<ThemeConfig>): ThemeConfig {
  return deepMerge(defaultThemeConfig, config);
}
