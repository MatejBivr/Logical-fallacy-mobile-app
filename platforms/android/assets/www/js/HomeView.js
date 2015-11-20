var HomeView = function (service) {
	var fallacyListView;

	this.initialize = function() {
		this.$el = $('<div/>');
		this.$el.on('keyup', '.search-key', this.findByName);
		fallacyListView = new FallacyListView();
		console.log('home view trigger');
		this.render();
	};

	this.render = function() {
		this.$el.html(this.template());
		$('.content', this.$el).html(fallacyListView.$el);
		return this;
	};

	this.findByName = function() {
		service.findByName($('.search-key').val()).done(function(fallacies) {
			fallacyListView.setFallacies(fallacies);
		});
	};

	this.initialize();
}