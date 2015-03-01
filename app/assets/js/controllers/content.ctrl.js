IonicBBS.controller("ContentCtrl", function ($state, $rootScope, $scope, ListSev, $timeout,mePageLoading) {

    $scope.toggle = "hide";

    mePageLoading.ef

    //显示详情
    $rootScope.showLoading = function (post) {
        $scope.effect = "Jammed blind";
        //    $scope.effect = "Wave";
        mePageLoading.show($scope.effect);
        setTimeout(function () {
            mePageLoading.hide();
        }, 2500);


    }

});
