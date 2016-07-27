angular.module('gtec',[]);

angular.module('gtec').controller('gCtrl',function($scope) {
    var $ctrl=this;
    $ctrl.name="salut";
    $ctrl.price= 25;
    var list=[
      {name:'Mohamed'},
      {name:'Ali'},
      {name:'Salah'},
      {name:'Sofien'}

    ];

    $ctrl.list=list;
});

angular.module('gtec').controller('g1Ctrl',function($scope) {
     var $ctrl=this;
    $ctrl.name="Hello";
    $ctrl.price= 35;
});

