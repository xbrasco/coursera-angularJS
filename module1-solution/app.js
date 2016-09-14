(function () {

  'use strict';

  angular.module('LunchChecker',[])

  .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope){

    $scope.message = "";

    $scope.showMessageLunchChecker = function(){
      var elem = document.getElementById("lunch-menu").value;
      var numElements = countElegibleElements(elem.split(","));
      var result = printMessage(numElements);

      $scope.formGroupClass = result.formGroupClass;
      $scope.message = result.msg;
      $scope.textClass = result.textClass;
    }

    function countElegibleElements(item){
      return item.filter(function(n){ return n.trim() != ''; }).length;
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
