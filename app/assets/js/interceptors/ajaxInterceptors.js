/**
 * angularJS http拦截器
 */

IonicBBS
    .factory("AjaxInterceptors",function($window,$q,SERVER,$rootScope){
        return {
            //成功请求
            'request' : function(config ){
                //设置请求头token
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers['voySession'] = $window.sessionStorage.token;
                }
                return config ;
            },

            //成功返回
            response : function(response){
                return response;
            },

            //捕获返回异常
            responseError : function(response){


                var defer = $q.defer();
                var temp = {};

                switch (response.status) {
                    case (500):
                        temp.content  = "服务器错误(500)";
                        break;
                    case (401):
                        temp.content  = "您未登录";
                        break;
                    case (403):
                        temp.content  = "您没有权限";
                        break;
                    case (404):
                        temp.content  = "没找到该资源(404)";
                        break;
                    case (408):
                        temp.content  = "服务器超时";
                        break;
                    default:
                        temp.content  = "网络错误";
                }



                var sp = {
                    content : temp.content,
                    title : "error",
                    status : response.status,
                    type : "danger"
                }
                $rootScope.httpError = sp;
                defer.reject(response.status);
                return defer.promise;
            }
        }

    });