export default class FileUploader implements angular.IComponentOptions {
	static selector = 'fileUploader';
	static template = require('./file-uploader.template.html').default;
	static controller = FileUploaderController;
}

function FileUploaderController(): void {

}



