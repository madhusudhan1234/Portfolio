// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('madhuApp', ['ngRoute', 'ngAnimate']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the About page
            .when('/', {
                templateUrl : 'pages/about.html',
                controller  : 'AboutController'
            })
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'AboutController'
            })

            // route for the Blog page
            .when('/blog', {
                templateUrl : 'pages/blog.html',
                controller  : 'BlogController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'ContactController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('AboutController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Student at Academia International College. I have several experiences of website designing and development. I love designing simplebeautiful, clean and user-friendly interfaces for websites.';
        $scope.pageClass = 'page-about';
    });

    scotchApp.controller('BlogController', function($scope) {
        $scope.message = 'Blog Psots are coming Soon !';
        $scope.pageClass = 'page-blog';
    });
    // home page controller


    scotchApp.controller('ContactController', function($scope) {
        $scope.message = 'Contact Me';
        $scope.pageClass = 'page-contact';
    });
