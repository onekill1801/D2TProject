app.controller("showResult", function($scope){

});

app.controller("clickButton", function($scope){
    $scope.plus= function(){

    }
});
app.controller("calculateResult", function($scope){
    $scope.result = 0;
    $scope.plus= function(num1,num2){
        $scope.result = num1+num2;
    }
    $scope.showKQ= function(){
        $scope.result
    }
});