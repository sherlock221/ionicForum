IonicBBS
    //设置路由
    .config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'assets/tpls/app.html'
                    })

                    //帖子列表
                    .state('app.list', {
                        url: '/list',
                        templateUrl: 'assets/tpls/list/list.html',
                        controller: "ListCtrl as listCtrl"
                    })

                    //帖子详情
                    .state('app.detail', {
                        url: '/detail',
                        templateUrl: 'assets/tpls/detail/detail.html',
                        controller: "DetailCtrl as listCtrl",
                        resolve : {
                            "lazyload" : function($q,$timeout){

                                console.log("执行解决器")
                                var defer = $q.defer();
                                $timeout(function() {
                                    defer.resolve('Hello!');
                                }, 2000);
                                return defer.promise;
                            }
                        }
                    })




                $urlRouterProvider
                    .otherwise('/app/list');


            }
        ]
    )

//配置http 拦截器
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push("AjaxInterceptors");
    });
