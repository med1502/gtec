(function(){

function contactCtrl($scope){

var $ctrl=this;
$ctrl.name='Contacter';

}

contactCtrl.$inject=['$scope'];
angular.module('gtec').controller('contactCtrl',contactCtrl);






})

();