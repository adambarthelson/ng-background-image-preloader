(function(){
    var app = angular.module('le-prelowd-directif', ['Preloader']);

    app.directive('bgPreloadSrc', ['preload', function(preload) {
        return function(scope, element, attrs) {
            element.parent().addClass('loading');

            preload(attrs.bgPreloadSrc).then(function(){
                element.css({
                    "background-image": "url('" + attrs.bgPreloadSrc + "')"
                });
                element.parent().removeClass('loading');
                element.parent().addClass('loaded');
            });
        }
    }]);

})();
