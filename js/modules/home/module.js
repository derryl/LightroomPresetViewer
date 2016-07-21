define([
   'angular',
   'ui.router',
   '../../config',
   'angular-filepicker'
   // 'ng-prettyjson'
   // '../../services/index'
], function(angular) {

   return angular.module('app.home', [
      'app.constants',
      // 'app.services',
      'ui.router'
   ]).config(function($stateProvider) {
    
      $stateProvider
         .state('home', {
            url: '/',
            templateUrl: 'js/modules/home/home.html',
            controller: 'HomeController'
         });
   });

});
