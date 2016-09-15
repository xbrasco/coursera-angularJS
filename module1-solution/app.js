(function () {

  'use strict';

  angular.module('LunchChecker',[])

  .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope){

    $scope.message = "";
    $scope.formGroupClass = "";
    $scope.textClass = "";

    $scope.showMessageLunchChecker = function(){
      var numElements = countElegibleElements($scope.ElementsList);
      var result = printMessage(numElements);

      $scope.formGroupClass = result.formGroupClass;
      $scope.message = result.msg;
      $scope.textClass = result.textClass;
    }

    function countElegibleElements(item){
      if(item == undefined) return 0;
      return item.split(",").filter(function(n){ return n.trim() != ''; }).length;
    }

    function printMessage(result){
      if(result > 0) {
        if(result > 3) {
          return {"msg":"Too much!",
                  "textClass":"text-success",
                  "formGroupClass":"has-success"};
        }
        else {
          return {"msg":"Enjoy!",
                  "textClass":"text-success",
                  "formGroupClass":"has-success"};
        }
      }
      else {
        return {"msg":"Please enter data first",
                "textClass":"text-danger",
                "formGroupClass":"has-error"};
      }
    }

  }

})();
