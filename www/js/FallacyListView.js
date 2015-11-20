var FallacyListView = function () {
    var fallacies;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
        console.log('fallacy list View trigger');
    };

    this.setFallacies = function(list) {
        fallacies = list;
        this.render();
    }

    this.render = function() {
        this.$el.html(this.template(fallacies));
        return this;
    };

    this.initialize();
}