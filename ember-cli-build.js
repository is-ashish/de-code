/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-prism': {
    'components': ['scss', 'javascript'], //needs to be an array, or undefined.
    'plugins': ['line-highlight']
  },
  sassLint: {
   configPath: '.sass-lint.yml',
   shouldThrowExceptions: true,
   shouldLog: true
 }
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  //icons
  app.import('vendor/icons/mayaicon/style.css');
  app.import('vendor/icons/mayaicon/fonts/mayaicon.eot',   { destDir: 'assets/fonts/'});
  app.import('vendor/icons/mayaicon/fonts/mayaicon.svg',   { destDir: 'assets/fonts/'});
  app.import('vendor/icons/mayaicon/fonts/mayaicon.ttf',   { destDir: 'assets/fonts/'});
  app.import('vendor/icons/mayaicon/fonts/mayaicon.woff',  { destDir: 'assets/fonts/'});

  return app.toTree();
};
