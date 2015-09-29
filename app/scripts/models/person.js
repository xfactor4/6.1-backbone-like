var Person = Backbone.Model.extend({
  defaults: {
    name: "[no name specified]",
    email: "noemail@example.com"
  }
});

module.exports = Person;
