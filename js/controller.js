angular.module('single-page', [])
	.controller('mainController', function ($scope) {
	    
	    var dictionary = this;
	    dictionary.words = [];
	    dictionary.emos = [':)', '^_^', '^_-', ':D', 'xD', ':P', ':-)', ':-P'];

	    var json = {
	        "quotes":
            [
                { "text": "We da best" },
                { "text": "Juuurrrlly" },
                { "text": "Anotha one" }
            ]
	    };

	    $scope.ocw = json;

	    dictionary.addWord = function(){
		    dictionary.words.push({text:dictionary.text});
		    dictionary.text = '';
	    };



	    dictionary.randomEmo = function () {
	        return dictionary.emos[Math.floor(Math.random() * dictionary.emo.length)];
	    }
});