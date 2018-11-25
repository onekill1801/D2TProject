var app = angular.module("Calculate",[]);

app.controller("calculateResult", function($scope){
    $scope.num = "0";
    $scope.total = "";
    $scope.temp = "";
    $scope.sessionDot = true;
    $scope.sessionOp = true;
    $scope.sessionOp1 = true;

    $scope.setBtnNumber= function(btn){
        if($scope.num.length < 17){
            $scope.temp = '';
            if($scope.num == "0"){
                $scope.num = btn ;
            }
            else {
            $scope.num= $scope.num + btn;
            }
        }
    }
    $scope.setBtnOp= function(btn){
        if($scope.sessionOp){
            $scope.total = $scope.total + ' ' + $scope.num + ' ' + sBtn;
            $scope.sessionOp = false;
        }
        else{
            $scope.temp = '';
            var sum = $scope.total + $scope.num;
            $scope.total = $scope.total + ' ' + $scope.num + ' ' + sBtn;
            $scope.temp = eval(sum) + '';
        }
        $scope.num = '';
    }
    $scope.Calculate= function(){
        $scope.temp = '';
        $scope.total = $scope.total + ' ' + $scope.num;
        $scope.temp = eval($scope.total);
        $scope.num ='';
        $scope.total = '';
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
        $scope.sessionOp = true;
        scope.sessionDot = true;
    }
    $scope.clearNum = function () {
        $scope.temp = '';
        $scope.num = "0";
        $scope.sessionDot = true;
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
        case 61:
            scope.Calculate();
            break;
        case 13:
            scope.Calculate();
            break;
        case 8:
            scope.subString();
            break;
        case 107:
            scope.setBtnOp('+');
            break;
        case 109:
            scope.setBtnOp('-');
            break;
        case 106:
            scope.setBtnOp('*');
            break;
        case 111:
            scope.setBtnOp('/');
            break;
        case 110:
            scope.dotNumber();
            break;
        case 192:
            scope.negNumber();
            break;
    }
    if (!scope.$phase) scope.$apply();
};
window.onload = function(){
    document.addEventListener("keydown",keyPush);
}
