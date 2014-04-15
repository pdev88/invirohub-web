'use strict';

angular
  .module('invirohubWebApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about/about', {
        templateUrl: 'views/about/about.html',
        controller: 'AboutAboutCtrl'
      })
      .when('/about/What', {
        templateUrl: 'views/about/what.html',
        controller: 'AboutWhatCtrl'
      })
      .when('/about/Operating', {
        templateUrl: 'views/about/operating.html',
        controller: 'AboutOperatingCtrl'
      })
      .when('/about/BBBEE', {
        templateUrl: 'views/about/bbbee.html',
        controller: 'AboutBbbeeCtrl'
      })
      .when('/about/Socio', {
        templateUrl: 'views/about/socio.html',
        controller: 'AboutSocioCtrl'
      })
      .when('/services/Vending', {
        templateUrl: 'views/services/vending.html',
        controller: 'ServicesVendingCtrl'
      })
      .when('/services/Profiling', {
        templateUrl: 'views/services/profiling.html',
        controller: 'ServicesProfilingCtrl'
      })
      .when('/services/Field', {
        templateUrl: 'views/services/field.html',
        controller: 'ServicesFieldCtrl'
      })
      .when('/services/Consulting', {
        templateUrl: 'views/services/consulting.html',
        controller: 'ServicesConsultingCtrl'
      })
      .when('/services/Municipal', {
        templateUrl: 'views/services/municipal.html',
        controller: 'ServicesMunicipalCtrl'
      })
      .when('/services/Commercial', {
        templateUrl: 'views/services/commercial.html',
        controller: 'ServicesCommercialCtrl'
      })
      .when('/services/Casestudy', {
        templateUrl: 'views/services/casestudy.html',
        controller: 'ServicesCasestudyCtrl'
      })
      .when('/products/Three', {
        templateUrl: 'views/products/three.html',
        controller: 'ProductsThreeCtrl'
      })
      .when('/products/Concentrator', {
        templateUrl: 'views/products/concentrator.html',
        controller: 'ProductsConcentratorCtrl'
      })
      .when('/products/Appliance', {
        templateUrl: 'views/products/appliance.html',
        controller: 'ProductsApplianceCtrl'
      })
      .when('/products/Display', {
        templateUrl: 'views/products/display.html',
        controller: 'ProductsDisplayCtrl'
      })
      .when('/products/Circuit', {
        templateUrl: 'views/products/circuit.html',
        controller: 'ProductsCircuitCtrl'
      })
      .when('/products/Water', {
        templateUrl: 'views/products/water.html',
        controller: 'ProductsWaterCtrl'
      })
      .when('/tools+resources/Downloads', {
        templateUrl: 'views/tools+resources/downloads.html',
        controller: 'ToolsResourcesDownloadsCtrl'
      })
      .when('/tools+resources/Software', {
        templateUrl: 'views/tools+resources/software.html',
        controller: 'ToolsResourcesSoftwareCtrl'
      })
      .when('/tools+resources/Become', {
        templateUrl: 'views/tools+resources/become.html',
        controller: 'ToolsResourcesBecomeCtrl'
      })
      .when('/Contact/Contact', {
        templateUrl: 'views/contact/contact.html',
        controller: 'ContactContactCtrl'
      })
      .when('/services/Services', {
        templateUrl: 'views/services/services.html',
        controller: 'ServicesServicesCtrl'
      })
      .when('/tools+resources/Tools', {
        templateUrl: 'views/tools+resources/tools.html',
        controller: 'ToolsResourcesToolsCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/content', {
        templateUrl: 'views/content.html',
        controller: 'ContentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
