IonicBBS.controller("ListCtrl",function($state,$rootScope,$scope,ListSev,mePageLoading){


//    $scope.effect = "Jammed blind";
    $scope.effect = "Wave";
    var show = function(){
        // 手动调用动画
        mePageLoading.show($scope.effect);
        setTimeout(function(){
            mePageLoading.hide();
        }, 2500);
    };

    $scope.listTypes = [
        {
            "typeName" : "全部",
            "typeNum" : "",
            "typeColor" : "",
            "selected" : true
        },
        {
            "typeName" : "ionic",
            "typeNum" : "",
            "typeColor" : ""
        },
        {
            "typeName" : "教程",
            "typeNum" : "",
            "typeColor" : ""
        },
        {
            "typeName" : "demo",
            "typeNum" : "",
            "typeColor" : ""
        }
    ]



    $scope.fm = {
        pageIndex : "1",
        pageSize : "2",
        orderType : "0",
        topicType : "all",
        searchType : "news"
    }


    $scope.posts = [];


    var  getList = function(){

        ListSev.getList($scope.fm)
            .then(function(res){
                $scope.posts = $scope.posts.concat(res);
            },function(err){

            });
    }


    //默认
    getList();




    //显示详情
    $scope.showDetail = function(post){
        post.active = true;
        show();
       // $state.go("app.detail");
    }

});
