if (typeof define !== 'function') {
  // to be able to require file from node
  var define = require('amdefine')(module);
}

define({
  baseUrl: '.',
  // Here paths are set relative to `/source` folder
  paths: {
    'angular'       : '/bower_components/angular/angular',
    'async'         : '/bower_components/requirejs-plugins/src/async',
    'jquery'        : '/bower_components/jquery/dist/jquery',
    'ngResource'    : '/bower_components/angular-resource/angular-resource',
    'ngStorage'     : '/bower_components/ngstorage/ngStorage',
    'ui.router'     : '/bower_components/angular-ui-router/release/angular-ui-router',
    'underscore'    : '/bower_components/underscore/underscore',
    'filepicker-js' : '/bower_components/filepicker-js/filepicker',
    'angular-filepicker': '/bower_components/angular-filepicker/dist/angular_filepicker'
    // 'ng-prettyjson' : '/bower_components/ng-prettyjson/dist/ng-prettyjson.min'
    // 'd3'            : '/bower_components/d3/d3',
    // 'localStorageDB': '/bower_components/localStorageDB/localStorageDB',
    // 'PleaseJS'      : '/bower_components/pleasejs/dist/Please'
  },

  shim: {
    'angular': {
      'deps': ['jquery'],
      'exports': 'angular'
    },
    'angular-filepicker': ['angular','filepicker-js'],
    'ngResource': ['angular'],
    'ui.router' : ['angular']
  }
});
