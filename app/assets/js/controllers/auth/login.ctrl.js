IonicBBS.controller("LoginCtrl",function($scope,$rootScope){

    console.log("app..");

    //表单部分
    $scope.fm = {
        userName : "920825209@qq.com",
        passWord : "123456"
    }

    $scope.login = function(){

        console.log("login...");
    }

});