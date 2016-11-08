(function(){
  angular.module('txApp',[])
  .controller('txController',function($scope){
    $scope.txImage = 'tx_4';
    $scope.txRatio = '4:4';
    $scope.primaryVoltage = 10;
    $scope.secondaryVoltage = 10;
    $scope.primaryCurrent = 0.01;
    $scope.secondaryCurrent = 0.01;
    $scope.setSecondary = function(windings){
      $scope.txRatio= '4:'+windings;
      $scope.txImage='tx_'+windings;
      switch (windings){
        case 4:
          $scope.secondaryVoltage=10;
          $scope.primaryCurrent=0.01;
          $scope.secondaryCurrent=0.01;
        break;
        case 6:
          $scope.secondaryVoltage=15;
          $scope.primaryCurrent=0.025;
          $scope.secondaryCurrent=0.015;
        break;
        case 8:
          $scope.secondaryVoltage=20;
          $scope.primaryCurrent=0.04;
          $scope.secondaryCurrent=0.02;
        break;

    }
  }
  });
})();
