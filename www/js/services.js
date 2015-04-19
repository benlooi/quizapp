angular.module('services', [])

.factory('Quiz', function ($http){
	return {

		qns : function () {
			return $http.get('json/sg50quiz.json')
			
		}
	}
})