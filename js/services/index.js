define([
   'angular',
   './droppable'
], function(angular) {

   return angular.module('app.services', [
      'app.services.dropzone'
      // 'app.services.settings',
      // 'app.services.chess_storage',
      // 'app.services.chess_service',
      // 'app.services.chessboard',
      // 'app.services.color_service',
      // 'app.services.timer_service'
      // 'app.ui.header',
      // 'app.ui.menu'
   ]);

});
