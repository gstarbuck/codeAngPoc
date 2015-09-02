/// <reference path="../appTypes.d.ts" />

namespace WidgetRegistry {
	export class WidgetService implements IWidgetService {
		
		// Dependencies
		public static $inject = ["appConfig", "$q"];

		constructor(
			private appConfig: AppConfig,
			private promise: ng.IQService) {

		}
		
		/* Part of IWidgetService */
		public getWidgets = (): ng.IPromise<WidgetList> => {
			var operation = this.promise.defer();
			operation.resolve([{
				id: "widget_1",
				name: "Some widget",
				amount: 100,
				description: "This is the best widget ever"
			}]);

			return operation.promise;
		}

		public createWidget = (widget: Widget): ng.IPromise<any> => {
			var operation = this.promise.defer();
			operation.resolve();

			return operation.promise;
		}

		public updateWidget = (widget: Widget): ng.IPromise<any> => {
			var operation = this.promise.defer();
			operation.resolve();

			return operation.promise;
		}

		public deleteWidget = (widget: Widget): ng.IPromise<any> => {
			var operation = this.promise.defer();
			operation.resolve();

			return operation.promise;
		}

		public undoWidgetDelete = (widget: Widget): ng.IPromise<any> => {
			var operation = this.promise.defer();
			operation.resolve();

			return operation.promise;
		}

	}
	
	// register with application module
	angular.module(appModuleName).service("widgetService", WidgetService);
}