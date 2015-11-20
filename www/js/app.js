// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    FallacyListView.prototype.template = Handlebars.compile($("#fallacy-list-tpl").html());
    FallacyView.prototype.template = Handlebars.compile($("#fallacy-tpl").html());

    

    var service = new FallaciesService();
    var slider = new PageSlider($('body'));
    service.initialize().done(function () {
        router.addRoute('', function() {
            slider.slidePage(new HomeView(service).render().$el);
            console.log('route home trigger');
        });

        router.addRoute('fallacies/:id', function(id) {
            service.findById(parseInt(id)).done(function(fallacy) {
                slider.slidePage(new FallacyView(fallacy).render().$el);
                console.log('route fallacy view trigger');
            });
        });

        router.start();
    });    

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);

}());