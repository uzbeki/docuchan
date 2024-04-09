import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Docuchan</span>,
  project: {
    link: 'https://github.com/uzbeki/docuchan',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/uzbeki/docuchan',
  footer: {
    text: `Docuchan - documentation made simple © ${new Date().getFullYear()} by Bekhruz Otaev`,
  },
}

export default config
