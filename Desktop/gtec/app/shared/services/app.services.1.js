(function(){

function AppService($http, $q){

this.getAll = function () {

        var different=$q.defer();
        $http.get('app/shared/data/data.json')
            .then(function (response) {
            
                different.resolve(response.data);

            });

        return different.promise;
}

}

AppService.$inject=['$http', '$q'];
angular.module('gtec').service('AppService1',AppService);


})();