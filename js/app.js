/**
 * loads sub modules and wraps them up into the main module.
 * This should be used for top-level module definitions only.
 */
define([
   'angular',
   'underscore',
   'ngStorage',
   'ui.router',
   './config',
   // 'angular-filepicker',
   // './modules/docs/index',
   // './services/index',
   './modules/home/index'
   // './modules/ui/index'

], function(angular) {

   return angular.module('app', [
      'app.constants',
      'ngStorage',
      'angular-filepicker',
      // 'app.docs',
      // 'app.services',
      'app.home',
      // 'app.ui',
      'ui.router'
   ])
   .config(function( $urlRouterProvider, $locationProvider) {
      
      $urlRouterProvider.otherwise('/');
      
      $locationProvider.html5Mode(true);
      
   });

});
