IonicBBS.controller("AppCtrl",function($rootScope,$mdDialog,$mdToast,$mdBottomSheet){



    $rootScope.loginPage = function(ev) {
        $mdDialog.show({
            controller: "LoginCtrl",
            templateUrl: 'assets/tpls/auth/login.html',
            targetEvent: ev
        })


    };

    $rootScope.RegisterPage = function(ev) {
        $mdDialog.show({
            controller: "RegisterCtrl",
            templateUrl: 'assets/tpls/auth/register.html',
            targetEvent: ev
        })
    };

    //toast位置
    $rootScope.toastPosition = {
        bottom: true,
        top: false,
        left: false,
        right: true
    };

    var getToastPosition = function() {
        return Object.keys($rootScope.toastPosition)
            .filter(function(pos) { return $rootScope.toastPosition[pos]; })
            .join(' ');
    };


    //提示框
    $rootScope.toast = function(content){
        var toast =   $mdToast.simple()
            .content(content || "这是一个空内容哦?")
            .position(getToastPosition())
            .hideDelay(3000);
        $mdToast.show(toast);
    }

    //小屏幕时弹出button sheet
    $rootScope.headerSheet = function($event){
        $mdBottomSheet.show({
            templateUrl: 'assets/tpls/sheet/sheet-header.html',
            controller: 'GridBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {

    });




    }
})

    .controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: '登录', icon: 'assets/imgs/icon/ic_account_box_24px.svg' },
            { name: '注册', icon: 'assets/imgs/icon/ic_email_24px.svg' },
            { name: '查询', icon: 'assets/imgs/icon/ic_pageview_24px.svg' },
            { name: '帮助', icon: 'assets/imgs/icon/ic_help_24px.svg' }

        ];
        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    });