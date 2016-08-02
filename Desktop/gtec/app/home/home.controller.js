(function(){

function homeCtrl($scope, $translate, AppService, AppService1){

  var $ctrl=this;
  $ctrl.name='gtec';

  AppService1.getAll().then(function (data) {
    $ctrl.list=data;
  });

  $scope.changeLanguage = function (key) {
    $translate.use(key);
   };
}



homeCtrl.$inject=['$scope', '$translate', 'AppService', 'AppService1'];
angular.module('gtec').controller('homeCtrl',homeCtrl);


})();