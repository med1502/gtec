(function(){

      function config($routeProvider,$translateProvider){

          $routeProvider
              .when('/',{
                 templateUrl:'app/home/home.html',
                 controller: 'homeCtrl',
                 controllerAs: 'vm'
               })

               .when('/about',{
                 templateUrl:'app/about/about.html',
                 controller: 'aboutCtrl',
                 controllerAs: 'vm'
              })

               .when('/contact',{
                 templateUrl:'app/contact/contact.html',
                 controller: 'contactCtrl',
                 controllerAs: 'vm'
              })

              .otherwise({redirectTo: '/'});

              
        $translateProvider.translations('en', {
          TITLE: 'Hello',
          FOO: 'This is a paragraph.',
          BUTTON_LANG_EN: 'english',
          BUTTON_LANG_DE: 'german'
        });
        $translateProvider.translations('de', {
          TITLE: 'Hallo',
          FOO: 'Dies ist ein Paragraph.',
          BUTTON_LANG_EN: 'englisch',
          BUTTON_LANG_DE: 'deutsch'
        });
        $translateProvider.preferredLanguage('en');

       }


     config.$inject=['$routeProvider','$translateProvider'];
     angular.module('gtec').config(config);






})

();