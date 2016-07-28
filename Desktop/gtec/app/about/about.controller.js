(function(){

function aboutCtrl($scope){

var $ctrl=this;
$ctrl.name='about gtec';

}

aboutCtrl.$inject=['$scope'];
angular.module('gtec').controller('aboutCtrl',aboutCtrl);






})

();