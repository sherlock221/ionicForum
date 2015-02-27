

IonicBBS.service("ListSev",function($http,$q,SERVER){


       var ListSev = {

           getList : function(index,size,topicType,searchType,orderType){
               var defer = $q.defer();
                $http.get(SERVER.url.ionicbbs+"/list/data.json",{
                    params : {
                        pageIndex : index,
                        pageSize : size,
                        orderType : orderType,
                        topicType : topicType,
                        searchType :searchType
                    }
                })
                    .success(function(res){
                        defer.resolve(res);
                    })
                    .error(function(err){
                        defer.reject(res);
                    });
               return defer.promise;

           }


       };


    return ListSev;


});