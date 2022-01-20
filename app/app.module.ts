import './app.scss'
import angular = require('angular')
import FileUploader from './file-uploader/file-uploader.module';

angular
  .module('app', [require('angular-route'), 'ngDroplet', FileUploader])
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.when('/file-uploader', {
        template: '<file-uploader></file-uploader>'
      }).otherwise('/file-uploader');
    }
  ])

if (module.hot) {
  module.hot.accept()
}
