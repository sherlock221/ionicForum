IonicBBS
    .filter('fromNow', function() {
        return function(date) {
            return moment(date).fromNow();
        }
    })

    .filter('to_trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        }
    }]);
