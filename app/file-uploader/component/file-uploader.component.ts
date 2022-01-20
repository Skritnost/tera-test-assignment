import './file-uploader.scss'

class FileUploaderController {
	static $inject = ['$scope', '$timeout']

	constructor (
		private $scope: any,
		private $timeout: any
	) {
		$scope.interface = {};
		$scope.uploadCount = 0;
		$scope.success = false;
		$scope.error = false;

		$scope.$on('$dropletReady', () => {
			this.$scope.interface.allowedExtensions(['txt']);
		});

		$scope.$on('$dropletSuccess', (event, response, files) => {
			this.$scope.uploadCount = files.length;
			this.$scope.success     = true;

			this.$timeout(() => {
				this.$scope.success = false;
			}, 5000);
		});

		$scope.$on('$dropletError', (event, response) => {
			this.$scope.error = true;

			this.$timeout(() => {
				this.$scope.error = false;
			}, 5000);
		});
	}
}

export default class FileUploaderComponent implements angular.IComponentOptions {
	static selector = 'fileUploader';
	static template = require('./file-uploader.template.html').default;
	static controller = FileUploaderController;
}



