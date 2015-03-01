IonicBBS.controller("ListCtrl",function($state,$rootScope,$scope,ListSev,$timeout){




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
        $state.go("app.detail");
    }

});
