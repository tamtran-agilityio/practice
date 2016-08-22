var ENV_PRODUCTION = process.env.NODE_ENV;

module.exports = function(config) {
  config.set({
    basePath : '',
    frameworks: ['jasmine'],

    files: [
      //{ pattern: 'node_modules/es6-shim/es6-shim.js', included: true },
      { pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/long-stack-trace-zone.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/jasmine-patch.js', included: true, watched: false },
      { pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: false },
      { pattern: 'src/**/*.spec.ts', included: true , watched: true}
    ],

    exclude:[''],

    preprocessors:{
      'src/**/*.spec.ts': ['webpack', 'sourcemap']
    },

    // start these browsers
    browsers: ['Chrome'],

    plugins : [
      require('es6-shim'),
      require('babel-polyfill'),
      require('zone'),
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('karma-jenkins-reporter'),
      require('karma-mocha-reporter')
    ],

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.ts', '.es6', '.js', '.json']
      },
      module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { stage: 0 } },
          { test: /\.ts$/, exclude: /node_modules/, loader: 'ts' },
          { test: /\.html/, loader: 'html?minimize=false' },
          { test: /\.styl$/, loader: 'css!stylus' },
          { test: /\.css$/, loader: 'style!css' },
          { test: /\.(gif|png|jpe?g)$/i, loader: 'file' }
        ]
      },
      stats: { colors: true, reasons: true },
      debug: true
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true //please don't spam the console when running in karma!
    },

    // web server port
    port: 3000,
    hostname: '0.0.0.0',

    //reporters configuration
    reporters: ['progress','coverage','mocha'],

    // reporter options
    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      output: 'autowatch',
      showDiff: true
    },

    coverageReporter: {
      dir: 'coverage/',
      type : 'html',
      reporters: [
        {type: 'html'},
        {type: 'text'},
        { type: 'json' }
      ]
    },

    proxies: {
      // required for component assests fetched by Angular's compiler
      '/src/': '/base/src/'
    },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    logLevel: config.LOG_INFO,

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
