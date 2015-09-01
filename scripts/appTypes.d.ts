/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <reference path="widgetState.ts" />

declare namespace WidgetRegistry {
    /** Application module name. */
    var appModuleName: string;

    /** Application configuration. */
    interface AppConfig {
        /** API endpoint. */
        apiEndpoint: string;

        /** Directory that contains templates. */
        templateRoot: string;
    }

    interface Widget {
        id: string;

        name: string;
        amount: number;
        description?: string;
        $state?: WidgetState;
    }

    type WidgetList = Array<Widget>
    
    interface IWidgetService {
        getWidgets(): ng.IPromise<WidgetList>;
        createWidget(widget: Widget): ng.IPromise<any>;
        updateWidget(widget: Widget): ng.IPromise<any>;
        deleteWidget(widget: Widget): ng.IPromise<any>;
        undoWidgetDelete(widget: Widget): ng.IPromise<any>;
    }
}

declare module angular {
    interface IScope {
        /**
         * Constructs full path to template.
         * @param fileName Template file name without path.
         */
        pathToTemplate: (fileName: string) => string;
    }
}
