'use strict';

var appModule = angular.module('invirohubWebApp', [
    'ui.router',
    'ngCookies',
    'ngResource',
    'ngSanitize'
]);

appModule.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = undefined;
}]);

appModule
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url  : '/',
                views: {
                    'main-content': {
                        templateUrl: 'views/main.html',
                        controller : 'MainCtrl'
                    },
                    'header'      : {
                        templateUrl: 'views/header.html',
                        controller : 'HeaderCtrl'
                    },
                    'footer'      : {
                        templateUrl: 'views/footer.html',
                        controller : 'FooterCtrl'
                    }
                }
            })
            .state('about', {
                url  : '/about',
                views: {
                    'main-content': {
                        templateUrl : 'views/about/main.html',
                        'controller': 'AboutMainCtrl'
                    },
                    'header'      : {
                        templateUrl: 'views/header.html',
                        controller : 'HeaderCtrl'
                    },
                    'footer'      : {
                        templateUrl: 'views/footer.html',
                        controller : 'FooterCtrl'
                    }

                }
            })
            .state('about.about', {
                url  : '/about',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/about.html',
                        controller : 'AboutAboutCtrl'
                    }
                }
            })
            .state('about.directors', {
                url  : '/directors',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/directors.html',
                        controller : 'AboutDirectorsCtrl'
                    }
                }
            })
            .state('about.operating', {
                url  : '/operating',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/operating.html',
                        controller : 'AboutOperatingCtrl'
                    }
                }
            })
            .state('about.what', {
                url  : '/what',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/what.html',
                        controller : 'AboutWhatCtrl'
                    }
                }
            })
            .state('about.socio', {
                url  : '/socio',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/socio.html',
                        controller : 'AboutSocioCtrl'
                    }
                }
            })
            .state('about.bbbee', {
                url  : '/bbbee',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/bbbee.html',
                        controller : 'AboutBbbeeCtrl'
                    }
                }
            })
        ;
    });


































