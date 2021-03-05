module.exports = {
  siteName: 'VLHB Admin',
  copyright: 'VLHB Admin  ©2020 VLCODER',
  logoPath: '/logo.svg',
  apiPrefix: '/api/v1',
  fixedHeader: true, // sticky primary layout header

  /* Layout configuration, specify which layout to use for route. */
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exclude: [/(\/(en|vi))*\/login/],
    },
  ],

  /* I18n configuration, `languages` and `defaultLanguage` are required currently. */
  i18n: {
    /* Countrys flags: https://www.flaticon.com/packs/countrys-flags */
    languages: [
      {
        key: 'vi',
        title: 'Tiếng Việt',
        flag: '/vietnam.svg',
      },
      {
        key: 'en',
        title: 'English',
        flag: '/america.svg',
      },
    ],
    defaultLanguage: 'vi',
  },
}
