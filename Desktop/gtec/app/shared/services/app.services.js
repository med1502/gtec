(function(){

function AppService($http, $q){

    return { getAll:getAll} ;

function getAll() {

   /* return[
        {id:1,name:'name1'},
        {id:2,name:'name2'},
        {id:3,name:'name3'},
        {id:4,name:'name4'}
        ]*/


        var different=$q.defer();
        $http.get('app/shared/data/data.json')
            .then(function (response) {
            
                different.resolve(response.data);

            });


        return different.promise;
}



}

AppService.$inject=['$http', '$q'];
angular.module('gtec').factory('AppService',AppService);


})();