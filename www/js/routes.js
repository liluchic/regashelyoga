angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.page2', {
    url: '/yogasequence',
    views: {
      'tab4': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('tabsController.page3', {
    url: '/meditation',
    views: {
      'tab3': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('tabsController.page4', {
    url: '/music',
    views: {
      'tab2': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('tabsController.page5', {
    url: '/blog',
    views: {
      'tab1': {
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.page7', {
    url: '/brachalashemesh',
    views: {
      'tab4': {
        templateUrl: 'templates/page7.html',
        controller: 'page7Ctrl'
      }
    }
  })

//this next few controllers were copied from page7 brachalashemesh
    .state('tabsController.sidrat_halohchem1', {
      url: '/sidrathalohchem1',
      views: {
        'tab4': {

        templateUrl: 'templates/sidrat_halohchem1.html',
        controller: 'sidrat_halohchem1Ctrl'
      }
    }
    })

    .state('tabsController.yareah', {
      url: '/yareah',
      views: {
        'tab4': {
          templateUrl: 'templates/yareah.html',
          controller: 'yareahCtrl'
        }
      }
    })

    .state('tabsController.six', {
      url: '/six',
      views: {
        'tab4': {
          templateUrl: 'templates/six.html',
          controller: 'sixCtrl'
        }
      }
    })


    .state('tabsController.sit', {
      url: '/sit',
      views: {
        'tab4': {
          templateUrl: 'templates/sit.html',
          controller: 'sitCtrl'
        }
      }
    })


    .state('tabsController.runner', {
      url: '/runner',
      views: {
        'tab4': {
          templateUrl: 'templates/runner.html',
          controller: 'runnerCtrl'
        }
      }
    })

    .state('tabsController.page10', {
    url: '/yogabreathingandastma',
    views: {
      'tab1': {
        templateUrl: 'templates/page10.html',
        controller: 'page10Ctrl'
      }
    }
  })

  .state('tabsController.page12', {
    url: '/yoogaforbettersleep',
    views: {
      'tab1': {
        templateUrl: 'templates/page12.html',
        controller: 'page12Ctrl'
      }
    }
  })

  .state('tabsController.page11', {
    url: '/sweatyogaandlifestyle',
    views: {
      'tab1': {
        templateUrl: 'templates/page11.html',
        controller: 'page11Ctrl'
      }
    }
  })


    .state('tabsController.page13', {
      url: '/handpossitionsemphasis',
      views: {
        'tab1': {
          templateUrl: 'templates/page13.html',
          controller: 'page13Ctrl'
        }
      }
    })

/*
    .state('tabsController.page14', {
      url: '/maditationsounds',
      views: {
        'tab3': {
          templateUrl: 'templates/page3.html',
          controller: 'page14Ctrl'
        }
      }
    })

    */

    .state('tabsController.page15', {
      url: '/sweatyogaandlifestyle',
      views: {
        'tab1': {
          templateUrl: 'templates/page15.html',
          controller: 'page15Ctrl'
        }
      }
    })


    .state('tabsController.page16', {
      url: '/onwarrior',
      views: {
        'tab1': {
          templateUrl: 'templates/page16.html',
          controller: 'page16Ctrl'
        }
      }
    })


    .state('tabsController.page17', {
      url: '/fiveyamas',
      views: {
        'tab1': {
          templateUrl: 'templates/page17.html',
          controller: 'page17Ctrl'
        }
      }
    })

    .state('tabsController.page18', {
      url: '/shibananda',
      views: {
        'tab1': {
          templateUrl: 'templates/page18.html',
          controller: 'page18Ctrl'
        }
      }
    })

  $urlRouterProvider.otherwise('/page1/yogasequence')



});
