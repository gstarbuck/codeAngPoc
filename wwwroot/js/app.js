/// <reference path="appTypes.d.ts" />
/// <reference path="../typings/angular-ui-router/angular-ui-router.d.ts" />
var WidgetRegistry;
(function (WidgetRegistry) {
    WidgetRegistry.appModuleName = "widgetRegistryApp";
    var app = angular.module(WidgetRegistry.appModuleName, ["widgetRegistryData", "ui.router", "ui.bootstrap"]);
    app.config(["appConfig", "$stateProvider", "$urlRouterProvider", function (appConfig, $stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("root", {
                url: "/",
                templateUrl: getPathToTemplate(appConfig, "index.html")
            });
            $urlRouterProvider.otherwise("/");
        }]);
    app.run(["appConfig", "$rootScope", function (appConfig, $rootScope) {
            $rootScope.pathToTemplate = function (fileName) { return getPathToTemplate(appConfig, fileName); };
        }]);
    function getPathToTemplate(appConfig, fileName) {
        return appConfig.templateRoot + fileName;
    }
})(WidgetRegistry || (WidgetRegistry = {}));

//# sourceMappingURL=maps/app.js.map