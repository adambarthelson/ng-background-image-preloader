(function(){

    // A utility class for preloading image objects.
    var app = angular.module( "Preloader", [] );

    app.factory('preload', ['$q', function($q) {
        return function(url) {
            var deffered = $q.defer(),
                image = new Image();

            image.src = url;

            if (image.complete) {

                deffered.resolve();
 
            } else {

                image.addEventListener('load', function() {
                    deffered.resolve();
                });

                image.addEventListener('error', function() {
                    deffered.reject();
                });
            }

            return deffered.promise;
        }
    }]);

})();
