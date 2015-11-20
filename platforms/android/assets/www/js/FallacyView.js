var FallacyView = function(fallacy) {

  this.initialize = function() {
      this.$el = $('<div/>');
      console.log('fallacy view trigger');
  };

  this.render = function() {
      this.$el.html(this.template(fallacy));
      return this;
  };

  this.initialize();

}