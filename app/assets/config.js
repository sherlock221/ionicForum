
IonicBBS
    .run(
        [  '$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )

    //设置主题
    .config(function ($mdThemingProvider, $mdIconProvider) {


        //设置主题
        $mdThemingProvider.theme('default')
            .primaryPalette("indigo",{
                    "default" : "500",
                    "hue-1"  : "700"

        });

        var baseIcon  =  "assets/imgs/icon/";

        //设置icon
        $mdIconProvider
            .iconSet('social:comment', baseIcon+'comment-processing-outline.svg', 24)
            .iconSet('social:view', baseIcon+'ic_remove_red_eye_24px.svg', 24)
            .iconSet('social:time', baseIcon+'ic_access_time_24px.svg', 24)

    })


    //设置常量
    .constant("SERVER", {
        url: {
            ionicbbs: "/ionicForum/data"
        },
        testUrl: {
            uc: "http://10.10.68.11:8080/v1",
            message: "http://10.10.68.12:8080/v1"
        },
        formalUrl: {
            uc: "http://imzhiliao.com:10012/v1",
            message: "http://imzhiliao.com:10011/v1"
        }
    });