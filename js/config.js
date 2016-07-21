/**
 * Defines constants for application
 */
define(['angular'], function(angular) {
   return angular.module('app.constants', [])
      .constant('CONFIG', {
         defaultSettings: {
            autoplayEnabled:  false,
            autoplayInterval: 150,
            showHeatmap:      true
         }
      });
});
