(function(){

function homeCtrl($scope){

var $ctrl=this;
$ctrl.name='gtec';

}

homeCtrl.$inject=['$scope'];
angular.module('gtec').controller('homeCtrl',homeCtrl);






})

();