angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('quizCtrl', function($scope,$ionicModal,$stateParams,Quiz,$document){


$scope.counter=1;
$scope.nextQn= function (qn) {
  $scope.counter=qn+1;
}
$scope.prevQn= function (qn) {
  $scope.counter=qn-1;
}

Quiz.qns()
    .success(function(data){

        $scope.quiz = data;
            for(i=0;i<$scope.quiz.length;i++) {

                switch ($scope.quiz[i].year) {

                  case "1965" :
                  $scope.quiz1965=$scope.quiz[i].qns;
                  break;
                   case "1966" :
                  $scope.quiz1966=$scope.quiz[i].qns;
                  break;
                }

              
            }
      })
    .error(function(err){
        console.log(err);
    })

$scope.seeResults = function (year) {
 
      var score = 0;
        for (i=0;i<$scope.quiz.length;i++) {
          if ($scope.quiz[i].year==year) {

            for (s=0;s<$scope.quiz[i].qns.length;s++){

              if ($scope.quiz[i].qns[s].ans==$scope.quiz[i].qns[s].myans) {
                score+=1;
              }
            }

            $scope.score=score;
          }
        }
        $scope.counter+=1;

}

/*

$ionicModal.fromTemplateUrl('templates/video-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  }) ; 

  $scope.showVideo = function() {
    $scope.modal.show();
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
    var popupvid=angular.element(document.querySelector('#popupvideo'));
    

popupvid[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');

  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

$scope.$on('$ionicView.enter', function () {
  console.log('view loaded'+$stateParams.year);
  
  $scope.showVideo();
})*/






})
.controller('videoCtrl', function ($scope, year, $modalInstance) {
  $scope.info=year;
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})

;
