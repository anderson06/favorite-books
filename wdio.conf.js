exports.config = {
  specs: [
    './e2e/features/**/*.feature',
  ],
  exclude: [],
  maxInstances: 5,
  capabilities: [{
    maxInstances: 5,
    browserName: 'phantomjs',
  }],
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost:8080',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: [
      './e2e/steps/given.js',
      './e2e/steps/then.js',
      './e2e/steps/when.js',
    ],
    backtrace: false,
    compiler: [
      'js:babel-register',
    ],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: true,
    tags: require('./e2e/tagProcessor')(process.argv),
    timeout: 20000,
    ignoreUndefinedDefinitions: false,
  },
  before: function before() {
    // Setup the Chai assertion framework
    const chai = require('chai');

    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },
  afterScenario: function afterScenario(scenario) {
    // Clear browser localStorage
    browser.execute('window.localStorage.clear();');
  },
};

