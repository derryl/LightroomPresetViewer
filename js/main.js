/**
 * Bootstraps angular onto the window.document node.
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'angular',
    'angular-filepicker',
    './app'
], function (angular) {
  // You can place operations that need to initialize prior to app start here
  // using the `run` function on the top-level module

  // as script is at the very bottom of the page no waiting for domReady
  angular.bootstrap( document, ['app', 'angular-filepicker' ] );
});
