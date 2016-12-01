var app = angular.module('single-page', ['ngRoute']);

	app.config(function ($routeProvider) {
	    $routeProvider

		.when('/', {
		    templateUrl: '/app/pages/404.html',
		    controller: 'mainController'

		})
		.when('/about', {
		    templateUrl: '/app/pages/about.html',
		    controller: 'mainController'
		})
		.when('/quotes', {
		    templateUrl: '/app/pages/quotes.html',
		    controller: 'mainController'
		})
	    .when('/quotes/:quoteText', {
	        templateUrl: '/app/pages/quote-detail.html',
	        controller: 'mainController'
	    });
       
	});

	app.controller('mainController', ['$scope', '$routeParams', function ($scope, $routeParams) {
	    $scope.quote = $routeParams.quoteText;
	    var dictionary = this;
	    dictionary.words = [];

	    var json = {
	        "quotes":
            [
                { "text": "We da best" },
                { "text": "Juuurrrlly" },
                { "text": "Anotha one" }
            ]
	    };

	    $scope.ocw = json;

	    dictionary.addWord = function () {
	        dictionary.words.push({ text: dictionary.text });
	        dictionary.text = '';
	    };

	}]);