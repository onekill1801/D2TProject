var app = angular.module("Calculate",[]);

app.controller("calculateResult", function($scope){
    $scope.num = "0";
    $scope.total = "";
    $scope.sessionDot = true;

    $scope.setBtnNumber= function(btn){
        if($scope.num == "0"){
            $scope.num = btn ;
        }
        else {
           $scope.num+=btn;
        }
    }
    $scope.setBtnOp= function(btn){
        var sum = $scope.total + $scope.num;
        $scope.total = $scope.total + $scope.num + btn;
        $scope.num = eval(sum) + '';
    }
    $scope.Calculate= function(){
        $scope.num = eval($scope.total);
    }
    $scope.subString = function(){
        if($scope.num){
            var len = $scope.num.length;
            $scope.num = $scope.num.substr(0, len-1);
            if(len == 1) {
                $scope.num = '0';
            }
        }
    }
    $scope.clearAll = function () {
        $scope.num = "0";
        $scope.total = "";
    }
    $scope.clearNum = function () {
        $scope.num = "0";
    }
    $scope.negNumber = function(){
        $scope.num = 0 - $scope.num;
        $scope.num += '';
    }
    $scope.dotNumber = function(){
        if($scope.sessionDot){
            $scope.num = $scope.num + '.';
            $scope.sessionDot = false;
        }
    }

});

function keyPush(event){
    var scope = angular.element(document.getElementById('test')).scope();
    switch(event.keyCode) {
        case 49:
            scope.setBtnNumber("1");
            break;
        case 50:
            scope.setBtnNumber("2");
            break;
        case 51:
            scope.setBtnNumber("3");
            break;
        case 52:
            scope.setBtnNumber("4");
            break;
        case 53:
            scope.setBtnNumber("5");
            break;
        case 54:
            scope.setBtnNumber("6");
            break;
        case 55:
            scope.setBtnNumber("7");
            break;
        case 56:
            scope.setBtnNumber("8");
            break;
        case 57:
            scope.setBtnNumber("9");
            break;
        case 48:
            scope.setBtnNumber("0");
            break;
    }
    if (!scope.$phase) scope.$apply();
};
window.onload = function(){
    document.addEventListener("keydown",keyPush);
}
