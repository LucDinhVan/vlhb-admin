module.exports = {
  siteName: 'AntD Admin',
  copyright: 'Ant Design Admin  ©2020 zuiidea',
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
